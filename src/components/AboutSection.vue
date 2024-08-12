<template>
  <section ref="aboutSection" class="py-16 bg-gray-100">
    <div class="container mx-auto px-8 flex flex-col md:flex-row items-center">
      <div ref="image" class="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="/new.jpeg"
          alt="About Image"
          class="rounded-lg shadow-lg w-full"
        />
      </div>
      <div ref="text" class="w-full md:w-1/2 md:pl-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          About Me
        </h2>
        <p class="text-lg text-gray-600 mb-4">
          I am a creative freelancer with a passion for photoshoots, video
          editing, logo designing, magazine making, and graphic designing. I
          strive to create visually appealing and engaging content that meets
          the needs of my clients.
        </p>
        <button
          class="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
        >
          Learn More
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    this.animateSection();
  },
  methods: {
    animateSection() {
      const aboutSection = this.$refs.aboutSection;
      const image = this.$refs.image;
      const text = this.$refs.text;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutSection,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Image animation
      tl.from(image, {
        x: -100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      })

        // Text animation
        .from(
          text,
          {
            x: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
          },
          "-=1.2"
        );

      // Button animation with scale and rotation
      tl.from(
        text.querySelector("button"),
        {
          scale: 0.9,
          rotate: 15,
          opacity: 0,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        },
        "-=1"
      );
    },
  },
};
</script>

<style scoped>
/* Custom styles if needed */
</style>
