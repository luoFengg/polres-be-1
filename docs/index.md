---
layout: home

hero:
  name: "Koperasi Polres API"
  text: "Documentation"
  tagline: "Complete API reference for Koperasi Polres backend system - powerful, secure, and scalable"
  actions:
    - theme: brand
      text: 🚀 Quick Start
      link: /guide/quick-start
    - theme: alt
      text: 📚 API Reference
      link: /api/
    - theme: alt
      text: View on GitHub
      link: https://github.com/luoFengg/polres-be-1

features:
  - icon: 🔐
    title: Secure Authentication
    details: JWT-based authentication with role-based access control (Admin & Member) and httpOnly cookies for security

  - icon: 💰
    title: Financial Management
    details: Comprehensive savings and loan management system with real-time transaction tracking

  - icon: 🛍️
    title: Product Catalog
    details: Store product management with image upload and organized categories

  - icon: 📊
    title: Transaction History
    details: Combined transaction history with pagination, filtering, and summary statistics

  - icon: ⚡
    title: RESTful API
    details: Consistent API design with standardized response format

  - icon: 🗃️
    title: Database Integration
    details: PostgreSQL integration using Prisma ORM for optimal data management
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #3b82f6 30%, #1d4ed8);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #3b82f6 50%, #1d4ed8 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
