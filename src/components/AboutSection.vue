<template>
  <section
    ref="aboutSection"
    class="relative py-16 bg-gray-100 overflow-hidden"
  >
    <!-- Moving Gradient Balls -->
    <div
      ref="gradientBall1"
      class="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-50"
    ></div>
    <div
      ref="gradientBall2"
      class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full opacity-50"
    ></div>

    <div
      class="container mx-auto px-8 flex flex-col md:flex-row items-center relative z-10"
    >
      <div ref="image" class="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="/new.jpeg"
          alt="About Image"
          class="rounded-lg shadow-2xl transform transition-transform duration-500"
        />
      </div>
      <div ref="text" class="w-full md:w-1/2 md:pl-12">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800">
          About Me
        </h2>
        <p class="text-lg text-gray-600 mb-4 leading-relaxed">
          I am a creative freelancer with a passion for photoshoots, video
          editing, logo designing, magazine making, and graphic designing. I
          strive to create visually appealing and engaging content that meets
          the needs of my clients.
        </p>
        <button
          class="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 hover:shadow-2xl transition-all duration-300"
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
      const gradientBall1 = this.$refs.gradientBall1;
      const gradientBall2 = this.$refs.gradientBall2;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutSection,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(image, {
        x: -100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.5,
      })
        .from(
          text,
          {
            x: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
            stagger: 0.3,
          },
          "-=1.2"
        )
        .to(
          image,
          {
            rotate: 3,
            scale: 1.05,
            duration: 1,
            ease: "power2.out",
          },
          "-=1.5"
        )
        .to(
          text,
          {
            rotate: -3,
            scale: 1.05,
            duration: 1,
            ease: "power2.out",
          },
          "-=1.5"
        );

      // Parallax effect for gradient balls
      gsap.to(gradientBall1, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: aboutSection,
          scrub: true,
        },
      });

      gsap.to(gradientBall2, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: aboutSection,
          scrub: true,
        },
      });

      // Subtle pulse animation for gradient balls
      gsap.to([gradientBall1, gradientBall2], {
        y: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 4,
      });
    },
  },
};
</script>

<style scoped>
/* Custom styles for enhancing visual appeal */
</style>
