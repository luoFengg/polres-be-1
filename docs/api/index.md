# 📚 API Reference

## 🌟 Overview

The **Koperasi Polres API** provides a comprehensive set of endpoints for managing cooperative operations. All endpoints follow RESTful principles and return JSON responses with consistent formatting.

## 🌐 Base URL

::: info Environment URLs

```bash
# Production
https://your-api-domain.com

# Development
http://localhost:9000
```

:::

## 📤 Request Format

All API requests should be made with the following headers:

```http
Content-Type: application/json
```

For authenticated endpoints, include the session cookie:

```http
Cookie: connect.sid=your-session-id
```

## 📥 Response Format

All API responses follow a consistent format:

### ✅ Success Response

```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": {
    // Response data here
  }
}
```

### ❌ Error Response

```json
{
  "success": false,
  "message": "Error description",
  "error": "ERROR_CODE"
}
```

## 🏷️ Status Codes

| Code  | Status                   | Description                   |
| ----- | ------------------------ | ----------------------------- |
| `200` | ✅ OK                    | Request successful            |
| `201` | ✅ Created               | Resource created successfully |
| `400` | ❌ Bad Request           | Invalid request data          |
| `401` | 🔒 Unauthorized          | Authentication required       |
| `403` | 🚫 Forbidden             | Insufficient permissions      |
| `404` | 🔍 Not Found             | Resource not found            |
| `409` | ⚠️ Conflict              | Resource conflict             |
| `413` | 📦 Payload Too Large     | File size exceeds limit       |
| `500` | 💥 Internal Server Error | Server error                  |

## 📄 Pagination

List endpoints support pagination with the following query parameters:

| Parameter | Type    | Default | Description    |
| --------- | ------- | ------- | -------------- |
| `page`    | integer | 1       | Page number    |
| `limit`   | integer | 20      | Items per page |

### Pagination Response

```json
{
  "success": true,
  "data": {
    "items": [...],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalRecords": 100,
      "limit": 20,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

## 🔐 Authentication

Most endpoints require authentication. See the [Authentication](/api/auth) section for details on how to authenticate with the API.

::: warning Important
All authenticated requests must include a valid session cookie. Sessions expire after inactivity.
:::

## 🚦 Rate Limiting

The API implements rate limiting to ensure fair usage:

- **📁 File Uploads**: Maximum 15MB per request
- **🔄 General Requests**: Standard Express.js limits apply

## 📖 API Sections

<div class="api-grid">
  <div class="api-card">
    <div class="api-icon">🔐</div>
    <h3><a href="/api/auth">Authentication</a></h3>
    <p>Login, logout, and session management</p>
    <div class="api-methods">
      <span class="method post">POST</span>
      <span class="method post">POST</span>
    </div>
  </div>

  <div class="api-card">
    <div class="api-icon">👨‍💼</div>
    <h3><a href="/api/admin">Admin Routes</a></h3>
    <p>Administrative operations and management</p>
    <div class="api-methods">
      <span class="method get">GET</span>
      <span class="method post">POST</span>
      <span class="method put">PUT</span>
      <span class="method delete">DELETE</span>
    </div>
  </div>

  <div class="api-card">
    <div class="api-icon">👤</div>
    <h3><a href="/api/member">Member Routes</a></h3>
    <p>Member self-service operations</p>
    <div class="api-methods">
      <span class="method get">GET</span>
      <span class="method put">PUT</span>
      <span class="method patch">PATCH</span>
    </div>
  </div>

  <div class="api-card">
    <div class="api-icon">🛍️</div>
    <h3><a href="/api/user">User Routes</a></h3>
    <p>Product catalog access for authenticated users</p>
    <div class="api-methods">
      <span class="method get">GET</span>
      <span class="method get">GET</span>
    </div>
  </div>

  <div class="api-card">
    <div class="api-icon">⚠️</div>
    <h3><a href="/api/errors">Error Handling</a></h3>
    <p>Error codes and troubleshooting guide</p>
    <div class="api-methods">
      <span class="info-badge">Reference</span>
    </div>
  </div>
</div>

<style scoped>
.api-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.api-card {
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.api-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.api-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--vp-shadow-3);
  border-color: var(--vp-c-brand-1);
}

.api-card:hover::before {
  opacity: 1;
}

.api-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.api-card h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.api-card h3 a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.2s ease;
}

.api-card h3 a:hover {
  color: var(--vp-c-brand-1);
}

.api-card p {
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  line-height: 1.5;
}

.api-methods {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.method {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.method.get {
  background: #dcfdf4;
  color: #065f46;
}

.dark .method.get {
  background: #064e3b;
  color: #6ee7b7;
}

.method.post {
  background: #dbeafe;
  color: #1e40af;
}

.dark .method.post {
  background: #1e3a8a;
  color: #93c5fd;
}

.method.put {
  background: #fef3c7;
  color: #92400e;
}

.dark .method.put {
  background: #78350f;
  color: #fcd34d;
}

.method.patch {
  background: #e0e7ff;
  color: #5b21b6;
}

.dark .method.patch {
  background: #4c1d95;
  color: #c4b5fd;
}

.method.delete {
  background: #fee2e2;
  color: #991b1b;
}

.dark .method.delete {
  background: #7f1d1d;
  color: #fca5a5;
}

.info-badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}
</style>
