#!/usr/bin/env bash
set -euo pipefail

echo "*** Crypto Firewall: Updating Remote Assets..."

# Declare an associative array
declare -A assets=(
  ['src/blacklists/malicious-filters/hosts.txt']='https://malware-filter.gitlab.io/malware-filter/urlhaus-filter.txt'
  ['src/blacklists/malicious-filters/nomalware.txt']='https://malware-filter.gitlab.io/malware-filter/urlhaus-filter-hosts.txt'
  ['src/blacklists/phishing-filters/hosts.txt']='https://malware-filter.gitlab.io/malware-filter/phishing-filter-hosts.txt'
  ['src/blacklists/phishing-filters/nomalware.txt']='https://malware-filter.gitlab.io/malware-filter/phishing-filter.txt'
  ['src/blacklists/pup-filters/hosts.txt']='https://curbengh.github.io/pup-filter/pup-filter-hosts.txt'
  ['src/blacklists/pup-filters/nomalware.txt']='https://curbengh.github.io/pup-filter/pup-filter.txt'
  ['src/blacklists/tracking-filters/nomalware.txt']='https://curbengh.github.io/malware-filter/tracking-filter.txt'
  ['src/blacklists/urlhaus-filters/hosts.txt']='https://curbengh.github.io/malware-filter/vn-badsite-filter-hosts.txt'
  ['src/blacklists/urlhaus-filters/nomalware.txt']='https://curbengh.github.io/malware-filter/vn-badsite-filter.txt'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_ARB.json']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_ARB.json'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_ARB.txt']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_ARB.txt'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_BCH.json']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_BCH.json'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_BCH.txt']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_BCH.txt'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_BSC.json']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_BSC.json'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_BSC.txt']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_BSC.txt'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_BSV.json']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_BSV.json'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_BSV.txt']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_BSV.txt'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_BTG.json']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_BTG.json'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_BTG.txt']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_BTG.txt'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_DASH.json']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_DASH.json'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_DASH.txt']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_DASH.txt'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_ETC.json']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_ETC.json'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_ETC.txt']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_ETC.txt'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_ETH.json']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_ETH.json'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_ETH.txt']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_ETH.txt'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_LTC.json']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_LTC.json'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_LTC.txt']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_LTC.txt'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_USDT.json']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_USDT.json'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_USDT.txt']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_USDT.txt'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_XBT.csv']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_XBT.csv'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_XBT.json']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_XBT.json'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_XBT.txt']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_XBT.txt'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_XMR.json']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_XMR.json'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_XMR.txt']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_XMR.txt'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_XRP.json']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_XRP.json'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_XRP.txt']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_XRP.txt'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_XVG.json']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_XVG.json'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_XVG.txt']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_XVG.txt'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_ZEC.json']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_ZEC.json'
  ['src/ofac-sanctioned-digital-currency-addresses/sanctioned_addresses_ZEC.txt']='https://raw.githubusercontent.com/0xB10C/ofac-sanctioned-digital-currency-addresses/lists/sanctioned_addresses_ZEC.txt'
)

failures=0

for localURL in "${!assets[@]}"; do
  remoteURL="${assets[$localURL]}"
  echo "*** Downloading ${remoteURL}"

  localDir=$(dirname "$localURL")
  mkdir -p "$localDir"

  TEMPFILE=$(mktemp)

  if wget -q -T 30 -O "$TEMPFILE" -- "$remoteURL"; then
    if [ -s "$TEMPFILE" ]; then
      if ! cmp -s "$TEMPFILE" "$localURL" 2>/dev/null; then
        echo "    New version found: ${localURL}"
        if [ "${1:-}" != "dry" ]; then
          mv -f "$TEMPFILE" "$localURL"
        else
          rm -f "$TEMPFILE"
        fi
      else
        echo "    No change: ${localURL}"
        rm -f "$TEMPFILE"
      fi
    else
      echo "    Downloaded file is empty: ${localURL}"
      rm -f "$TEMPFILE"
      failures=$((failures+1))
    fi
  else
    echo "    Failed to download: ${remoteURL}"
    rm -f "$TEMPFILE"
    failures=$((failures+1))
  fi
done

if [ $failures -gt 0 ]; then
  echo "*** Completed with $failures errors."
  exit 1
fi

echo "*** Completed successfully."
