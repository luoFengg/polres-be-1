const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

// Import Prisma client untuk test koneksi
const prisma = require("./src/config/prisma");
const { checkDatabaseRole } = require("./src/middleware/database");

// Middleware
app.use(
  cors({
    origin: [
      "https://koperasi-primkoppolresta.netlify.app",
      "https://koperasi-primkoppolresta.vercel.app/",
    ],
    credentials: true, // Izinkan cookies
  })
);
app.use(express.json({ limit: "15mb" })); // Increase payload limit for image uploads
app.use(express.urlencoded({ extended: true, limit: "15mb" }));
app.use(cookieParser());

// routes
console.log("Loading memberDataRoutes...");
const memberDataRoutes = require("./src/routes/member");
console.log("memberDataRoutes loaded successfully");

console.log("Loading userRoutes...");
const userRoutes = require("./src/routes/user");
console.log("userRoutes loaded successfully");

console.log("Loading authRoutes...");
const authRoutes = require("./src/routes/auth");
console.log("authRoutes loaded successfully");

console.log("Loading adminRoutes...");
const adminRoutes = require("./src/routes/admin");
console.log("adminRoutes loaded successfully");

// Debug routes (HANYA untuk debugging) - DISABLED untuk production
// const debugRoutes = require("./src/routes/debug");

app.use("/member", memberDataRoutes);
console.log("Route /user registered");

app.use("/auth", authRoutes);
console.log("Route /auth registered");

app.use("/admin", adminRoutes);
console.log("Route /admin registered");

app.use("/user", userRoutes);
console.log("Route /user registered");

// Debug routes (DISABLED untuk production)
// app.use("/api", debugRoutes);
// console.log("Route /api/debug registered");

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "Koperasi Polres API Server",
    status: "running",
    timestamp: new Date(),
    version: "1.0.0",
  });
});

// Test routes (DISABLED untuk production)
// app.get("/test", (req, res) => {
//   res.json({ message: "Server working", timestamp: new Date() });
// });

// app.get("/test/db", async (req, res) => {
//   try {
//     // Test koneksi
//     await prisma.$connect();

//     // Get role info
//     const roleInfo = await checkDatabaseRole();

//     // Test query
//     const result =
//       await prisma.$queryRaw`SELECT NOW() as current_time, version() as db_version`;

//     // Test tabel
//     const anggotaCount = await prisma.anggota.count();
//     const piutangCount = await prisma.piutang.count();
//     const simpananCount = await prisma.simpanan.count();

//     res.json({
//       success: true,
//       message: "Database connection successful",
//       data: {
//         roleInfo: roleInfo,
//         currentTime: result[0]?.current_time,
//         databaseVersion: result[0]?.db_version,
//         tableStats: {
//           anggota: anggotaCount,
//           piutang: piutangCount,
//           simpanan: simpananCount,
//         },
//       },
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Database connection failed",
//       error: error.message,
//       code: error.code,
//     });
//   }
// });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);

  // Handle payload too large errors (from express json/urlencoded parser)
  if (err.type === "entity.too.large") {
    return res.status(413).json({
      success: false,
      message: "Payload terlalu besar. Maksimal 15MB",
      error: "PAYLOAD_TOO_LARGE",
    });
  }

  // Generic server error
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.listen(process.env.PORT || 9000, async () => {
  console.log(`Server is running on port ${process.env.PORT || 3001}`);
});
