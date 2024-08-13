<template>
  <nav
    class="fixed top-0 left-0 w-full z-20 bg-black bg-opacity-40 backdrop-blur-md shadow-lg p-4"
    ref="navbar"
  >
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="text-white font-bold text-2xl" ref="logo">
        <router-link to="/"> Freelancer</router-link>
      </div>

      <!-- Hamburger Menu for Mobile -->
      <div class="md:hidden">
        <button
          @click="toggleMenu"
          class="text-white focus:outline-none"
          ref="hamburger"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <!-- Navigation Links -->
      <ul
        :class="[
          'flex',
          'space-x-6',
          'text-white',
          'md:flex',
          'md:space-x-6',
          mobileMenuOpen ? 'block' : 'hidden',
          'md:block',
        ]"
        class="absolute md:static top-16 left-0 w-full md:w-auto p-4 md:p-0"
        ref="navLinks"
      >
        <li>
          <router-link
            to="#about"
            class="block py-2 md:py-0 hover:text-blue-500 transition-colors duration-300"
            >About</router-link
          >
        </li>
        <li>
          <router-link
            to="#portfolio"
            class="block py-2 md:py-0 hover:text-blue-500 transition-colors duration-300"
            >Portfolio</router-link
          >
        </li>
        <li>
          <router-link
            to="#pricing"
            class="block py-2 md:py-0 hover:text-blue-500 transition-colors duration-300"
            >Pricing</router-link
          >
        </li>

        <li>
          <router-link
            to="#testimonials"
            class="block py-2 md:py-0 hover:text-blue-500 transition-colors duration-300"
            >Testimonials</router-link
          >
        </li>
        <li>
          <router-link
            to="#contact"
            class="block py-2 md:py-0 hover:text-blue-500 transition-colors duration-300"
            >Contact</router-link
          >
        </li>
      </ul>

      <!-- CTA Button -->
      <button
        class="hidden md:block px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-300"
        ref="ctaButton"
      >
        <router-link to="#contact"> Hire Me</router-link>
      </button>
    </div>
  </nav>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      if (this.mobileMenuOpen) {
        gsap.to(this.$refs.navLinks, {
          duration: 0.5,
          opacity: 1,
          y: 0,
          ease: "power2.out",
        });
      } else {
        gsap.to(this.$refs.navLinks, {
          duration: 0.5,
          opacity: 0,
          y: -20,
          ease: "power2.in",
        });
      }
    },
  },
  mounted() {
    // Logo Animation
    gsap.from(this.$refs.logo, {
      duration: 1,
      opacity: 0,
      y: -50,
      ease: "power2.out",
      delay: 0.5,
    });

    // Navbar Animation
    gsap.from(this.$refs.navbar, {
      duration: 1,
      opacity: 0,
      y: -50,
      ease: "power2.out",
    });

    // Links Animation
    gsap.from(this.$refs.navLinks.children, {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power2.out",
      stagger: 0.2,
    });

    // CTA Button Animation
    gsap.from(this.$refs.ctaButton, {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power2.out",
      delay: 1,
    });

    // Hamburger Icon Animation
    gsap.from(this.$refs.hamburger, {
      duration: 1,
      opacity: 0,
      rotate: 360,
      ease: "elastic.out(1, 0.5)",
      delay: 0.5,
    });
  },
};
</script>

<style scoped>
/* Custom styles for the navbar, if necessary */
</style>
