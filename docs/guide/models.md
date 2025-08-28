# Data Models

## Overview

This section describes the data models and structures used throughout the Koperasi Polres API. Understanding these models will help you work effectively with the API responses and requests.

## Core Models

### Member (Anggota)

Represents a cooperative member.

```typescript
interface Member {
  id: string; // Unique identifier
  nrp: string; // Member identification number
  nama: string; // Full name
  jabatan: string; // Position/rank
  role: "anggota" | "admin"; // User role
  status: "aktif" | "nonaktif" | "suspend"; // Account status
  createdAt: string; // ISO 8601 timestamp
  updatedAt?: string; // ISO 8601 timestamp
}
```

#### Example

```json
{
  "id": "cm2k5jlmn0001abc123def456",
  "nrp": "12345678",
  "nama": "John Doe",
  "jabatan": "Brigadir",
  "role": "anggota",
  "status": "aktif",
  "createdAt": "2025-01-15T10:00:00.000Z",
  "updatedAt": "2025-02-01T14:30:00.000Z"
}
```

### Savings (Simpanan)

Represents member savings accounts.

```typescript
interface Simpanan {
  id: string; // Unique identifier
  anggotaId: string; // Reference to member
  simpananPokok: string; // Basic savings (as string for precision)
  simpananWajib: string; // Mandatory savings
  simpananSukarela: string; // Voluntary savings
  tabunganHariRaya: string; // Holiday savings
  createdAt: string; // ISO 8601 timestamp
  updatedAt: string; // ISO 8601 timestamp
}
```

#### Calculated Fields

```typescript
interface SimpananWithTotal extends Simpanan {
  totalSimpanan: string; // Sum of all savings types
}
```

#### Example

```json
{
  "id": "simpanan-id",
  "anggotaId": "member-id",
  "simpananPokok": "100000",
  "simpananWajib": "500000",
  "simpananSukarela": "250000",
  "tabunganHariRaya": "150000",
  "totalSimpanan": "1000000",
  "createdAt": "2025-01-15T10:00:00.000Z",
  "updatedAt": "2025-02-01T14:30:00.000Z"
}
```

### Loan (Piutang)

Represents member loans.

```typescript
interface Piutang {
  id: string; // Unique identifier
  anggotaId: string; // Reference to member
  jenis: "produktif" | "konsumtif"; // Loan type
  besarPinjaman: string; // Original loan amount
  totalPiutang: string; // Total debt (loan + fees)
  sisaPiutang: string; // Remaining debt
  sisaAngsuran: number; // Remaining installments
  totalAngsuran: number; // Total installments
  biayaAngsuran: string; // Installment amount
  status: "active" | "completed" | "cancelled"; // Loan status
  createdAt: string; // ISO 8601 timestamp
  updatedAt: string; // ISO 8601 timestamp
  completedAt?: string; // Completion timestamp
}
```

#### Example

```json
{
  "id": "piutang-id",
  "anggotaId": "member-id",
  "jenis": "produktif",
  "besarPinjaman": "5000000",
  "totalPiutang": "5500000",
  "sisaPiutang": "2750000",
  "sisaAngsuran": 6,
  "totalAngsuran": 12,
  "biayaAngsuran": "458333",
  "status": "active",
  "createdAt": "2025-01-15T10:00:00.000Z",
  "updatedAt": "2025-08-01T10:00:00.000Z",
  "completedAt": null
}
```

### Product (Produk)

Represents products in the cooperative store.

```typescript
interface Produk {
  id: string; // Unique identifier
  namaProduk: string; // Product name
  harga: string; // Price (as string for precision)
  deskripsi?: string; // Product description
  fotoProduk?: string; // Product image URL
  kategoriId: string; // Reference to category
  createdAt: string; // ISO 8601 timestamp
  updatedAt: string; // ISO 8601 timestamp
}
```

#### With Category Information

```typescript
interface ProdukWithKategori extends Produk {
  kategori: {
    id: string;
    namaKategori: string;
    deskripsi?: string;
  };
}
```

#### Example

```json
{
  "id": "produk-id",
  "namaProduk": "Seragam Dinas",
  "harga": "350000",
  "deskripsi": "Seragam dinas lengkap untuk personel polri",
  "fotoProduk": "https://storage.supabase.co/bucket/produk-images/seragam-1.jpg",
  "kategoriId": "kategori-id",
  "kategori": {
    "id": "kategori-id",
    "namaKategori": "Seragam",
    "deskripsi": "Perlengkapan seragam"
  },
  "createdAt": "2025-01-15T10:00:00.000Z",
  "updatedAt": "2025-01-15T10:00:00.000Z"
}
```

## Transaction Models

### Savings Transaction

```typescript
interface SimpananTransaction {
  id: string; // Unique identifier
  simpananId: string; // Reference to savings account
  type: "setoran" | "penarikan" | "koreksi"; // Transaction type
  amount: string; // Transaction amount
  jenisTabungan:
    | "simpananPokok"
    | "simpananWajib"
    | "simpananSukarela"
    | "tabunganHariRaya";
  description?: string; // Transaction description
  balanceAfter: string; // Balance after transaction
  processedBy: string; // Admin who processed
  createdAt: string; // ISO 8601 timestamp
}
```

### Loan Transaction

```typescript
interface PiutangTransaction {
  id: string; // Unique identifier
  piutangId: string; // Reference to loan
  type: "payment" | "adjustment" | "pelunasan"; // Transaction type
  amount: string; // Transaction amount (negative for payments)
  description?: string; // Transaction description
  balanceAfter: string; // Remaining debt after transaction
  processedBy: string; // Admin who processed
  createdAt: string; // ISO 8601 timestamp
}
```

## Response Wrapper Models

### Standard Success Response

```typescript
interface SuccessResponse<T> {
  success: true;
  message: string;
  data: T;
}
```

### Standard Error Response

```typescript
interface ErrorResponse {
  success: false;
  message: string;
  error?: string;
  errors?: string[]; // For validation errors
}
```

### Paginated Response

```typescript
interface PaginatedResponse<T> {
  success: true;
  message: string;
  data: {
    items: T[]; // The actual data array
    pagination: {
      currentPage: number;
      totalPages: number;
      totalRecords: number;
      limit: number;
      hasNext: boolean;
      hasPrev: boolean;
    };
  };
}
```

## Composite Models

### Member Profile (Full Detail)

This is the complete member profile with all related data:

```typescript
interface MemberProfile {
  member: Member;
  simpanan?: SimpananWithTotal;
  piutang: Piutang[];
  recentTransactions: (SimpananTransaction | PiutangTransaction)[];
}
```

### Transaction History Response

```typescript
interface TransactionHistoryResponse {
  member: {
    id: string;
    nama: string;
    nrp: string;
  };
  currentBalance?: SimpananWithTotal; // For savings history
  activePiutang?: Piutang[]; // For loan history
  transactions: (SimpananTransaction | PiutangTransaction)[];
  pagination: PaginationInfo;
}
```

## Enums and Constants

### User Roles

```typescript
enum Role {
  ANGGOTA = "anggota",
  ADMIN = "admin",
}
```

### Account Status

```typescript
enum Status {
  AKTIF = "aktif",
  NONAKTIF = "nonaktif",
  SUSPEND = "suspend",
}
```

### Loan Types

```typescript
enum JenisPiutang {
  PRODUKTIF = "produktif",
  KONSUMTIF = "konsumtif",
}
```

### Loan Status

```typescript
enum StatusPiutang {
  ACTIVE = "active",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}
```

### Transaction Types

```typescript
// Savings transactions
enum SimpananTransactionType {
  SETORAN = "setoran",
  PENARIKAN = "penarikan",
  KOREKSI = "koreksi",
}

// Loan transactions
enum PiutangTransactionType {
  PAYMENT = "payment",
  ADJUSTMENT = "adjustment",
  PELUNASAN = "pelunasan",
}

// Savings types
enum JenisTabungan {
  SIMPANAN_POKOK = "simpananPokok",
  SIMPANAN_WAJIB = "simpananWajib",
  SIMPANAN_SUKARELA = "simpananSukarela",
  TABUNGAN_HARI_RAYA = "tabunganHariRaya",
}
```

## Data Validation Rules

### Member Data

- `nrp`: Must be unique, 8 digits
- `nama`: Minimum 2 characters
- `jabatan`: Minimum 2 characters
- `password`: Minimum 6 characters

### Financial Data

- All monetary amounts stored as strings for precision
- Amounts must be positive numbers
- `sisaAngsuran` cannot exceed `totalAngsuran`

### File Uploads

- Maximum file size: 15MB
- Allowed image types: JPG, PNG, GIF, WebP
- Files stored in Supabase Storage

## Usage Examples

### TypeScript Integration

```typescript
// Define interfaces for type safety
interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

// Usage in components
async function loadMemberProfile(): Promise<MemberProfile> {
  const response = await fetch("/member/profile", {
    credentials: "include",
  });

  const result: ApiResponse<MemberProfile> = await response.json();

  if (!result.success) {
    throw new Error(result.message);
  }

  return result.data;
}
```

### Data Transformation

```javascript
// Convert string amounts to numbers for calculations
function calculateTotalSimpanan(simpanan) {
  return (
    parseFloat(simpanan.simpananPokok) +
    parseFloat(simpanan.simpananWajib) +
    parseFloat(simpanan.simpananSukarela) +
    parseFloat(simpanan.tabunganHariRaya)
  );
}

// Format currency for display
function formatCurrency(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(parseFloat(amount));
}
```
