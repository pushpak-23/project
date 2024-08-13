import { createRouter, createWebHistory } from "vue-router";
import HeroSection from "../components/HeroSection.vue";
import PortfolioSection from "../components/portfolio/PortfolioSection.vue";
import PricingSection from "../components/pricing/PricingSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ContactSection from "../components/ContactForm.vue";
import TestimonialsSection from "../components/testimonials/TestimonialsSection.vue"; // Import TestimonialsSection

const routes = [
  {
    path: "/",
    name: "home",
    component: HeroSection,
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
