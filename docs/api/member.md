# Member API

## Overview

The Member API allows authenticated members to access their own data, view transaction history, and manage their account. Members can only access their own information.

::: info Member Authentication
All endpoints require member authentication. Members can only access their own data.
:::

## Profile Management

### Get Profile

Retrieve the authenticated member's profile information.

```http
GET /member/profile
```

#### Query Parameters

| Parameter             | Type    | Default | Description                        |
| --------------------- | ------- | ------- | ---------------------------------- |
| `includeTransactions` | boolean | true    | Include recent transaction history |

#### Success Response

```json
{
  "success": true,
  "message": "Data anggota berhasil diambil",
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
        "totalPiutang": "5500000",
        "sisaPiutang": "2750000",
        "sisaAngsuran": 6,
        "totalAngsuran": 12,
        "biayaAngsuran": "458333",
        "status": "active",
        "createdAt": "2025-01-15T10:00:00.000Z"
      }
    ],
    "recentTransactions": [
      {
        "id": "transaction-id",
        "type": "payment",
        "amount": "-458333",
        "description": "Pembayaran angsuran bulan Juli",
        "createdAt": "2025-07-15T10:00:00.000Z"
      }
    ]
  }
}
```

### Get Member by ID

Retrieve basic member information by ID or NRP (public access).

```http
GET /member/{id}
```

#### Path Parameters

| Parameter | Type   | Description      |
| --------- | ------ | ---------------- |
| `id`      | string | Member ID or NRP |

::: tip Public Access
This endpoint provides basic member information and doesn't require authentication.
:::

## Account Management

### Update Password

Change the authenticated member's password.

```http
PATCH /member/password
```

#### Request Body

```json
{
  "currentPassword": "oldpassword123",
  "newPassword": "newpassword456"
}
```

#### Success Response

```json
{
  "success": true,
  "message": "Password berhasil diubah"
}
```

#### Error Responses

**Invalid Current Password (400)**

```json
{
  "success": false,
  "message": "Password lama tidak sesuai"
}
```

**Weak Password (400)**

```json
{
  "success": false,
  "message": "Password harus minimal 6 karakter"
}
```

## Transaction History

### Get Savings History

Retrieve the authenticated member's savings transaction history.

```http
GET /member/me/transactions/simpanan
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

Retrieve the authenticated member's loan transaction history.

```http
GET /member/me/transactions/piutang
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

Retrieve combined savings and loan transaction history.

```http
GET /member/me/transactions/combined
```

#### Query Parameters

| Parameter | Type    | Default | Description                |
| --------- | ------- | ------- | -------------------------- |
| `page`    | integer | 1       | Page number                |
| `limit`   | integer | 20      | Items per page             |
| `type`    | string  | -       | Filter by transaction type |

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

## Error Responses

### Common Error Codes

| Code  | Description                  |
| ----- | ---------------------------- |
| `400` | Invalid request data         |
| `401` | Authentication required      |
| `403` | Access denied to resource    |
| `404` | Member or resource not found |

### Example Error Response

```json
{
  "success": false,
  "message": "Password lama tidak sesuai"
}
```

## Usage Examples

### JavaScript (Fetch API)

```javascript
// Get profile
const profileResponse = await fetch("/member/profile", {
  credentials: "include",
});
const profile = await profileResponse.json();

// Update password
const passwordResponse = await fetch("/member/password", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
  body: JSON.stringify({
    currentPassword: "oldpass123",
    newPassword: "newpass456",
  }),
});

// Get savings history
const savingsHistory = await fetch(
  "/member/me/transactions/simpanan?page=1&limit=10",
  {
    credentials: "include",
  }
);
```

### cURL

```bash
# Get profile
curl https://api.example.com/member/profile \
  -b cookies.txt

# Update password
curl -X PATCH https://api.example.com/member/password \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -d '{"currentPassword":"oldpass123","newPassword":"newpass456"}'

# Get loan history
curl https://api.example.com/member/me/transactions/piutang \
  -b cookies.txt
```
