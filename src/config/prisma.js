const { PrismaClient } = require("@prisma/client");

// Enhanced database configuration for Vercel and Supabase
const getDatabaseUrl = () => {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    console.error("❌ DATABASE_URL environment variable is not set!");
    throw new Error("DATABASE_URL is required");
  }
  
  console.log("🔗 Database URL found:", dbUrl.replace(/:[^:]*@/, ":***@")); // Hide password in logs
  
  // For production/serverless + Supabase, ensure we use connection pooling
  const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL || process.env.VERCEL_ENV;
  
  if (isProduction && dbUrl.includes('supabase.co')) {
    console.log("🚀 Detected Production + Supabase, optimizing connection...");
    console.log("🔍 Environment indicators:", {
      NODE_ENV: process.env.NODE_ENV,
      VERCEL: !!process.env.VERCEL,
      VERCEL_ENV: process.env.VERCEL_ENV
    });
    
    // Convert direct connection to pooled connection
    if (dbUrl.includes(':5432')) {
      let pooledUrl = dbUrl.replace(':5432', ':6543');
      
      // Add comprehensive connection parameters for Supabase
      if (!pooledUrl.includes('pgbouncer=true')) {
        const separator = pooledUrl.includes('?') ? '&' : '?';
        pooledUrl = `${pooledUrl}${separator}pgbouncer=true&connection_limit=1&pool_timeout=10&sslmode=require`;
      }
      
      console.log("🔄 Using pooled connection for production with parameters");
      console.log("📋 Final URL structure:", pooledUrl.replace(/:[^:]*@/, ":***@"));
      return pooledUrl;
    }
    
    // If already using 6543, add SSL parameters if missing
    if (dbUrl.includes(':6543') && !dbUrl.includes('sslmode=require')) {
      const separator = dbUrl.includes('?') ? '&' : '?';
      const enhancedUrl = `${dbUrl}${separator}sslmode=require&pool_timeout=10`;
      console.log("🔧 Enhanced existing pooled connection");
      return enhancedUrl;
    }
  }
  
  return dbUrl;
};

const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "info", "warn", "error"]
      : ["error"],
  errorFormat: "pretty",
  datasources: {
    db: {
      url: getDatabaseUrl(),
    },
  },
});

// Test connection with retry mechanism
let connectionAttempts = 0;
const maxRetries = 3;

const testConnection = async () => {
  try {
    connectionAttempts++;
    console.log(`🔄 Testing database connection (attempt ${connectionAttempts}/${maxRetries})...`);
    
    await prisma.$connect();
    console.log("📦 Database connected successfully");
    
    // Test basic query
    const count = await prisma.anggota.count();
    console.log(`✅ Database is operational. Total anggota: ${count}`);
    
  } catch (err) {
    console.error(`❌ Database connection failed (attempt ${connectionAttempts}):`, err.message);
    
    if (connectionAttempts < maxRetries) {
      console.log(`⏳ Retrying in 2 seconds...`);
      setTimeout(testConnection, 2000);
    } else {
      console.error("💥 All database connection attempts failed!");
      // Don't throw error here to allow server to start
    }
  }
};

// Initial connection test
testConnection();

// Graceful shutdown untuk berbagai event
process.on("beforeExit", async () => {
  console.log("📤 Disconnecting from database...");
  await prisma.$disconnect();
});

process.on("SIGINT", async () => {
  console.log("📤 Received SIGINT, disconnecting from database...");
  await prisma.$disconnect();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  console.log("📤 Received SIGTERM, disconnecting from database...");
  await prisma.$disconnect();
  process.exit(0);
});

module.exports = prisma;
