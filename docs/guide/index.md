# 👋 Introduction

Welcome to the **Koperasi Polres API** documentation! This comprehensive guide will help you integrate with our robust backend system designed specifically for police cooperative management.

## 🎯 What is Koperasi Polres API?

The Koperasi Polres API is a **RESTful web service** that provides complete functionality for managing police cooperative operations, including:

::: info Core Features

- 👥 **Member Management** - Registration, profiles, and authentication
- 💰 **Financial Operations** - Savings (simpanan) and loans (piutang) management
- 🛍️ **Product Catalog** - Store inventory and product management
- 📊 **Transaction Tracking** - Comprehensive audit trail and reporting
- 🔐 **Security** - Role-based access control and session management
  :::

## 🏗️ System Architecture

Our API follows modern architectural principles:

<div class="architecture-grid">
  <div class="arch-item">
    <div class="arch-icon">🌐</div>
    <h3>RESTful Design</h3>
    <p>Standard HTTP methods with predictable URL patterns</p>
  </div>
  
  <div class="arch-item">
    <div class="arch-icon">🗃️</div>
    <h3>PostgreSQL Database</h3>
    <p>Reliable data storage with Prisma ORM integration</p>
  </div>
  
  <div class="arch-item">
    <div class="arch-icon">🔒</div>
    <h3>Session Authentication</h3>
    <p>Cookie-based authentication with role management</p>
  </div>
  
  <div class="arch-item">
    <div class="arch-icon">📁</div>
    <h3>File Storage</h3>
    <p>Supabase integration for product image management</p>
  </div>
</div>

## 🚀 Key Benefits

### For Developers

- **📖 Clear Documentation** - Comprehensive API reference with examples
- **🔄 Consistent Responses** - Standardized JSON format across all endpoints
- **⚡ Fast Integration** - Well-structured endpoints with logical grouping
- **🛡️ Error Handling** - Detailed error messages and status codes

### For Organizations

- **💼 Complete Solution** - All cooperative operations in one system
- **📈 Scalable** - Built to handle growing membership and transactions
- **🔐 Secure** - Enterprise-grade security and data protection
- **📊 Insightful** - Rich transaction history and reporting capabilities

## 🎭 User Roles

The system supports two primary user roles:

<div class="roles-grid">
  <div class="role-card admin">
    <div class="role-icon">👨‍💼</div>
    <h3>Admin</h3>
    <p>Full system access including:</p>
    <ul>
      <li>Member management</li>
      <li>Financial operations</li>
      <li>Product management</li>
      <li>System administration</li>
    </ul>
  </div>
  
  <div class="role-card member">
    <div class="role-icon">👤</div>
    <h3>Member</h3>
    <p>Self-service access including:</p>
    <ul>
      <li>Profile management</li>
      <li>Transaction history</li>
      <li>Account information</li>
      <li>Product browsing</li>
    </ul>
  </div>
</div>

## 📋 System Requirements

To integrate with the Koperasi Polres API, you'll need:

- **HTTP Client** - Any language that can make HTTP requests
- **JSON Support** - For parsing API responses
- **Cookie Management** - For session handling
- **File Upload** (optional) - For product image management

## 🔗 Quick Links

Ready to get started? Here are some helpful resources:

<div class="quick-links">
  <a href="/guide/quick-start" class="quick-link primary">
    <div class="link-icon">⚡</div>
    <div class="link-content">
      <h4>Quick Start</h4>
      <p>Get up and running in minutes</p>
    </div>
  </a>
  
  <a href="/api/" class="quick-link">
    <div class="link-icon">📚</div>
    <div class="link-content">
      <h4>API Reference</h4>
      <p>Complete endpoint documentation</p>
    </div>
  </a>
  
  <a href="/guide/auth-flow" class="quick-link">
    <div class="link-icon">🔑</div>
    <div class="link-content">
      <h4>Authentication</h4>
      <p>Learn about security and sessions</p>
    </div>
  </a>
  
  <a href="/guide/models" class="quick-link">
    <div class="link-icon">🗂️</div>
    <div class="link-content">
      <h4>Data Models</h4>
      <p>Understand the data structure</p>
    </div>
  </a>
</div>

## 💡 What's Next?

1. **Read the [Quick Start Guide](/guide/quick-start)** to make your first API call
2. **Explore the [API Reference](/api/)** for detailed endpoint documentation
3. **Check out [Authentication](/guide/auth-flow)** to understand security
4. **Review [Data Models](/guide/models)** for request/response structures

---

::: tip Need Help?
If you run into any issues or have questions, check our [Error Handling](/api/errors) guide or reach out to the development team.
:::

<style scoped>
.architecture-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.arch-item {
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
}

.arch-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--vp-shadow-2);
}

.arch-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.arch-item h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  color: var(--vp-c-text-1);
}

.arch-item p {
  margin: 0;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  line-height: 1.4;
}

.roles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.role-card {
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.role-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--vp-shadow-3);
}

.role-card.admin {
  border-left: 4px solid #3b82f6;
}

.role-card.member {
  border-left: 4px solid #10b981;
}

.role-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.role-card h3 {
  margin: 0 0 0.5rem 0;
  color: var(--vp-c-text-1);
}

.role-card p {
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-2);
}

.role-card ul {
  margin: 0;
  padding-left: 1.25rem;
}

.role-card li {
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  line-height: 1.5;
}

.quick-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.quick-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 1rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.quick-link:hover {
  transform: translateY(-1px);
  box-shadow: var(--vp-shadow-2);
  border-color: var(--vp-c-brand-1);
}

.quick-link.primary {
  background: linear-gradient(135deg, var(--vp-c-brand-soft), rgba(59, 130, 246, 0.1));
  border-color: var(--vp-c-brand-1);
}

.link-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.link-content h4 {
  margin: 0 0 0.25rem 0;
  font-size: 1rem;
  color: var(--vp-c-text-1);
}

.link-content p {
  margin: 0;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}
</style>
