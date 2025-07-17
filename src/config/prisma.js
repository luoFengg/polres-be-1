const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "info", "warn", "error"]
      : ["error"],
  errorFormat: "pretty",
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

// Test connection
prisma
  .$connect()
  .then(() => {
    console.log("📦 Database connected successfully");
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
  });

// Graceful shutdown untuk berbagai event
process.on("beforeExit", async () => {
  await prisma.$disconnect();
});

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await prisma.$disconnect();
  process.exit(0);
});

module.exports = prisma;
