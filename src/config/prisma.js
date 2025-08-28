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
  const isProduction =
    process.env.NODE_ENV === "production" ||
    process.env.VERCEL ||
    process.env.VERCEL_ENV;

  if (isProduction && dbUrl.includes("supabase.co")) {
    console.log("🚀 Detected Production + Supabase, optimizing connection...");
    console.log("🔍 Environment indicators:", {
      NODE_ENV: process.env.NODE_ENV,
      VERCEL: !!process.env.VERCEL,
      VERCEL_ENV: process.env.VERCEL_ENV,
    });

    // For Session Pooler (port 5432), add connection parameters if missing
    if (
      dbUrl.includes("pooler.supabase.com") &&
      !dbUrl.includes("pgbouncer=true")
    ) {
      const separator = dbUrl.includes("?") ? "&" : "?";
      let enhancedUrl = `${dbUrl}${separator}pgbouncer=true&connection_limit=5&pool_timeout=30&connect_timeout=60&sslmode=require`;

      console.log("🔄 Enhanced Session Pooler connection with parameters");
      console.log(
        "📋 Final URL structure:",
        enhancedUrl.replace(/:[^:]*@/, ":***@")
      );
      return enhancedUrl;
    }

    // If already has pgbouncer, add SSL parameters if missing
    if (
      dbUrl.includes("pgbouncer=true") &&
      !dbUrl.includes("sslmode=require")
    ) {
      const separator = dbUrl.includes("?") ? "&" : "?";
      const enhancedUrl = `${dbUrl}${separator}sslmode=require&connect_timeout=60&pool_timeout=30`;
      console.log("🔧 Enhanced existing pooled connection");
      return enhancedUrl;
    }
  }

  return dbUrl;
};

const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === "development"
      ? ["warn", "error"] // Reduced logging untuk performance
      : ["error"],
  errorFormat: "minimal", // Faster error formatting
  datasources: {
    db: {
      url: getDatabaseUrl(),
    },
  },
  // Optimized connection pool for performance
  __internal: {
    engine: {
      connectionTimeout: 10000, // 10 seconds - lebih cepat
      queryTimeout: 15000, // 15 seconds - lebih cepat
    },
  },
});

// Test connection with retry mechanism
let connectionAttempts = 0;
const maxRetries = 3;

const testConnection = async () => {
  try {
    connectionAttempts++;
    console.log(
      `🔄 Testing database connection (attempt ${connectionAttempts}/${maxRetries})...`
    );

    await prisma.$connect();
    console.log("📦 Database connected successfully");

    // Test basic query
    const count = await prisma.anggota.count();
    console.log(`✅ Database is operational. Total anggota: ${count}`);
  } catch (err) {
    console.error(
      `❌ Database connection failed (attempt ${connectionAttempts}):`,
      err.message
    );

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
// Force rebuild Wed, Jul 23, 2025  7:15:36 AM
