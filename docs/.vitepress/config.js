import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Koperasi Polres API",
  description: "API Documentation for Koperasi Polres Backend System",

  head: [
    ["meta", { name: "theme-color", content: "#3c82f6" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "id" }],
    [
      "meta",
      { property: "og:title", content: "Koperasi Polres API Documentation" },
    ],
    ["meta", { property: "og:site_name", content: "Koperasi Polres API" }],
    ["meta", { property: "og:url", content: "https://your-docs-url.com/" }],
  ],

  themeConfig: {
    nav: [
      { text: "🏠 Home", link: "/" },
      {
        text: "📚 API Reference",
        link: "/api/",
        activeMatch: "/api/",
      },
      {
        text: "📖 Guide",
        link: "/guide/",
        activeMatch: "/guide/",
      },
      {
        text: "v1.0.0",
        items: [
          { text: "Changelog", link: "/changelog" },
          { text: "Contributing", link: "/contributing" },
        ],
      },
    ],

    sidebar: {
      "/api/": [
        {
          text: "🚀 API Reference",
          collapsed: false,
          items: [
            { text: "Getting Started", link: "/api/" },
            { text: "🔐 Authentication", link: "/api/auth" },
            { text: "👨‍💼 Admin Routes", link: "/api/admin" },
            { text: "👤 Member Routes", link: "/api/member" },
            { text: "🛍️ User Routes", link: "/api/user" },
            { text: "⚠️ Error Handling", link: "/api/errors" },
          ],
        },
      ],
      "/guide/": [
        {
          text: "📖 Documentation Guide",
          collapsed: false,
          items: [
            { text: "👋 Introduction", link: "/guide/" },
            { text: "⚡ Quick Start", link: "/guide/quick-start" },
            { text: "🗂️ Data Models", link: "/guide/models" },
            { text: "🔑 Authentication Flow", link: "/guide/auth-flow" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/luoFengg/polres-be-1" },
    ],

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Cari dokumentasi",
            buttonAriaLabel: "Cari dokumentasi",
          },
          modal: {
            displayDetails: "Tampilkan detail",
            resetButtonTitle: "Reset pencarian",
            backButtonTitle: "Tutup pencarian",
            noResultsText: "Tidak ada hasil untuk",
            footer: {
              selectText: "untuk memilih",
              selectKeyAriaLabel: "enter",
              navigateText: "untuk navigasi",
              navigateUpKeyAriaLabel: "panah atas",
              navigateDownKeyAriaLabel: "panah bawah",
              closeText: "untuk menutup",
              closeKeyAriaLabel: "escape",
            },
          },
        },
      },
    },

    editLink: {
      pattern: "https://github.com/luoFengg/polres-be-1/edit/main/docs/:path",
      text: "Edit halaman ini di GitHub",
    },

    footer: {
      message: "Dirilis dengan lisensi MIT.",
      copyright: "Copyright © 2025 Koperasi Polres",
    },

    docFooter: {
      prev: "Halaman sebelumnya",
      next: "Halaman selanjutnya",
    },

    outline: {
      label: "Pada halaman ini",
      level: [2, 3],
    },

    lastUpdated: {
      text: "Terakhir diperbarui",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    returnToTopLabel: "Kembali ke atas",
    sidebarMenuLabel: "Menu",
    darkModeSwitchLabel: "Tema gelap",
    lightModeSwitchTitle: "Beralih ke tema terang",
    darkModeSwitchTitle: "Beralih ke tema gelap",
  },
});
