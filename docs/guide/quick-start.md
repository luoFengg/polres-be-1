# Quick Start

## Getting Started

This guide will help you get up and running with the Koperasi Polres API in just a few minutes.

## Base URL

```
Production: https://your-production-domain.com
Development: http://localhost:9000
```

## Step 1: Authentication

First, you need to authenticate to access protected endpoints.

### Login Request

```http
POST /auth/login
Content-Type: application/json

{
  "nrp": "12345678",
  "password": "your_password"
}
```

### Example with cURL

```bash
curl -X POST http://localhost:9000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"nrp":"12345678","password":"your_password"}' \
  -c cookies.txt
```

### Example with JavaScript

```javascript
const response = await fetch("/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include", // Important for cookies
  body: JSON.stringify({
    nrp: "12345678",
    password: "your_password",
  }),
});

const data = await response.json();
console.log("Login successful:", data);
```

### Success Response

```json
{
  "success": true,
  "message": "Login berhasil",
  "data": {
    "user": {
      "id": "user-id",
      "nrp": "12345678",
      "nama": "John Doe",
      "jabatan": "Brigadir",
      "role": "anggota",
      "status": "aktif"
    }
  }
}
```

## Step 2: Make Authenticated Requests

After successful login, include the session cookie in subsequent requests.

### Get Profile Information

```http
GET /member/profile
Cookie: connect.sid=your-session-id
```

### Example with cURL

```bash
curl http://localhost:9000/member/profile \
  -b cookies.txt
```

### Example with JavaScript

```javascript
const profileResponse = await fetch("/member/profile", {
  credentials: "include", // Include session cookie
});

const profile = await profileResponse.json();
console.log("Profile:", profile);
```

## Step 3: Explore Different Endpoints

### Public Endpoints (No Authentication Required)

#### Get Products

```javascript
const products = await fetch("/user/products");
const productData = await products.json();
console.log("Products:", productData);
```

#### Get Specific Product

```javascript
const product = await fetch("/user/products/product-id");
const productDetail = await product.json();
console.log("Product Detail:", productDetail);
```

### Member Endpoints (Member Authentication Required)

#### Get Transaction History

```javascript
// Savings history
const savingsHistory = await fetch("/member/me/transactions/simpanan", {
  credentials: "include",
});

// Loan history
const loanHistory = await fetch("/member/me/transactions/piutang", {
  credentials: "include",
});

// Combined history
const combinedHistory = await fetch("/member/me/transactions/combined", {
  credentials: "include",
});
```

#### Update Password

```javascript
const passwordUpdate = await fetch("/member/password", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
  body: JSON.stringify({
    currentPassword: "old_password",
    newPassword: "new_password",
  }),
});
```

### Admin Endpoints (Admin Authentication Required)

#### Get All Members

```javascript
const members = await fetch("/admin/members", {
  credentials: "include",
});
```

#### Add New Member

```javascript
const newMember = await fetch("/admin/members", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
  body: JSON.stringify({
    nrp: "87654321",
    nama: "Jane Smith",
    jabatan: "Bripka",
    password: "default123",
  }),
});
```

## Step 4: Handle Errors

Always handle potential errors in your requests:

```javascript
async function apiCall(url, options = {}) {
  try {
    const response = await fetch(url, {
      credentials: "include",
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "API call failed");
    }

    return data;
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
}

// Usage
try {
  const profile = await apiCall("/member/profile");
  console.log("Profile loaded:", profile);
} catch (error) {
  console.error("Failed to load profile:", error.message);
}
```

## Step 5: Logout

When you're done, logout to end the session:

```javascript
const logout = await fetch("/auth/logout", {
  method: "POST",
  credentials: "include",
});
```

## Complete Example

Here's a complete example that demonstrates the basic flow:

```javascript
class KoperasiAPI {
  constructor(baseURL = "") {
    this.baseURL = baseURL;
  }

  async request(endpoint, options = {}) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Request failed");
    }

    return data;
  }

  // Authentication
  async login(nrp, password) {
    return this.request("/auth/login", {
      method: "POST",
      body: JSON.stringify({ nrp, password }),
    });
  }

  async logout() {
    return this.request("/auth/logout", { method: "POST" });
  }

  // Profile
  async getProfile() {
    return this.request("/member/profile");
  }

  // Products
  async getProducts(filters = {}) {
    const params = new URLSearchParams(filters);
    return this.request(`/user/products?${params}`);
  }

  // Transaction history
  async getSavingsHistory(page = 1, limit = 20) {
    return this.request(
      `/member/me/transactions/simpanan?page=${page}&limit=${limit}`
    );
  }
}

// Usage
const api = new KoperasiAPI();

async function example() {
  try {
    // Login
    const loginResult = await api.login("12345678", "password");
    console.log("Logged in:", loginResult.data.user.nama);

    // Get profile
    const profile = await api.getProfile();
    console.log("Profile:", profile.data.member);

    // Get products
    const products = await api.getProducts({ search: "seragam" });
    console.log("Products found:", products.data.products.length);

    // Get transaction history
    const history = await api.getSavingsHistory();
    console.log("Transactions:", history.data.transactions.length);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

example();
```

## Next Steps

Now that you've made your first API calls, you can:

1. **Explore the [API Reference](/api/)** for detailed endpoint documentation
2. **Learn about [Data Models](/guide/models)** to understand response structures
3. **Study the [Authentication Flow](/guide/auth-flow)** for advanced authentication scenarios
4. **Check [Error Handling](/api/errors)** for comprehensive error management

## Tips for Development

1. **Use Browser Developer Tools**: Monitor network requests and responses
2. **Test with Postman**: Great for API testing and documentation
3. **Handle Cookies Properly**: Ensure `credentials: 'include'` for authenticated requests
4. **Validate Responses**: Always check the `success` field in responses
5. **Implement Retry Logic**: Handle temporary network issues gracefully
