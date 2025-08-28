# User API

## Overview

The User API provides access to product information for authenticated users (both admin and member). These endpoints require authentication but are accessible to all logged-in users regardless of role.

::: warning Authentication Required
All endpoints in this section require authentication. Both admin and member roles can access these endpoints.
:::

## Product Endpoints

### Get Products

Retrieve a list of products with optional filtering and pagination.

```http
GET /user/products
```

#### Query Parameters

| Parameter    | Type    | Default | Description            |
| ------------ | ------- | ------- | ---------------------- |
| `page`       | integer | 1       | Page number            |
| `limit`      | integer | 20      | Items per page         |
| `search`     | string  | -       | Search by product name |
| `kategoriId` | string  | -       | Filter by category ID  |

#### Success Response

```json
{
  "success": true,
  "message": "Data produk berhasil diambil",
  "data": {
    "products": [
      {
        "id": "product-id",
        "namaProduk": "Seragam Dinas",
        "harga": "350000",
        "deskripsi": "Seragam dinas lengkap untuk personel polri",
        "fotoProduk": "https://storage.supabase.co/bucket/produk-images/seragam-1.jpg",
        "kategori": {
          "id": "kategori-id",
          "namaKategori": "Seragam",
          "deskripsi": "Perlengkapan seragam"
        },
        "createdAt": "2025-01-15T10:00:00.000Z",
        "updatedAt": "2025-01-15T10:00:00.000Z"
      },
      {
        "id": "product-id-2",
        "namaProduk": "Sepatu PDH",
        "harga": "200000",
        "deskripsi": "Sepatu PDH kulit asli",
        "fotoProduk": "https://storage.supabase.co/bucket/produk-images/sepatu-1.jpg",
        "kategori": {
          "id": "kategori-id-2",
          "namaKategori": "Sepatu",
          "deskripsi": "Sepatu dinas"
        },
        "createdAt": "2025-01-15T10:00:00.000Z",
        "updatedAt": "2025-01-15T10:00:00.000Z"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 3,
      "totalRecords": 50,
      "limit": 20,
      "hasNext": true,
      "hasPrev": false
    },
    "filters": {
      "search": null,
      "kategoriId": null
    }
  }
}
```

### Get Product by ID

Retrieve detailed information about a specific product.

```http
GET /user/products/{productId}
```

#### Path Parameters

| Parameter   | Type   | Description |
| ----------- | ------ | ----------- |
| `productId` | string | Product ID  |

#### Success Response

```json
{
  "success": true,
  "message": "Detail produk berhasil diambil",
  "data": {
    "product": {
      "id": "product-id",
      "namaProduk": "Seragam Dinas",
      "harga": "350000",
      "deskripsi": "Seragam dinas lengkap untuk personel polri. Tersedia dalam berbagai ukuran. Bahan berkualitas tinggi dan tahan lama.",
      "fotoProduk": "https://storage.supabase.co/bucket/produk-images/seragam-1.jpg",
      "kategori": {
        "id": "kategori-id",
        "namaKategori": "Seragam",
        "deskripsi": "Perlengkapan seragam dinas"
      },
      "createdAt": "2025-01-15T10:00:00.000Z",
      "updatedAt": "2025-01-15T10:00:00.000Z"
    }
  }
}
```

#### Error Response

**Product Not Found (404)**

```json
{
  "success": false,
  "message": "Produk tidak ditemukan"
}
```

## Usage Examples

### JavaScript (Fetch API)

```javascript
// Get all products
const productsResponse = await fetch("/user/products");
const products = await productsResponse.json();

// Get products with filters
const filteredProducts = await fetch(
  "/user/products?search=seragam&kategoriId=kategori-1&page=1&limit=10"
);
const filteredData = await filteredProducts.json();

// Get specific product
const productResponse = await fetch("/user/products/product-id");
const product = await productResponse.json();
```

### cURL

```bash
# Get all products
curl https://api.example.com/user/products

# Get products with search
curl "https://api.example.com/user/products?search=seragam&page=1&limit=5"

# Get specific product
curl https://api.example.com/user/products/product-id
```

### jQuery

```javascript
// Get products with jQuery
$.get("/user/products", {
  search: "seragam",
  kategoriId: "kategori-1",
  page: 1,
  limit: 10,
}).done(function (data) {
  console.log("Products:", data.data.products);
});

// Get product details
$.get("/user/products/product-id").done(function (data) {
  console.log("Product:", data.data.product);
});
```

## Product Data Structure

### Product Object

| Field        | Type   | Description                      |
| ------------ | ------ | -------------------------------- |
| `id`         | string | Unique product identifier        |
| `namaProduk` | string | Product name                     |
| `harga`      | string | Product price (as string)        |
| `deskripsi`  | string | Product description              |
| `fotoProduk` | string | Product image URL                |
| `kategori`   | object | Product category information     |
| `createdAt`  | string | Creation timestamp (ISO 8601)    |
| `updatedAt`  | string | Last update timestamp (ISO 8601) |

### Category Object

| Field          | Type   | Description                |
| -------------- | ------ | -------------------------- |
| `id`           | string | Unique category identifier |
| `namaKategori` | string | Category name              |
| `deskripsi`    | string | Category description       |

## Search and Filtering

### Search Functionality

The search parameter performs a case-insensitive search on:

- Product name (`namaProduk`)
- Product description (`deskripsi`)

### Category Filtering

Use the `kategoriId` parameter to filter products by category. You can obtain category IDs from the Admin API's categories endpoint.

### Pagination

All product list responses include pagination information:

- `currentPage`: Current page number
- `totalPages`: Total number of pages
- `totalRecords`: Total number of products matching the filter
- `limit`: Number of items per page
- `hasNext`: Whether there are more pages
- `hasPrev`: Whether there are previous pages

## Error Responses

### Common Error Codes

| Code  | Description              |
| ----- | ------------------------ |
| `400` | Invalid query parameters |
| `404` | Product not found        |
| `500` | Internal server error    |

### Example Error Response

```json
{
  "success": false,
  "message": "Produk tidak ditemukan"
}
```
