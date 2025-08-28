# Koperasi Polres API Documentation

Comprehensive API documentation for the Koperasi Polres Backend System, built with VitePress.

## 🚀 Quick Start

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Navigate to the docs directory:

```bash
cd docs
```

2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run docs:dev
```

The documentation will be available at `http://localhost:5173`

### Build

Build the documentation for production:

```bash
npm run docs:build
```

### Preview

Preview the built documentation:

```bash
npm run docs:preview
```

## 📁 Documentation Structure

```
docs/
├── .vitepress/
│   └── config.js          # VitePress configuration
├── api/                   # API Reference
│   ├── index.md          # API Overview
│   ├── auth.md           # Authentication endpoints
│   ├── admin.md          # Admin endpoints
│   ├── member.md         # Member endpoints
│   ├── user.md           # User endpoints
│   └── errors.md         # Error handling
├── guide/                 # Guides and tutorials
│   ├── index.md          # Introduction
│   ├── quick-start.md    # Quick start guide
│   ├── models.md         # Data models
│   └── auth-flow.md      # Authentication flow
├── index.md              # Homepage
└── package.json          # Dependencies
```

## 📚 Documentation Sections

### API Reference

- **Authentication** - Login, logout, session management
- **Admin Routes** - Administrative operations (admin only)
- **Member Routes** - Member self-service operations
- **User Routes** - Public access operations
- **Error Handling** - Error codes and troubleshooting

### Guides

- **Introduction** - Overview and key features
- **Quick Start** - Get up and running quickly
- **Data Models** - Request/response structures
- **Authentication Flow** - Complete auth implementation guide

## 🛠️ Customization

### Configuration

Edit `.vitepress/config.js` to customize:

- Site title and description
- Navigation menu
- Sidebar structure
- Theme settings

### Adding New Pages

1. Create a new `.md` file in the appropriate directory
2. Add it to the sidebar in `.vitepress/config.js`
3. Use proper markdown formatting with VitePress features

### VitePress Features Used

- **Custom containers** (`::: tip`, `::: warning`)
- **Code syntax highlighting**
- **Responsive navigation**
- **Search functionality**
- **Dark/light theme toggle**

## 📖 Writing Guidelines

### Markdown Format

- Use clear headings (`#`, `##`, `###`)
- Include code examples for all endpoints
- Use tables for parameter documentation
- Add response examples in JSON format

### Code Examples

Always provide examples in multiple formats:

- cURL commands
- JavaScript/Fetch API
- Complete request/response pairs

### API Documentation

For each endpoint include:

- HTTP method and URL
- Path/query parameters
- Request body schema
- Success response examples
- Error response examples
- Usage examples

## 🔧 Development

### Local Development

The docs are designed to work alongside the main API project. You can:

- Run the API server on port 9000
- Run the docs server on port 5173
- Test API calls directly from the documentation examples

### Updating Documentation

When API changes are made:

1. Update relevant endpoint documentation
2. Update data models if schemas changed
3. Add new examples for new features
4. Test all code examples

## 🚀 Deployment

### Static Hosting

The built documentation can be deployed to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

### Build Command

```bash
npm run docs:build
```

Output will be in the `dist` directory.

## 📝 Contributing

1. Follow the existing documentation structure
2. Use consistent formatting and style
3. Test all code examples
4. Include comprehensive error handling examples
5. Update the navigation if adding new sections

## 🔗 Links

- [VitePress Documentation](https://vitepress.dev/)
- [Markdown Guide](https://www.markdownguide.org/)

---

Built with ❤️ using [VitePress](https://vitepress.dev/)
