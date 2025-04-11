#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import {execSync} from 'child_process'
import axios from 'axios'
import {satisfies} from 'semver'

// Local threat list cache
const THREAT_LIST_PATH = path.join(process.cwd(), 'threat-list.json')

// Minimum time between threat list updates (24 hours)
const THREAT_LIST_UPDATE_INTERVAL = 24 * 60 * 60 * 1000

// Default threats (fallback if remote fetch fails)
const DEFAULT_THREATS = [
  // Supply chain attacks (npm)
  {
    package: 'pdf-to-office',
    versions: '^1.1.2',
    reason: 'Atomic/Exodus wallet clipper',
  },
  {
    package: 'ethers-provider2',
    versions: '*',
    reason: 'Reverse shell installer',
  },
  // ... (other default threats from previous list)
]

/**
 * Fetches latest threat list from GitHub repository
 */
async function fetchLatestThreatList() {
  try {
    const {data} = await axios.get(
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/threat-list.json',
      {timeout: 5000},
    )
    return data
  } catch (error) {
    console.warn(
      '⚠️  Could not fetch updated threat list, using cached version',
    )
    return null
  }
}

/**
 * Validates the structure of the threat list
 */
function validateThreatList(threatList) {
  if (!Array.isArray(threatList)) {
    throw new Error('Invalid threat list format: Expected an array')
  }
  threatList.forEach((threat) => {
    if (
      typeof threat.package !== 'string' ||
      typeof threat.versions !== 'string' ||
      typeof threat.reason !== 'string'
    ) {
      throw new Error('Invalid threat list entry format')
    }
  })
  return threatList
}

/**
 * Updates local threat list if stale
 */
async function updateThreatListIfNeeded() {
  try {
    let shouldUpdate = false

    if (!fs.existsSync(THREAT_LIST_PATH)) {
      shouldUpdate = true
    } else {
      const stats = fs.statSync(THREAT_LIST_PATH)
      const lastModified = new Date(stats.mtime).getTime()
      shouldUpdate = Date.now() - lastModified > THREAT_LIST_UPDATE_INTERVAL
    }

    if (shouldUpdate) {
      console.log('🔍 Checking for updated threat list...')
      const freshThreats = await fetchLatestThreatList()
      if (freshThreats) {
        const tempFilePath = `${THREAT_LIST_PATH}.tmp`

        try {
          const fd = fs.openSync(
            tempFilePath,
            fs.constants.O_CREAT | fs.constants.O_EXCL | fs.constants.O_RDWR,
            0o600,
          )
          fs.writeFileSync(
            fd,
            JSON.stringify(validateThreatList(freshThreats), null, 2),
          )
          fs.closeSync(fd)
          fs.renameSync(tempFilePath, THREAT_LIST_PATH)
          console.log('✅ Threat list updated')
        } catch (error) {
          if (fs.existsSync(tempFilePath)) {
            fs.unlinkSync(tempFilePath)
          }
          throw error
        }
      }
    }
  } catch (error) {
    console.warn('⚠️  Threat list update check failed:', error.message)
  }
}
function loadThreatList() {
  try {
    if (fs.existsSync(THREAT_LIST_PATH)) {
      return JSON.parse(fs.readFileSync(THREAT_LIST_PATH, 'utf8'))
    }
  } catch (error) {
    console.warn('⚠️  Could not load cached threat list:', error.message)
  }
  return DEFAULT_THREATS
}

/**
 * Checks if package version matches known malicious pattern
 */
function isMalicious(pkgName, pkgVersion) {
  const threats = loadThreatList()
  return threats.some((threat) => {
    return threat.package === pkgName && satisfies(pkgVersion, threat.versions)
  })
}

/**
 * Scans package.json and lockfile for malicious dependencies
 */
function scanDependencies() {
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
    const lockfile = JSON.parse(fs.readFileSync('package-lock.json', 'utf8'))

    const allDeps = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
      ...packageJson.optionalDependencies,
    }

    let hasMalicious = false

    Object.entries(allDeps).forEach(([name, versionRange]) => {
      const pkgVersion = lockfile.packages[`node_modules/${name}`]?.version
      if (pkgVersion && isMalicious(name, pkgVersion)) {
        console.error(`❌ MALICIOUS: ${name}@${pkgVersion}`)
        hasMalicious = true
      }
    })

    return !hasMalicious
  } catch (error) {
    console.error('❌ Dependency scan failed:', error.message)
    return false
  }
}

// Main execution
;(async () => {
  try {
    await updateThreatListIfNeeded()

    console.log('🔍 Running crypto-firewall security scan...')
    const scanPassed = scanDependencies()

    if (!scanPassed) {
      console.error('\n🚨 Malicious dependencies detected!')
      console.error(
        'Recommendation: Run "npm audit" and review the packages mentioned above',
      )
      process.exit(1)
    }

    console.log('\n✅ No known malicious dependencies detected')
    process.exit(0)
  } catch (error) {
    console.error('❌ Security scan failed:', error.message)
    process.exit(1)
  }
})()
