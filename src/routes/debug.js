/**
 * Debug endpoint untuk cek environment variables di Vercel
 * HANYA UNTUK DEBUGGING - HAPUS SETELAH SELESAI!
 */

const express = require('express');
const router = express.Router();

// Debug endpoint - HANYA untuk development/debugging
router.get('/debug/env', (req, res) => {
  // HATI-HATI: Jangan expose sensitive data di production!
  const envInfo = {
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL_EXISTS: !!process.env.DATABASE_URL,
    DATABASE_URL_PREFIX: process.env.DATABASE_URL ? process.env.DATABASE_URL.substring(0, 20) + '...' : 'NOT_SET',
    JWT_SECRET_EXISTS: !!process.env.JWT_SECRET,
    SUPABASE_URL_EXISTS: !!process.env.SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY_EXISTS: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    ALL_ENV_KEYS: Object.keys(process.env).filter(key => 
      key.includes('DATABASE') || 
      key.includes('JWT') || 
      key.includes('SUPABASE') ||
      key.includes('VERCEL')
    )
  };

  res.json({
    success: true,
    message: 'Environment variables check',
    data: envInfo,
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
