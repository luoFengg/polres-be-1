# Testing Guide: Update Simpanan Anggota API

## Base URL

```
https://polres-be-fix.vercel.app
```

## Authentication

Semua request harus menggunakan JWT token di header:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

## Endpoints untuk Testing

### 1. Update Simpanan Anggota

**Method:** `PUT`
**URL:** `/admin/members/{memberId}/simpanan`

### 2. Get Simpanan History

**Method:** `GET`
**URL:** `/admin/members/{memberId}/simpanan/history`

### 3. Get All Members Simpanan Summary

**Method:** `GET`
**URL:** `/admin/members/simpanan`

---

## Test Scenarios

### Scenario 1: Setoran Simpanan Pokok (Pertama Kali)

**Method:** PUT
**URL:** `https://polres-be-fix.vercel.app/admin/members/USER_ID/simpanan`

**Headers:**

```json
{
  "Content-Type": "application/json",
  "Authorization": "Bearer YOUR_JWT_TOKEN"
}
```

**Body:**

```json
{
  "type": "setoran",
  "category": "pokok",
  "amount": 100000,
  "description": "Setoran simpanan pokok awal"
}
```

**Expected Response (201):**

```json
{
  "success": true,
  "message": "Setoran simpanan pokok berhasil",
  "data": {
    "transaction": {
      "id": "transaction_id",
      "anggotaId": "user_id",
      "type": "setoran",
      "category": "pokok",
      "amount": "100000",
      "balanceBefore": "0",
      "balanceAfter": "100000",
      "description": "Setoran simpanan pokok awal"
    },
    "member": {
      "nama": "Nama Anggota",
      "nrp": "123456"
    },
    "newBalance": {
      "simpananPokok": "100000",
      "simpananWajib": "0",
      "simpananSukarela": "0",
      "tabunganHariRaya": "0",
      "totalSimpanan": "100000"
    }
  }
}
```

---

### Scenario 2: Setoran Simpanan Wajib

**Method:** PUT
**URL:** `https://polres-be-fix.vercel.app/admin/members/USER_ID/simpanan`

**Body:**

```json
{
  "type": "setoran",
  "category": "wajib",
  "amount": 50000,
  "description": "Setoran simpanan wajib bulanan"
}
```

---

### Scenario 3: Setoran Simpanan Sukarela

**Method:** PUT
**URL:** `https://polres-be-fix.vercel.app/admin/members/USER_ID/simpanan`

**Body:**

```json
{
  "type": "setoran",
  "category": "sukarela",
  "amount": 200000,
  "description": "Setoran simpanan sukarela"
}
```

---

### Scenario 4: Setoran Tabungan Hari Raya (THR)

**Method:** PUT
**URL:** `https://polres-be-fix.vercel.app/admin/members/USER_ID/simpanan`

**Body:**

```json
{
  "type": "setoran",
  "category": "thr",
  "amount": 75000,
  "description": "Setoran tabungan hari raya"
}
```

---

### Scenario 5: Penarikan Simpanan Wajib (Valid)

**Method:** PUT
**URL:** `https://polres-be-fix.vercel.app/admin/members/USER_ID/simpanan`

**Body:**

```json
{
  "type": "penarikan",
  "category": "wajib",
  "amount": 25000,
  "description": "Penarikan simpanan wajib"
}
```

**Expected Response (201):** Balance akan berkurang

---

### Scenario 6: Penarikan Simpanan Pokok (Invalid - Should Fail)

**Method:** PUT
**URL:** `https://polres-be-fix.vercel.app/admin/members/USER_ID/simpanan`

**Body:**

```json
{
  "type": "penarikan",
  "category": "pokok",
  "amount": 50000,
  "description": "Coba tarik simpanan pokok"
}
```

**Expected Response (400):**

```json
{
  "success": false,
  "message": "Simpanan pokok tidak dapat ditarik"
}
```

---

### Scenario 7: Penarikan Melebihi Saldo (Invalid - Should Fail)

**Method:** PUT
**URL:** `https://polres-be-fix.vercel.app/admin/members/USER_ID/simpanan`

**Body:**

```json
{
  "type": "penarikan",
  "category": "sukarela",
  "amount": 999999,
  "description": "Penarikan melebihi saldo"
}
```

**Expected Response (400):**

```json
{
  "success": false,
  "message": "Saldo sukarela tidak mencukupi. Saldo saat ini: Rp 200.000"
}
```

---

### Scenario 8: Koreksi Simpanan (Positif)

**Method:** PUT
**URL:** `https://polres-be-fix.vercel.app/admin/members/USER_ID/simpanan`

**Body:**

```json
{
  "type": "koreksi",
  "category": "wajib",
  "amount": 10000,
  "description": "Koreksi simpanan wajib - tambah saldo"
}
```

---

### Scenario 9: Koreksi Simpanan (Negatif)

**Method:** PUT
**URL:** `https://polres-be-fix.vercel.app/admin/members/USER_ID/simpanan`

**Body:**

```json
{
  "type": "koreksi",
  "category": "sukarela",
  "amount": -15000,
  "description": "Koreksi simpanan sukarela - kurangi saldo"
}
```

---

### Scenario 10: Input Validation Tests

#### Invalid Type

**Body:**

```json
{
  "type": "invalid_type",
  "category": "pokok",
  "amount": 100000
}
```

**Expected Response (400):**

```json
{
  "success": false,
  "message": "Type harus salah satu dari: setoran, penarikan, koreksi"
}
```

#### Invalid Category

**Body:**

```json
{
  "type": "setoran",
  "category": "invalid_category",
  "amount": 100000
}
```

**Expected Response (400):**

```json
{
  "success": false,
  "message": "Category harus salah satu dari: pokok, wajib, sukarela, thr"
}
```

#### Invalid Amount (Negative)

**Body:**

```json
{
  "type": "setoran",
  "category": "pokok",
  "amount": -100000
}
```

**Expected Response (400):**

```json
{
  "success": false,
  "message": "Amount harus berupa angka positif"
}
```

#### Missing Required Fields

**Body:**

```json
{
  "type": "setoran",
  "category": "pokok"
}
```

**Expected Response (400):**

```json
{
  "success": false,
  "message": "Type, category, dan amount wajib diisi"
}
```

---

## Testing History Endpoint

### Get Simpanan History

**Method:** GET
**URL:** `https://polres-be-fix.vercel.app/admin/members/USER_ID/simpanan/history`

**Query Parameters:**

```
?page=1&limit=10&category=pokok&type=setoran&startDate=2025-01-01&endDate=2025-12-31
```

**Expected Response (200):**

```json
{
  "success": true,
  "data": {
    "member": {
      "nama": "Nama Anggota",
      "nrp": "123456"
    },
    "transactions": [
      {
        "id": "transaction_id",
        "type": "setoran",
        "category": "pokok",
        "amount": "100000",
        "balanceBefore": "0",
        "balanceAfter": "100000",
        "description": "Setoran simpanan pokok awal",
        "processedBy": {
          "nama": "Admin Name",
          "nrp": "admin123"
        },
        "isSystemGenerated": false,
        "createdAt": "2025-07-17T12:00:00.000Z"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 1,
      "totalRecords": 1,
      "limit": 10,
      "hasNext": false,
      "hasPrev": false
    }
  }
}
```

---

## Testing Summary Endpoint

### Get All Members Simpanan Summary

**Method:** GET
**URL:** `https://polres-be-fix.vercel.app/admin/members/simpanan`

**Query Parameters:**

```
?page=1&limit=20&search=nama_anggota
```

**Expected Response (200):**

```json
{
  "success": true,
  "data": {
    "members": [
      {
        "id": "user_id",
        "nrp": "123456",
        "nama": "Nama Anggota",
        "jabatan": "Jabatan",
        "simpanan": {
          "simpananPokok": "100000",
          "simpananWajib": "50000",
          "simpananSukarela": "200000",
          "tabunganHariRaya": "75000",
          "totalSimpanan": "425000"
        },
        "lastActivity": "2025-07-17T12:00:00.000Z"
      }
    ],
    "summary": {
      "totalMembers": 1,
      "totalSimpananPokok": "100000",
      "totalSimpananWajib": "50000",
      "totalSimpananSukarela": "200000",
      "totalTabunganHariRaya": "75000",
      "grandTotal": "425000"
    },
    "pagination": {
      "currentPage": 1,
      "totalPages": 1,
      "totalRecords": 1,
      "limit": 20,
      "hasNext": false,
      "hasPrev": false
    }
  }
}
```

---

## Error Handling Tests

### Member Not Found

**URL:** `https://polres-be-fix.vercel.app/admin/members/invalid_user_id/simpanan`

**Expected Response (404):**

```json
{
  "success": false,
  "message": "Anggota tidak ditemukan"
}
```

### Unauthorized Access

**Headers:** (No Authorization header)

**Expected Response (401):**

```json
{
  "success": false,
  "message": "Access denied. No token provided."
}
```

---

## Tips untuk Testing di Postman:

1. **Buat Environment** dengan variabel:

   - `base_url`: `https://polres-be-fix.vercel.app`
   - `jwt_token`: Token JWT yang valid
   - `test_user_id`: ID user untuk testing

2. **Buat Collection** dengan folder terpisah untuk setiap scenario

3. **Gunakan Tests Tab** di Postman untuk validasi response:

   ```javascript
   pm.test("Status code is 201", function () {
     pm.response.to.have.status(201);
   });

   pm.test("Response has success field", function () {
     const responseJson = pm.response.json();
     pm.expect(responseJson.success).to.be.true;
   });
   ```

4. **Testing Sequence**:
   - Login untuk mendapatkan JWT token
   - Test setoran untuk berbagai kategori
   - Test penarikan yang valid
   - Test error scenarios
   - Test history dan summary endpoints
