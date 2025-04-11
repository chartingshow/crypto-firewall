import fs from 'fs'
import {scanDependencies} from './check-rules'

// scripts/check-rules.test.js

jest.mock('fs')

describe('scanDependencies', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should return true when no malicious dependencies are found', () => {
    const mockPackageJson = JSON.stringify({
      dependencies: {'safe-package': '^1.0.0'},
    })
    const mockLockfile = JSON.stringify({
      packages: {
        'node_modules/safe-package': {version: '1.0.1'},
      },
    })

    fs.readFileSync.mockImplementation((filePath) => {
      if (filePath === 'package.json') return mockPackageJson
      if (filePath === 'package-lock.json') return mockLockfile
    })

    const result = scanDependencies()
    expect(result).toBe(true)
  })

  test('should return false when malicious dependencies are detected', () => {
    const mockPackageJson = JSON.stringify({
      dependencies: {'pdf-to-office': '^1.1.2'},
    })
    const mockLockfile = JSON.stringify({
      packages: {
        'node_modules/pdf-to-office': {version: '1.1.2'},
      },
    })

    fs.readFileSync.mockImplementation((filePath) => {
      if (filePath === 'package.json') return mockPackageJson
      if (filePath === 'package-lock.json') return mockLockfile
    })

    const result = scanDependencies()
    expect(result).toBe(false)
  })

  test('should handle missing package.json gracefully', () => {
    fs.readFileSync.mockImplementation((filePath) => {
      if (filePath === 'package.json') throw new Error('File not found')
    })

    const result = scanDependencies()
    expect(result).toBe(false)
  })

  test('should handle invalid package.json gracefully', () => {
    fs.readFileSync.mockImplementation((filePath) => {
      if (filePath === 'package.json') return 'invalid-json'
    })

    const result = scanDependencies()
    expect(result).toBe(false)
  })

  test('should handle missing package-lock.json gracefully', () => {
    const mockPackageJson = JSON.stringify({
      dependencies: {'safe-package': '^1.0.0'},
    })

    fs.readFileSync.mockImplementation((filePath) => {
      if (filePath === 'package.json') return mockPackageJson
      if (filePath === 'package-lock.json') throw new Error('File not found')
    })

    const result = scanDependencies()
    expect(result).toBe(false)
  })

  test('should detect malicious dependencies based on threat list', () => {
    const mockPackageJson = JSON.stringify({
      dependencies: {'pdf-to-office': '^1.1.2', 'safe-package': '^1.0.0'},
    })
    const mockLockfile = JSON.stringify({
      packages: {
        'node_modules/pdf-to-office': {version: '1.1.2'},
        'node_modules/safe-package': {version: '1.0.1'},
      },
    })

    fs.readFileSync.mockImplementation((filePath) => {
      if (filePath === 'package.json') return mockPackageJson
      if (filePath === 'package-lock.json') return mockLockfile
    })

    const result = scanDependencies()
    expect(result).toBe(false)
  })

  test('should return true when threat list is empty', () => {
    const mockPackageJson = JSON.stringify({
      dependencies: {'safe-package': '^1.0.0'},
    })
    const mockLockfile = JSON.stringify({
      packages: {
        'node_modules/safe-package': {version: '1.0.1'},
      },
    })

    jest.spyOn(fs, 'existsSync').mockReturnValue(true)
    jest.spyOn(fs, 'readFileSync').mockImplementation((filePath) => {
      if (filePath === 'threat-list.json') return JSON.stringify([])
      if (filePath === 'package.json') return mockPackageJson
      if (filePath === 'package-lock.json') return mockLockfile
    })

    const result = scanDependencies()
    expect(result).toBe(true)
  })

  test('should handle invalid threat list gracefully', () => {
    const mockPackageJson = JSON.stringify({
      dependencies: {'safe-package': '^1.0.0'},
    })
    const mockLockfile = JSON.stringify({
      packages: {
        'node_modules/safe-package': {version: '1.0.1'},
      },
    })

    jest.spyOn(fs, 'existsSync').mockReturnValue(true)
    jest.spyOn(fs, 'readFileSync').mockImplementation((filePath) => {
      if (filePath === 'threat-list.json') return 'invalid-json'
      if (filePath === 'package.json') return mockPackageJson
      if (filePath === 'package-lock.json') return mockLockfile
    })

    const result = scanDependencies()
    expect(result).toBe(false)
  })

  test('should handle missing threat list gracefully', () => {
    const mockPackageJson = JSON.stringify({
      dependencies: {'safe-package': '^1.0.0'},
    })
    const mockLockfile = JSON.stringify({
      packages: {
        'node_modules/safe-package': {version: '1.0.1'},
      },
    })

    jest.spyOn(fs, 'existsSync').mockImplementation((filePath) => {
      if (filePath === 'threat-list.json') return false
      return true
    })
    jest.spyOn(fs, 'readFileSync').mockImplementation((filePath) => {
      if (filePath === 'package.json') return mockPackageJson
      if (filePath === 'package-lock.json') return mockLockfile
    })

    const result = scanDependencies()
    expect(result).toBe(true)
  })
})
