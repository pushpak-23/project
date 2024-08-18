<template>
  <div
    class="portfolio-card relative overflow-hidden rounded-xl shadow-lg bg-gray-100 transition-all duration-300"
  >
    <img
      :src="project.image"
      :alt="project.title"
      class="card-image w-full h-64 object-cover transform transition-transform duration-500"
    />
    <div
      class="card-overlay absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition-opacity duration-500 flex flex-col justify-end p-4"
    >
      <h3 class="text-white text-lg font-semibold">{{ project.title }}</h3>
      <p class="text-white text-sm mt-2">{{ project.description }}</p>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  watch: {
    project() {
      this.initScrollAnimation();
    },
  },
  mounted() {
    this.initScrollAnimation();
  },
  methods: {
    initScrollAnimation() {
      // Main card animation
      gsap.fromTo(
        this.$el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: this.$el,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Image zoom animation
      gsap.fromTo(
        this.$el.querySelector(".card-image"),
        { scale: 1.05 },
        {
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: this.$el,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Overlay fade-in animation
      gsap.fromTo(
        this.$el.querySelector(".card-overlay"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: this.$el,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
  },
};
</script>

<style scoped>
/* Removed hover-specific styles as GSAP handles it */
</style>
