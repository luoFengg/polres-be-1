# Authentication API

## Overview

The Authentication API handles user login, logout, and session management using **JWT (JSON Web Token)** authentication. The API supports both cookie-based and Authorization header token delivery methods.

::: info JWT Authentication
This API uses JWT tokens for authentication. Tokens are valid for 24 hours and can be sent via cookies or Authorization header.
:::

## Authentication Methods

### Method 1: Cookie-based (Recommended)

The token is automatically set as an httpOnly cookie and sent with subsequent requests.

### Method 2: Authorization Header

Include the token in the Authorization header: `Bearer <your-jwt-token>`

## Endpoints

### Login

Authenticate a user and receive a JWT token.

```http
POST /auth/login
```

#### Request Body

```json
{
  "nrp": "12345678",
  "password": "user_password"
}
```

| Field      | Type   | Required | Description                        |
| ---------- | ------ | -------- | ---------------------------------- |
| `nrp`      | string | Yes      | User's NRP (identification number) |
| `password` | string | Yes      | User's password                    |

#### Success Response

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
      "role": "anggota"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

::: tip Token Usage
The JWT token is also automatically set as an httpOnly cookie named `token`. You can use either the returned token in Authorization header or rely on the cookie for subsequent requests.
:::

#### Error Responses

**Invalid Credentials (401)**

```json
{
  "success": false,
  "message": "NRP atau password salah"
}
```

**Validation Error (400)**

```json
{
  "success": false,
  "message": "NRP dan password wajib diisi"
}
```

### Logout

Logout the current user and invalidate the JWT token.

```http
POST /auth/logout
```

::: warning Token Invalidation
When you logout, the JWT token is added to a blacklist to prevent reuse, even if the token hasn't expired yet.
:::

#### Request Headers

**Option 1: Cookie (Automatic)**

```
Cookie: token=<jwt-token>
```

**Option 2: Authorization Header**

```
Authorization: Bearer <jwt-token>
```

#### Success Response

```json
{
  "success": true,
  "message": "Logout berhasil"
}
```

::: info
The logout endpoint also clears the httpOnly cookie by setting it with an expired date.
:::

#### Error Response

**Unauthorized (401)**

```json
{
  "success": false,
  "message": "Token tidak valid atau sudah expired"
}
```

## JWT Token Details

### Token Structure

The JWT token contains the following payload:

```json
{
  "id": "user-id",
  "nrp": "12345678",
  "nama": "John Doe",
  "role": "anggota",
  "iat": 1640995200,
  "exp": 1641081600
}
```

### Token Expiration

- **Validity**: 24 hours from issue time
- **Renewal**: Re-login required after expiration
- **Blacklist**: Logout adds token to blacklist for security

## Authentication Usage

### Using Cookies (Recommended)

After successful login, the JWT token is automatically set as an httpOnly cookie. All subsequent requests will include this cookie automatically.

```javascript
// Login request
fetch("/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    nrp: "12345678",
    password: "password",
  }),
  credentials: "include", // Important: include cookies
});

// Subsequent authenticated requests
fetch("/api/user/profile", {
  credentials: "include", // Cookies will be sent automatically
});
```

### Using Authorization Header

You can also manually include the JWT token in the Authorization header:

```javascript
// Store token from login response
const { token } = await loginResponse.json();

// Use token in subsequent requests
fetch("/api/user/profile", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
```

## Security Notes

::: warning Security Considerations

- Tokens are stored as httpOnly cookies to prevent XSS attacks
- Logout functionality blacklists tokens to prevent reuse
- Tokens expire after 24 hours for security
- Always use HTTPS in production
  :::

## Error Handling

All authentication endpoints return consistent error formats:

```json
{
  "success": false,
  "message": "Error description"
}
```

Common authentication error scenarios:

- **Token missing**: No token provided in cookie or header
- **Token invalid**: Malformed or tampered token
- **Token expired**: Token past its expiration time
- **Token blacklisted**: Token was invalidated via logout
