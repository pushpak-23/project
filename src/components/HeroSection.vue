<template>
  <Navbar />
  <section
    class="relative h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Video Background -->
    <video
      class="absolute top-0 left-0 w-full h-full object-cover"
      src="/video.mp4"
      autoplay
      muted
      loop
    ></video>

    <!-- Glassmorphism Container -->
    <div
      class="relative z-10 p-8 max-w-lg bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 duration-500 ease-out"
      ref="glassContainer"
    >
      <h1 class="text-4xl md:text-6xl font-bold text-white" ref="heading">
        Creative Freelancer
      </h1>
      <p class="mt-4 text-lg md:text-xl text-white" ref="description">
        I specialize in photoshoots, video editing, logo designing, magazine
        making, and graphic designing.
      </p>
      <button
        class="mt-8 px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-300"
        ref="ctaButton"
      >
        <router-link to="#portfolio">View Portfolio</router-link>
      </button>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import Navbar from "./Navbar.vue";

export default {
  components: {
    Navbar,
  },
  mounted() {
    // Animate the glassmorphism container
    gsap.from(this.$refs.glassContainer, {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power2.out",
    });

    // Animate the heading
    gsap.from(this.$refs.heading, {
      duration: 1,
      opacity: 0,
      y: -50,
      ease: "power2.out",
      delay: 0.5,
    });

    // Animate the description
    gsap.from(this.$refs.description, {
      duration: 1,
      opacity: 0,
      y: -30,
      ease: "power2.out",
      delay: 1,
    });

    // Animate the CTA button
    gsap.from(this.$refs.ctaButton, {
      duration: 1,
      opacity: 0,
      y: 30,
      ease: "power2.out",
      delay: 1.5,
    });

    // Add hover animation
    this.$refs.glassContainer.addEventListener("mouseenter", () => {
      gsap.to(this.$refs.glassContainer, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    this.$refs.glassContainer.addEventListener("mouseleave", () => {
      gsap.to(this.$refs.glassContainer, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  },
};
</script>

<style scoped>
/* Custom styles for animations or additional effects */
</style>
