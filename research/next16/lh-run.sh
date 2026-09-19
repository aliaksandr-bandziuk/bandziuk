#!/usr/bin/env bash
# Mobile Lighthouse (default simulated throttling) against a URL, N runs, with a summary line per run.
# Usage: bash research/next16/lh-run.sh <label> <url> [runs]
LABEL=$1; URL=$2; RUNS=${3:-3}
CHROME="$LOCALAPPDATA/ms-playwright/chromium-1234/chrome-win64/chrome.exe"
DIR="$(dirname "$0")"
for i in $(seq 1 $RUNS); do
  OUT="$DIR/${LABEL}_$i.json"
  CHROME_PATH="$CHROME" npx --yes lighthouse@13.5.0 "$URL" --quiet --output=json --output-path="$OUT" \
    --only-categories=performance,accessibility,best-practices,seo \
    --chrome-flags="--headless=new --no-sandbox" >/dev/null 2>&1
  node -e "const j=require('./$OUT');const c=j.categories,a=j.audits;console.log('$LABEL run $i:',['performance','accessibility','best-practices','seo'].map(k=>k+' '+Math.round(c[k].score*100)).join(', '),'| FCP',a['first-contentful-paint'].displayValue,'LCP',a['largest-contentful-paint'].displayValue,'TBT',a['total-blocking-time'].displayValue,'CLS',a['cumulative-layout-shift'].displayValue,'SI',a['speed-index'].displayValue,'| legacy-js',(a['legacy-javascript']||a['legacy-javascript-insight']||{}).displayValue||'-')" 2>&1 | tail -1
done
