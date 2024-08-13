<template>
  <div id="app" class="font-sans">
    <main class="w-full h-full">
      <!-- Hero Section -->

      <HeroSection />
      <!-- About Section -->
      <section id="about">
        <AboutSection />
      </section>
      <section id="portfolio">
        <PortfolioSection />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
    </main>
  </div>
</template>

<script>
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import PortfolioSection from "./components/portfolio/PortfolioSection.vue";
import TestimonialsSection from "./components/Testimonials/TestimonialsSection.vue";
import PricingSection from "./components/pricing/PricingSection.vue";
import ContactForm from "./components/ContactForm.vue";

export default {
  components: {
    HeroSection,
    AboutSection,
    PortfolioSection,
    TestimonialsSection,
    PricingSection,
    ContactForm,
  },
};
</script>
