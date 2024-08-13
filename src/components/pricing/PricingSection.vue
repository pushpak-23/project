<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-8">
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">
        Pricing
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PricingCard
          v-for="(pricing, index) in pricingList"
          :key="index"
          :pricing="pricing"
          class="pricing-card"
        />
      </div>
    </div>
  </section>
</template>

<script>
import PricingCard from "./PricingCard.vue";
import pricingData from "../data/pricingData.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  components: {
    PricingCard,
  },
  data() {
    return {
      pricingList: pricingData.pricing,
    };
  },
  mounted() {
    this.animatePricing();
  },
  methods: {
    animatePricing() {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        ".pricing-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".pricing-card",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
            once: true, // Animation occurs only once
          },
        }
      );
    },
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
