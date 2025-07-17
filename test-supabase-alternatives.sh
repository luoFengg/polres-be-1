#!/bin/bash

echo "🔍 Testing Supabase Connection Alternatives"
echo "=========================================="

BASE_URL="https://polres-be-1-r5cc.vercel.app"

echo ""
echo "1. Testing current connection (pooled port 6543)..."
curl -s "$BASE_URL/api/debug/db" | grep -E "(success|error|connected)" | head -2

echo ""
echo "2. Testing environment variables..."
curl -s "$BASE_URL/api/debug/env" | grep -E "(DATABASE_URL|VERCEL)" | head -3

echo ""
echo "3. Testing with simple login..."
curl -s -X POST "$BASE_URL/api/auth/login" \
  -H "Content-Type: application/json" \
  -d '{"nrp":"123456","password":"test"}' | head -100

echo ""
echo "=========================================="
echo "📋 Next Steps if All Tests Fail:"
echo "1. Check Supabase project status (paused/active)"
echo "2. Verify Supabase connection pooling is enabled"
echo "3. Try alternative DATABASE_URL format"
echo "4. Check Supabase dashboard for any alerts"
