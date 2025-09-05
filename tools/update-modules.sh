#!/usr/bin/env bash
set -euo pipefail

echo "*** Crypto Firewall: Updating Remote Assets..."

# Declare the assets mapping
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

max_retries=3
retry_delay=5
updated_files=()

# Function to download with retries
download_with_retry() {
  local url="$1"
  local outfile="$2"

  for attempt in $(seq 1 $max_retries); do
    if wget -q -T 30 -O "$outfile" -- "$url"; then
      if [ -s "$outfile" ]; then
        return 0
      else
        echo "WARNING: Empty file on attempt $attempt: $url" >&2
      fi
    else
      echo "WARNING: Failed to download on attempt $attempt: $url" >&2
    fi

    if [ "$attempt" -lt "$max_retries" ]; then
      echo "Retrying in ${retry_delay}s..."
      sleep "$retry_delay"
    fi
  done

  echo "ERROR: Giving up after $max_retries attempts: $url" >&2
  return 1
}

# Loop through assets
for localURL in "${!assets[@]}"; do
  remoteURL="${assets[$localURL]}"
  echo "*** Downloading ${remoteURL}"

  localDir=$(dirname "$localURL")
  mkdir -p "$localDir"

  TEMPFILE=$(mktemp)

  if ! download_with_retry "$remoteURL" "$TEMPFILE"; then
    rm -f "$TEMPFILE"
    exit 1
  fi

  if ! cmp -s "$TEMPFILE" "$localURL" 2>/dev/null; then
    echo "    New version found: ${localURL}"
    if [ "${1:-}" != "dry" ]; then
      mv -f "$TEMPFILE" "$localURL"
      updated_files+=("$localURL")
    else
      rm -f "$TEMPFILE"
    fi
  else
    echo "    No change: ${localURL}"
    rm -f "$TEMPFILE"
  fi
done

# Save updated files (sorted) to GitHub environment for commit message
if [ ${#updated_files[@]} -gt 0 ]; then
  sorted=$(printf "%s\n" "${updated_files[@]}" | sort)
  echo "UPDATED_FILES=$sorted" >> "$GITHUB_ENV"
else
  echo "UPDATED_FILES=" >> "$GITHUB_ENV"
fi

echo "*** All downloads completed successfully."
