# Supabase + Vercel Connection Troubleshooting Guide

## Current Issue
❌ Can't reach database server at `db.scfxcaonlozdepfgsmlw.supabase.co:6543`

## Status Checklist
- ✅ Local environment works perfectly
- ✅ Vercel deployment successful
- ✅ Environment variables properly set
- ✅ Code converted to use connection pooling (port 6543)
- ❌ Database connection from Vercel still fails

## Possible Solutions to Try

### 1. Check Supabase Database Settings
Go to your Supabase dashboard → Settings → Database:
- Ensure "Connection pooling" is enabled
- Check if there are any IP restrictions
- Verify the database is not paused/sleeping

### 2. Alternative DATABASE_URL Formats

Try these different URL formats in Vercel environment variables:

**Option A: Direct Connection with SSL**
```
postgresql://postgres:polres1922@db.scfxcaonlozdepfgsmlw.supabase.co:5432/postgres?sslmode=require
```

**Option B: Connection Pooling (Current)**
```
postgresql://postgres:polres1922@db.scfxcaonlozdepfgsmlw.supabase.co:6543/postgres?pgbouncer=true&connection_limit=1&sslmode=require
```

**Option C: Session Mode (Alternative)**
```
postgresql://postgres:polres1922@db.scfxcaonlozdepfgsmlw.supabase.co:6543/postgres?pgbouncer=true&pool_mode=session
```

### 3. Check Supabase Project Status
- Verify project is not in "pausing" mode (free tier limitation)
- Check if there are any outages on Supabase status page
- Ensure your project hasn't exceeded free tier limits

### 4. Prisma Configuration
Our current configuration automatically:
- Detects Vercel environment
- Converts port 5432 → 6543 for connection pooling
- Adds SSL and connection parameters

### 5. Alternative: Use Supabase REST API
If direct database connection continues to fail, consider using Supabase REST API instead of direct Prisma connection for Vercel deployment.

## Next Steps
1. Wait for current deployment (with SSL parameters)
2. If still fails, try different DATABASE_URL formats
3. Check Supabase dashboard for any restrictions
4. Consider upgrading to paid plan if free tier limitations

## Test Commands
```bash
# Test current deployment
node test-deployment.js

# Test specific endpoint
curl "https://polres-be-1-r5cc.vercel.app/api/debug/db"
```
