<template>
  <section
    class="relative h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Video Background -->
    <video
      class="absolute top-0 left-0 w-full h-full object-cover"
      src="/video_20230401_154914.mp4"
      autoplay
      muted
      loop
    ></video>

    <!-- Glassmorphism Container -->
    <div
      class="relative z-10 p-8 max-w-lg bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 duration-500 ease-out"
      @mouseover="animateHover"
    >
      <h1 class="text-4xl md:text-6xl font-bold text-white">
        Creative Freelancer
      </h1>
      <p class="mt-4 text-lg md:text-xl text-white">
        I specialize in photoshoots, video editing, logo designing, magazine
        making, and graphic designing.
      </p>
      <button
        class="mt-8 px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-300"
      >
        View Portfolio
      </button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    animateHover() {
      // Add any animation logic here, e.g., using GSAP or another library.
    },
  },
};
</script>

<style scoped>
/* Custom styles for animations or additional effects */
</style>
