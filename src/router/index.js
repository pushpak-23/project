import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/HeroSection.vue"), // Lazy load HeroSection
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () => import("../components/portfolio/PortfolioSection.vue"), // Lazy load PortfolioSection
  },
  {
    path: "/pricing",
    name: "pricing",
    component: () => import("../components/pricing/PricingSection.vue"), // Lazy load PricingSection
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../components/AboutSection.vue"), // Lazy load AboutSection
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../components/ContactForm.vue"), // Lazy load ContactForm
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
