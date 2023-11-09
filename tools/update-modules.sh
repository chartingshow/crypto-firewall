#!/usr/bin/env bash
#
# This script assumes a linux environment

TEMPFILE=$(mktemp)

echo "*** sc-block-bad-crypto-filter-lists: updating remote assets..."

declare -A assets
assets=(
    ['src/blacklists/annoyances-filters/annoyances-cookies.txt']='https://malware-filter.gitlab.io/malware-filter/urlhaus-filter.txt'
    ['src/blacklists/annoyances-filters/annoyances-others.txt']='https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/annoyances-cookies.txt'
    ['src/blacklists/malicious-filters/hosts.txt']='https://malware-filter.gitlab.io/malware-filter/urlhaus-filter.txt'
    ['src/blacklists/malicious-filters/nomalware.txt']='https://malware-filter.gitlab.io/malware-filter/urlhaus-filter-hosts.txt'
    ['src/blacklists/phishing-filters/hosts.txt']='https://malware-filter.gitlab.io/malware-filter/phishing-filter-hosts.txt'
    ['src/blacklists/phishing-filters/nomalware.txt']='https://malware-filter.gitlab.io/malware-filter/phishing-filter.txt'
    ['src/blacklists/pup-filters/hosts.txt']='https://curbengh.github.io/pup-filter/pup-filter-hosts.txt'
    ['src/blacklists/pup-filters/nomalware.txt']='https://curbengh.github.io/pup-filter/pup-filter.txt'
    ['src/blacklists/tracking-filters/nomalware.txt']='https://curbengh.github.io/malware-filter/tracking-filter.txt'
    ['src/blacklists/urlhaus-filters/hosts.txt']='https://curbengh.github.io/malware-filter/vn-badsite-filter-hosts.txt'
    ['src/blacklists/urlhaus-filters/nomalware.txt']='https://curbengh.github.io/malware-filter/vn-badsite-filter.txt'
)

for i in "${!assets[@]}"; do
    localURL="$i"
    remoteURL="${assets[$i]}"
    echo "*** Downloading ${remoteURL}"
    if wget -q -T 30 -O "$TEMPFILE" -- "$remoteURL"; then
        if [ -s "$TEMPFILE" ]; then
            if ! cmp -s "$TEMPFILE" "$localURL"; then
                echo "    New version found: ${localURL}"
                if [ "$1" != "dry" ]; then
                    mv "$TEMPFILE" "$localURL"
                fi
            fi
        fi
    fi
done
