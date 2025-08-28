# Error Handling

## Overview

The Koperasi Polres API uses conventional HTTP response codes to indicate the success or failure of an API request. All error responses follow a consistent format to help developers debug issues effectively.

## Error Response Format

### Standard Error Response

```json
{
  "success": false,
  "message": "Human-readable error description",
  "error": "ERROR_CODE"
}
```

### Validation Error Response

For requests with multiple validation errors:

```json
{
  "success": false,
  "message": "Validation error",
  "errors": [
    "Field 'name' is required",
    "Field 'email' must be a valid email address"
  ]
}
```

## HTTP Status Codes

### Success Codes

| Code  | Description | Usage                                          |
| ----- | ----------- | ---------------------------------------------- |
| `200` | OK          | Successful GET, PUT, PATCH requests            |
| `201` | Created     | Successful POST requests that create resources |

### Client Error Codes

| Code  | Description          | Common Causes                                                    |
| ----- | -------------------- | ---------------------------------------------------------------- |
| `400` | Bad Request          | Invalid request data, missing required fields, validation errors |
| `401` | Unauthorized         | Missing or invalid authentication                                |
| `403` | Forbidden            | Insufficient permissions, account inactive                       |
| `404` | Not Found            | Resource does not exist                                          |
| `409` | Conflict             | Resource already exists, business logic conflicts                |
| `413` | Payload Too Large    | File upload exceeds size limit (15MB)                            |
| `422` | Unprocessable Entity | Valid request format but semantic errors                         |

### Server Error Codes

| Code  | Description           | Action                         |
| ----- | --------------------- | ------------------------------ |
| `500` | Internal Server Error | Contact API support            |
| `502` | Bad Gateway           | Temporary service issue, retry |
| `503` | Service Unavailable   | API maintenance, retry later   |

## Common Error Scenarios

### Authentication Errors

**Missing Session Cookie**

```json
{
  "success": false,
  "message": "Unauthorized"
}
```

**Invalid Credentials**

```json
{
  "success": false,
  "message": "NRP atau password salah"
}
```

**Account Inactive**

```json
{
  "success": false,
  "message": "Akun tidak aktif. Hubungi admin."
}
```

### Authorization Errors

**Insufficient Permissions**

```json
{
  "success": false,
  "message": "Admin access required"
}
```

**Access to Other User's Data**

```json
{
  "success": false,
  "message": "Akses ditolak. Anda hanya bisa mengakses data sendiri."
}
```

### Validation Errors

**Required Field Missing**

```json
{
  "success": false,
  "message": "NRP dan password wajib diisi"
}
```

**Invalid Data Format**

```json
{
  "success": false,
  "message": "Amount harus berupa angka positif"
}
```

**Business Logic Validation**

```json
{
  "success": false,
  "message": "Sisa angsuran (15) tidak boleh lebih besar dari total angsuran (12)"
}
```

### Resource Errors

**Resource Not Found**

```json
{
  "success": false,
  "message": "Anggota tidak ditemukan"
}
```

**Resource Conflict**

```json
{
  "success": false,
  "message": "NRP sudah digunakan oleh anggota lain"
}
```

### File Upload Errors

**File Too Large**

```json
{
  "success": false,
  "message": "Payload terlalu besar. Maksimal 15MB",
  "error": "PAYLOAD_TOO_LARGE"
}
```

**Invalid File Type**

```json
{
  "success": false,
  "message": "File harus berupa gambar (JPG, PNG, GIF, WebP)"
}
```

## Prisma Database Errors

The API handles common Prisma error codes and translates them to user-friendly messages:

### P2002 - Unique Constraint Violation

```json
{
  "success": false,
  "message": "NRP sudah digunakan oleh anggota lain"
}
```

### P2003 - Foreign Key Constraint

```json
{
  "success": false,
  "message": "Tidak dapat menghapus data karena masih digunakan dalam relasi lain"
}
```

### P2025 - Record Not Found

```json
{
  "success": false,
  "message": "Data tidak ditemukan atau sudah dihapus"
}
```

## Error Handling Best Practices

### Client-Side Error Handling

```javascript
async function handleApiCall(url, options) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      // Handle HTTP error status
      switch (response.status) {
        case 400:
          console.error("Validation error:", data.message);
          break;
        case 401:
          console.error("Authentication required");
          // Redirect to login
          break;
        case 403:
          console.error("Access denied:", data.message);
          break;
        case 404:
          console.error("Resource not found:", data.message);
          break;
        case 500:
          console.error("Server error. Please try again later.");
          break;
        default:
          console.error("Unexpected error:", data.message);
      }
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error("API call failed:", error.message);
    throw error;
  }
}
```

### Server-Side Error Logging

The API logs errors with different levels:

- **Error**: 4xx and 5xx responses
- **Warn**: Business logic violations
- **Info**: Successful operations
- **Debug**: Detailed operation traces (development only)

## Debugging Tips

### Common Issues and Solutions

1. **401 Unauthorized**

   - Ensure you're including session cookies
   - Check if the session has expired
   - Verify login was successful

2. **403 Forbidden**

   - Check user role and permissions
   - Verify account status is active
   - Ensure accessing own resources (for member endpoints)

3. **404 Not Found**

   - Verify the resource ID is correct
   - Check if the resource was deleted
   - Ensure the endpoint URL is correct

4. **400 Bad Request**

   - Validate all required fields are included
   - Check data types and formats
   - Review business logic constraints

5. **500 Internal Server Error**
   - Check server logs for details
   - Verify database connectivity
   - Contact API support if persistent

### Development Mode

In development environment, error responses include additional debugging information:

```json
{
  "success": false,
  "message": "Internal server error",
  "error": "Detailed error message for debugging",
  "stack": "Error stack trace (development only)"
}
```

### Production Mode

In production, error details are sanitized to prevent information disclosure:

```json
{
  "success": false,
  "message": "Internal server error"
}
```

## Support

If you encounter persistent issues:

1. Check this error reference
2. Review the API endpoint documentation
3. Verify your request format and authentication
4. Contact the development team with:
   - Request details (URL, method, body)
   - Response received
   - Expected behavior
   - Timestamp of the issue
