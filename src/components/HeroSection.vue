<template>
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
      playsinline
      preload="auto"
    ></video>

    <!-- Glassmorphism Container -->
    <div
      class="relative z-10 p-8 max-w-lg bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg text-center transform transition-transform duration-500"
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

export default {
  mounted() {
    this.$nextTick(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      tl.from(this.$refs.glassContainer, {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power4.out",
      })
        .from(
          this.$refs.heading,
          {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: "back.out(1.7)",
          },
          "-=0.8"
        )
        .from(
          this.$refs.description,
          {
            opacity: 0,
            y: -30,
            duration: 1,
            ease: "back.out(1.7)",
          },
          "-=0.6"
        )
        .from(
          this.$refs.ctaButton,
          {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        );

      document.addEventListener("mousemove", (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;
        gsap.to(this.$refs.glassContainer, {
          x: x,
          y: y,
          ease: "power3.out",
        });
      });

      this.$refs.glassContainer.addEventListener("mouseenter", () => {
        gsap.to(this.$refs.glassContainer, {
          scale: 1.15,
          rotate: 2,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
        });
      });

      this.$refs.glassContainer.addEventListener("mouseleave", () => {
        gsap.to(this.$refs.glassContainer, {
          scale: 1,
          rotate: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
        });
      });
    });
  },
};
</script>

<style scoped>
/* Custom styles for animations or additional effects */
</style>
