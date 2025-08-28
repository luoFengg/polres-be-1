// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "./style.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // Custom app enhancements can be added here
  },
};
