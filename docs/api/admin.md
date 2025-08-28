# Admin API

## Overview

The Admin API provides administrative operations for managing members, loans (piutang), savings (simpanan), and products. All admin endpoints require admin authentication.

::: warning Admin Only
All endpoints in this section require admin authentication and the `admin` role.
:::

## Member Management

### Get All Members

Retrieve all members without pagination.

```http
GET /admin/members/all
```

#### Query Parameters

| Parameter | Type   | Description                                       |
| --------- | ------ | ------------------------------------------------- |
| `search`  | string | Search by name or NRP                             |
| `status`  | string | Filter by status (`aktif`, `nonaktif`, `suspend`) |

#### Success Response

```json
{
  "success": true,
  "message": "Data semua anggota berhasil diambil",
  "data": {
    "members": [
      {
        "id": "member-id",
        "nrp": "12345678",
        "nama": "John Doe",
        "jabatan": "Brigadir",
        "role": "anggota",
        "status": "aktif",
        "createdAt": "2025-01-15T10:00:00.000Z",
        "activeLoanCount": 2,
        "hasActiveLoan": true
      }
    ],
    "total": 150,
    "filters": {
      "search": null,
      "status": null,
      "role": "anggota"
    }
  }
}
```

### Get Members (Paginated)

Retrieve members with pagination.

```http
GET /admin/members
```

#### Query Parameters

| Parameter | Type    | Default | Description           |
| --------- | ------- | ------- | --------------------- |
| `page`    | integer | 1       | Page number           |
| `limit`   | integer | 20      | Items per page        |
| `search`  | string  | -       | Search by name or NRP |

#### Success Response

```json
{
  "success": true,
  "message": "Data anggota berhasil diambil",
  "data": {
    "members": [
      {
        "id": "member-id",
        "nrp": "12345678",
        "nama": "John Doe",
        "jabatan": "Brigadir",
        "role": "anggota",
        "status": "aktif",
        "createdAt": "2025-01-15T10:00:00.000Z",
        "activeLoanCount": 2,
        "hasActiveLoan": true
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 8,
      "totalRecords": 150,
      "limit": 20,
      "hasNext": true,
      "hasPrev": false
    },
    "filters": {
      "search": null
    }
  }
}
```

### Get Member Details

Retrieve detailed information about a specific member.

```http
GET /admin/members/{memberId}
```

#### Path Parameters

| Parameter  | Type   | Description |
| ---------- | ------ | ----------- |
| `memberId` | string | Member ID   |

#### Query Parameters

| Parameter             | Type    | Default | Description                 |
| --------------------- | ------- | ------- | --------------------------- |
| `includeTransactions` | boolean | true    | Include transaction history |

#### Success Response

```json
{
  "success": true,
  "message": "Detail anggota berhasil diambil",
  "data": {
    "member": {
      "id": "member-id",
      "nrp": "12345678",
      "nama": "John Doe",
      "jabatan": "Brigadir",
      "role": "anggota",
      "status": "aktif",
      "createdAt": "2025-01-15T10:00:00.000Z"
    },
    "simpanan": {
      "id": "simpanan-id",
      "simpananPokok": "100000",
      "simpananWajib": "500000",
      "simpananSukarela": "250000",
      "tabunganHariRaya": "150000",
      "totalSimpanan": "1000000"
    },
    "piutang": [
      {
        "id": "piutang-id",
        "jenis": "produktif",
        "besarPinjaman": "5000000",
        "sisaPiutang": "2750000",
        "sisaAngsuran": 6,
        "biayaAngsuran": "458333",
        "status": "active",
        "createdAt": "2025-01-01T10:00:00.000Z"
      }
    ],
    "transactions": {
      "simpanan": [
        {
          "id": "transaction-id",
          "type": "setoran",
          "amount": "100000",
          "jenisTabungan": "simpananWajib",
          "description": "Setoran rutin bulan Juli",
          "balanceAfter": "500000",
          "createdAt": "2025-07-15T10:00:00.000Z"
        }
      ],
      "piutang": [
        {
          "id": "transaction-id-2",
          "type": "payment",
          "amount": "-458333",
          "description": "Pembayaran angsuran bulan Juli",
          "balanceAfter": "2750000",
          "createdAt": "2025-07-14T10:00:00.000Z"
        }
      ]
    }
  }
}
```

### Add New Member

Create a new member account.

```http
POST /admin/members
```

#### Request Body

```json
{
  "nrp": "87654321",
  "nama": "Jane Smith",
  "jabatan": "Bripka",
  "password": "defaultpassword123"
}
```

#### Success Response

```json
{
  "success": true,
  "message": "Anggota berhasil ditambahkan",
  "data": {
    "member": {
      "id": "new-member-id",
      "nrp": "87654321",
      "nama": "Jane Smith",
      "jabatan": "Bripka",
      "role": "anggota",
      "status": "aktif",
      "createdAt": "2025-01-15T12:00:00.000Z"
    }
  }
}
```

### Update Member

Update member information.

```http
PUT /admin/members/{id}
```

#### Request Body

```json
{
  "nrp": "87654321",
  "nama": "Jane Smith Updated",
  "jabatan": "Brigadir",
  "status": "aktif"
}
```

#### Success Response

```json
{
  "success": true,
  "message": "Data anggota berhasil diperbarui",
  "data": {
    "member": {
      "id": "member-id",
      "nrp": "87654321",
      "nama": "Jane Smith Updated",
      "jabatan": "Brigadir",
      "role": "anggota",
      "status": "aktif",
      "updatedAt": "2025-01-15T14:00:00.000Z"
    }
  }
}
```

### Update Member Status

Update member's active status.

```http
PUT /admin/members/{id}/status
```

#### Request Body

```json
{
  "status": "suspend"
}
```

#### Success Response

```json
{
  "success": true,
  "message": "Status anggota berhasil diperbarui",
  "data": {
    "member": {
      "id": "member-id",
      "nrp": "12345678",
      "nama": "John Doe",
      "status": "suspend",
      "updatedAt": "2025-01-15T15:00:00.000Z"
    }
  }
}
```

### Update Member Password

Change a member's password.

```http
PATCH /admin/members/{memberId}/password
```

#### Request Body

```json
{
  "newPassword": "newpassword123"
}
```

#### Success Response

```json
{
  "success": true,
  "message": "Password anggota berhasil diperbarui",
  "data": {
    "member": {
      "id": "member-id",
      "nrp": "12345678",
      "nama": "John Doe",
      "updatedAt": "2025-01-15T16:00:00.000Z"
    }
  }
}
```

### Delete Member

Remove a member from the system.

```http
DELETE /admin/members/{memberId}
```

#### Success Response

```json
{
  "success": true,
  "message": "Anggota berhasil dihapus",
  "data": {
    "deletedMember": {
      "id": "member-id",
      "nrp": "12345678",
      "nama": "John Doe"
    }
  }
}
```

## Loan Management (Piutang)

### Add Loan

Create a new loan for a member.

```http
POST /admin/members/{memberId}/piutang
```

#### Request Body

```json
{
  "jenis": "produktif",
  "besarPinjaman": 5000000,
  "totalAngsuran": 12,
  "biayaAngsuran": 458333
}
```

#### Success Response

```json
{
  "success": true,
  "message": "Piutang berhasil ditambahkan",
  "data": {
    "piutang": {
      "id": "piutang-id",
      "anggotaId": "member-id",
      "jenis": "produktif",
      "besarPinjaman": "5000000",
      "sisaPiutang": "5000000",
      "totalAngsuran": 12,
      "sisaAngsuran": 12,
      "biayaAngsuran": "458333",
      "status": "active",
      "createdAt": "2025-01-15T10:00:00.000Z"
    },
    "member": {
      "id": "member-id",
      "nama": "John Doe",
      "nrp": "12345678"
    }
  }
}
```

### Update Loan

Update loan status, make payments, or adjustments.

```http
PATCH /admin/members/{memberId}/piutang/{piutangId}
```

#### Request Body Examples

**Payment**

```json
{
  "type": "payment",
  "amount": 458333,
  "description": "Pembayaran angsuran bulan Agustus"
}
```

**Adjustment**

```json
{
  "type": "adjustment",
  "sisaPiutang": 2500000,
  "sisaAngsuran": 6,
  "description": "Koreksi sisa piutang"
}
```

**Full Payment**

```json
{
  "type": "pelunasan",
  "description": "Pelunasan dipercepat"
}
```

#### Success Response (Payment)

```json
{
  "success": true,
  "message": "Pembayaran piutang berhasil diproses",
  "data": {
    "transaction": {
      "id": "transaction-id",
      "piutangId": "piutang-id",
      "type": "payment",
      "amount": "-458333",
      "description": "Pembayaran angsuran bulan Agustus",
      "balanceAfter": "2541667",
      "createdAt": "2025-08-15T10:00:00.000Z"
    },
    "piutang": {
      "id": "piutang-id",
      "sisaPiutang": "2541667",
      "sisaAngsuran": 5,
      "status": "active"
    },
    "member": {
      "id": "member-id",
      "nama": "John Doe",
      "nrp": "12345678"
    }
  }
}
```

#### Success Response (Full Payment)

```json
{
  "success": true,
  "message": "Piutang berhasil dilunasi",
  "data": {
    "transaction": {
      "id": "transaction-id",
      "piutangId": "piutang-id",
      "type": "pelunasan",
      "amount": "-2541667",
      "description": "Pelunasan dipercepat",
      "balanceAfter": "0",
      "createdAt": "2025-08-15T10:00:00.000Z"
    },
    "piutang": {
      "id": "piutang-id",
      "sisaPiutang": "0",
      "sisaAngsuran": 0,
      "status": "paid"
    }
  }
}
```

## Savings Management (Simpanan)

### Update Savings

Process savings transactions (deposits, withdrawals, corrections).

```http
PATCH /admin/members/{memberId}/simpanan
```

#### Request Body Examples

**Deposit**

```json
{
  "type": "setoran",
  "amount": 500000,
  "jenisTabungan": "simpananWajib",
  "description": "Setoran rutin bulan Agustus"
}
```

**Withdrawal**

```json
{
  "type": "penarikan",
  "amount": 200000,
  "jenisTabungan": "simpananSukarela",
  "description": "Penarikan untuk keperluan darurat"
}
```

**Correction**

```json
{
  "type": "koreksi",
  "amount": 50000,
  "jenisTabungan": "simpananWajib",
  "description": "Koreksi saldo bulan sebelumnya"
}
```

#### Success Response (Deposit)

```json
{
  "success": true,
  "message": "Transaksi simpanan berhasil diproses",
  "data": {
    "transaction": {
      "id": "transaction-id",
      "simpananId": "simpanan-id",
      "type": "setoran",
      "amount": "500000",
      "jenisTabungan": "simpananWajib",
      "description": "Setoran rutin bulan Agustus",
      "balanceAfter": "1000000",
      "createdAt": "2025-08-15T10:00:00.000Z"
    },
    "simpanan": {
      "id": "simpanan-id",
      "simpananPokok": "100000",
      "simpananWajib": "1000000",
      "simpananSukarela": "250000",
      "tabunganHariRaya": "150000",
      "totalSimpanan": "1500000"
    },
    "member": {
      "id": "member-id",
      "nama": "John Doe",
      "nrp": "12345678"
    }
  }
}
```

#### Success Response (Withdrawal)

```json
{
  "success": true,
  "message": "Penarikan simpanan berhasil diproses",
  "data": {
    "transaction": {
      "id": "transaction-id",
      "simpananId": "simpanan-id",
      "type": "penarikan",
      "amount": "-200000",
      "jenisTabungan": "simpananSukarela",
      "description": "Penarikan untuk keperluan darurat",
      "balanceAfter": "50000",
      "createdAt": "2025-08-15T11:00:00.000Z"
    },
    "simpanan": {
      "id": "simpanan-id",
      "simpananPokok": "100000",
      "simpananWajib": "1000000",
      "simpananSukarela": "50000",
      "tabunganHariRaya": "150000",
      "totalSimpanan": "1300000"
    }
  }
}
```

**Withdrawal**

```json
{
  "type": "penarikan",
  "amount": 200000,
  "jenisTabungan": "simpananSukarela",
  "description": "Penarikan kebutuhan mendesak"
}
```

**Correction**

```json
{
  "type": "koreksi",
  "amount": 50000,
  "jenisTabungan": "tabunganHariRaya",
  "description": "Koreksi saldo"
}
```

### Get Savings Summary

## Savings Summary

### Get Savings Summaries

Retrieve savings summary for all members.

```http
GET /admin/simpanan/summaries
```

#### Query Parameters

| Parameter | Type    | Default | Description           |
| --------- | ------- | ------- | --------------------- |
| `page`    | integer | 1       | Page number           |
| `limit`   | integer | 20      | Items per page        |
| `search`  | string  | -       | Search by name or NRP |

#### Success Response

```json
{
  "success": true,
  "message": "Ringkasan simpanan berhasil diambil",
  "data": {
    "summaries": [
      {
        "member": {
          "id": "member-id",
          "nrp": "12345678",
          "nama": "John Doe",
          "jabatan": "Brigadir",
          "status": "aktif"
        },
        "simpanan": {
          "id": "simpanan-id",
          "simpananPokok": "100000",
          "simpananWajib": "500000",
          "simpananSukarela": "250000",
          "tabunganHariRaya": "150000",
          "totalSimpanan": "1000000"
        },
        "lastTransaction": {
          "type": "setoran",
          "amount": "100000",
          "createdAt": "2025-07-15T10:00:00.000Z"
        }
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 8,
      "totalRecords": 150,
      "limit": 20,
      "hasNext": true,
      "hasPrev": false
    },
    "totalSummary": {
      "totalMembers": 150,
      "totalSimpananPokok": "15000000",
      "totalSimpananWajib": "75000000",
      "totalSimpananSukarela": "37500000",
      "totalTabunganHariRaya": "22500000",
      "grandTotal": "150000000"
    }
  }
}
```

## Transaction History

### Get Savings History

Retrieve savings transaction history for a member.

```http
GET /admin/members/{memberId}/simpanan/histories
```

#### Query Parameters

| Parameter       | Type    | Default | Description                |
| --------------- | ------- | ------- | -------------------------- |
| `page`          | integer | 1       | Page number                |
| `limit`         | integer | 20      | Items per page             |
| `type`          | string  | -       | Filter by transaction type |
| `jenisTabungan` | string  | -       | Filter by savings type     |

#### Success Response

```json
{
  "success": true,
  "message": "History simpanan berhasil diambil",
  "data": {
    "member": {
      "id": "member-id",
      "nama": "John Doe",
      "nrp": "12345678"
    },
    "currentBalance": {
      "simpananPokok": "100000",
      "simpananWajib": "500000",
      "simpananSukarela": "250000",
      "tabunganHariRaya": "150000",
      "totalSimpanan": "1000000"
    },
    "transactions": [
      {
        "id": "transaction-id",
        "type": "setoran",
        "amount": "100000",
        "jenisTabungan": "simpananWajib",
        "description": "Setoran rutin bulan Juli",
        "balanceAfter": "500000",
        "createdAt": "2025-07-15T10:00:00.000Z",
        "processor": {
          "nama": "Admin User",
          "nrp": "99999999"
        }
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 3,
      "totalRecords": 45,
      "limit": 20,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

### Get Loan History

Retrieve loan transaction history for a member.

```http
GET /admin/members/{memberId}/transactions/piutang
```

#### Query Parameters

| Parameter   | Type    | Default | Description                |
| ----------- | ------- | ------- | -------------------------- |
| `page`      | integer | 1       | Page number                |
| `limit`     | integer | 20      | Items per page             |
| `piutangId` | string  | -       | Filter by specific loan ID |

#### Success Response

```json
{
  "success": true,
  "message": "History piutang berhasil diambil",
  "data": {
    "member": {
      "id": "member-id",
      "nama": "John Doe",
      "nrp": "12345678"
    },
    "activePiutang": [
      {
        "id": "piutang-id",
        "jenis": "produktif",
        "besarPinjaman": "5000000",
        "sisaPiutang": "2750000",
        "sisaAngsuran": 6,
        "status": "active"
      }
    ],
    "transactions": [
      {
        "id": "transaction-id",
        "piutangId": "piutang-id",
        "type": "payment",
        "amount": "-458333",
        "description": "Pembayaran angsuran bulan Juli",
        "balanceAfter": "2750000",
        "createdAt": "2025-07-15T10:00:00.000Z",
        "processor": {
          "nama": "Admin User",
          "nrp": "99999999"
        }
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 2,
      "totalRecords": 30,
      "limit": 20,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

### Get Combined History

Retrieve combined transaction history for a member.

```http
GET /admin/members/{memberId}/transactions/combined
```

#### Query Parameters

| Parameter   | Type    | Default | Description                |
| ----------- | ------- | ------- | -------------------------- |
| `page`      | integer | 1       | Page number                |
| `limit`     | integer | 20      | Items per page             |
| `type`      | string  | -       | Filter by transaction type |
| `startDate` | string  | -       | Start date (YYYY-MM-DD)    |
| `endDate`   | string  | -       | End date (YYYY-MM-DD)      |

#### Success Response

```json
{
  "success": true,
  "message": "History transaksi gabungan berhasil diambil",
  "data": {
    "member": {
      "id": "member-id",
      "nama": "John Doe",
      "nrp": "12345678"
    },
    "transactions": [
      {
        "id": "transaction-id",
        "type": "setoran",
        "amount": "100000",
        "jenisTabungan": "simpananWajib",
        "description": "Setoran rutin bulan Juli",
        "balanceAfter": "500000",
        "transactionSource": "simpanan",
        "category": "simpananWajib",
        "balanceBefore": "400000",
        "isSystemGenerated": false,
        "createdAt": "2025-07-15T10:00:00.000Z",
        "processor": {
          "nama": "Admin User",
          "nrp": "99999999"
        }
      },
      {
        "id": "transaction-id-2",
        "type": "payment",
        "amount": "-458333",
        "description": "Pembayaran angsuran bulan Juli",
        "transactionSource": "piutang",
        "category": "produktif",
        "balanceBefore": null,
        "balanceAfter": null,
        "isSystemGenerated": false,
        "createdAt": "2025-07-14T10:00:00.000Z",
        "processor": {
          "nama": "Admin User",
          "nrp": "99999999"
        },
        "piutang": {
          "id": "piutang-id",
          "jenis": "produktif",
          "besarPinjaman": "5000000",
          "status": "active"
        }
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 4,
      "totalTransactions": 75,
      "limit": 20,
      "hasNext": true,
      "hasPrev": false
    },
    "statistics": {
      "simpanan": {
        "totalTransactions": 45,
        "totalAmount": "1000000"
      },
      "piutang": {
        "totalTransactions": 30,
        "totalAmount": "5000000"
      },
      "combined": {
        "totalTransactions": 75,
        "totalAmount": "6000000"
      }
    }
  }
}
```

## Product Management

### Get Products

Retrieve all products with pagination.

```http
GET /admin/products
```

#### Query Parameters

| Parameter    | Type    | Default | Description            |
| ------------ | ------- | ------- | ---------------------- |
| `page`       | integer | 1       | Page number            |
| `limit`      | integer | 20      | Items per page         |
| `search`     | string  | -       | Search by product name |
| `kategoriId` | string  | -       | Filter by category     |

#### Success Response

```json
{
  "success": true,
  "message": "Data produk berhasil diambil",
  "data": {
    "products": [
      {
        "id": "product-id",
        "namaProduk": "Beras Premium",
        "harga": "15000",
        "deskripsi": "Beras premium kualitas terbaik",
        "fotoUrl": "https://storage.example.com/products/beras.jpg",
        "kategori": {
          "id": "category-id",
          "nama": "Sembako"
        },
        "createdAt": "2025-01-15T10:00:00.000Z",
        "updatedAt": "2025-01-15T10:00:00.000Z"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalRecords": 85,
      "limit": 20,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

### Add Product

Create a new product with optional image.

```http
POST /admin/products
```

#### Request Body (multipart/form-data)

| Field        | Type   | Required | Description              |
| ------------ | ------ | -------- | ------------------------ |
| `namaProduk` | string | Yes      | Product name             |
| `harga`      | number | Yes      | Product price            |
| `deskripsi`  | string | No       | Product description      |
| `kategoriId` | string | Yes      | Category ID              |
| `foto`       | file   | No       | Product image (max 10MB) |

#### Success Response

```json
{
  "success": true,
  "message": "Produk berhasil ditambahkan",
  "data": {
    "product": {
      "id": "new-product-id",
      "namaProduk": "Gula Pasir",
      "harga": "12000",
      "deskripsi": "Gula pasir berkualitas",
      "fotoUrl": "https://storage.example.com/products/gula.jpg",
      "kategori": {
        "id": "category-id",
        "nama": "Sembako"
      },
      "createdAt": "2025-01-15T12:00:00.000Z"
    }
  }
}
```

### Update Product

Update an existing product.

```http
PUT /admin/products/{productId}
```

#### Request Body (multipart/form-data)

| Field        | Type   | Required | Description              |
| ------------ | ------ | -------- | ------------------------ |
| `namaProduk` | string | No       | Product name             |
| `harga`      | number | No       | Product price            |
| `deskripsi`  | string | No       | Product description      |
| `kategoriId` | string | No       | Category ID              |
| `foto`       | file   | No       | Product image (max 10MB) |

#### Success Response

```json
{
  "success": true,
  "message": "Produk berhasil diperbarui",
  "data": {
    "product": {
      "id": "product-id",
      "namaProduk": "Beras Premium Updated",
      "harga": "16000",
      "deskripsi": "Beras premium kualitas terbaik dengan kemasan baru",
      "fotoUrl": "https://storage.example.com/products/beras-new.jpg",
      "kategori": {
        "id": "category-id",
        "nama": "Sembako"
      },
      "updatedAt": "2025-01-15T14:00:00.000Z"
    }
  }
}
```

### Delete Product

Remove a product from the system.

```http
DELETE /admin/products/{productId}
```

#### Success Response

```json
{
  "success": true,
  "message": "Produk berhasil dihapus",
  "data": {
    "deletedProduct": {
      "id": "product-id",
      "namaProduk": "Beras Premium",
      "kategori": "Sembako"
    }
  }
}
```

### Get Categories

Retrieve all product categories.

```http
GET /admin/categories
```

#### Success Response

```json
{
  "success": true,
  "message": "Data kategori berhasil diambil",
  "data": {
    "categories": [
      {
        "id": "category-id-1",
        "nama": "Sembako",
        "productCount": 25,
        "createdAt": "2025-01-01T10:00:00.000Z"
      },
      {
        "id": "category-id-2",
        "nama": "Elektronik",
        "productCount": 15,
        "createdAt": "2025-01-01T10:00:00.000Z"
      },
      {
        "id": "category-id-3",
        "nama": "Pakaian",
        "productCount": 30,
        "createdAt": "2025-01-01T10:00:00.000Z"
      }
    ],
    "total": 3
  }
}
```

## Error Responses

### Common Error Codes

| Code  | Description                              |
| ----- | ---------------------------------------- |
| `400` | Invalid request data or validation error |
| `401` | Authentication required                  |
| `403` | Admin access required                    |
| `404` | Resource not found                       |
| `409` | Conflict (e.g., duplicate NRP)           |
| `413` | File too large                           |

### Example Error Response

```json
{
  "success": false,
  "message": "NRP sudah digunakan oleh anggota lain",
  "error": "DUPLICATE_NRP"
}
```
