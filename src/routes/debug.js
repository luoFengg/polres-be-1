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
    DATABASE_URL_PREFIX: process.env.DATABASE_URL ? process.env.DATABASE_URL.substring(0, 50) + '...' : 'NOT_SET',
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

// Test database connection endpoint
router.get('/debug/db', async (req, res) => {
  try {
    // Gunakan prisma instance yang sudah dikonfigurasi dari config
    const prisma = require('../config/prisma');
    
    console.log('Testing database connection...');
    console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL);
    console.log('DATABASE_URL preview:', process.env.DATABASE_URL ? process.env.DATABASE_URL.substring(0, 50) + '...' : 'NOT_SET');
    
    // Test environment detection
    const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL || process.env.VERCEL_ENV;
    console.log('Production environment detected:', isProduction);
    console.log('Environment indicators:', {
      NODE_ENV: process.env.NODE_ENV,
      VERCEL: !!process.env.VERCEL,
      VERCEL_ENV: process.env.VERCEL_ENV
    });

    // Test connection
    await prisma.$connect();
    console.log('✅ Connection successful');

    // Test query
    const count = await prisma.anggota.count();
    console.log('✅ Query successful, count:', count);

    await prisma.$disconnect();

    res.json({
      success: true,
      message: 'Database connection test successful',
      data: {
        connected: true,
        anggotaCount: count,
        databaseUrl: process.env.DATABASE_URL ? process.env.DATABASE_URL.substring(0, 50) + '...' : 'NOT_SET'
      },
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ Database test failed:', error.message);
    
    res.status(500).json({
      success: false,
      message: 'Database connection test failed',
      error: error.message,
      data: {
        connected: false,
        databaseUrl: process.env.DATABASE_URL ? process.env.DATABASE_URL.substring(0, 50) + '...' : 'NOT_SET'
      },
      timestamp: new Date().toISOString()
    });
  }
});

module.exports = router;
