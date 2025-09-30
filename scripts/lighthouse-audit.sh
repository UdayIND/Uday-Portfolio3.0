#!/bin/bash

# Lighthouse Audit Script for Uday Portfolio
# This script runs Lighthouse audits on the portfolio

echo "🚀 Starting Lighthouse Audit for Uday Portfolio..."
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if Lighthouse is installed
if ! command -v lighthouse &> /dev/null; then
    echo -e "${YELLOW}Lighthouse is not installed. Installing now...${NC}"
    npm install -g lighthouse
fi

# Check if the dev server is running
if ! curl -s http://localhost:3001 > /dev/null; then
    echo -e "${RED}❌ Dev server is not running on port 3001${NC}"
    echo -e "${YELLOW}Please start the dev server with: npm run dev${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Dev server is running${NC}"
echo ""

# Create reports directory if it doesn't exist
mkdir -p lighthouse-reports

# Run Lighthouse audit for Home page
echo "📊 Auditing Home Page (/)..."
lighthouse http://localhost:3001 \
  --only-categories=performance,accessibility,best-practices,seo \
  --output=html \
  --output-path=./lighthouse-reports/home-report.html \
  --chrome-flags="--headless" \
  --quiet

echo -e "${GREEN}✓ Home page audit complete${NC}"
echo ""

# Run Lighthouse audit for Works page
echo "📊 Auditing Works Page (/works)..."
lighthouse http://localhost:3001/works \
  --only-categories=performance,accessibility,best-practices,seo \
  --output=html \
  --output-path=./lighthouse-reports/works-report.html \
  --chrome-flags="--headless" \
  --quiet

echo -e "${GREEN}✓ Works page audit complete${NC}"
echo ""

echo "================================================"
echo -e "${GREEN}✅ Lighthouse audits completed!${NC}"
echo ""
echo "📁 Reports saved to:"
echo "   - ./lighthouse-reports/home-report.html"
echo "   - ./lighthouse-reports/works-report.html"
echo ""
echo "💡 Open the HTML files in your browser to view detailed results."
echo "================================================"

# Open reports in default browser (macOS)
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo ""
    echo "Opening reports in browser..."
    open ./lighthouse-reports/home-report.html
    open ./lighthouse-reports/works-report.html
fi

