<template>
  <nav
    class="fixed top-0 left-0 w-full z-20 bg-black bg-opacity-40 backdrop-blur-md shadow-lg p-4 transition-all duration-500"
    :class="{ 'bg-opacity-90': scrolled }"
    ref="navbar"
  >
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="text-white font-bold text-2xl" ref="logo">
        <router-link to="/">Freelancer</router-link>
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
        <li v-for="link in links" :key="link.text">
          <router-link
            :to="link.to"
            class="block py-2 md:py-0 hover:text-blue-500 transition-colors duration-300 hover:scale-110"
          >
            {{ link.text }}
          </router-link>
        </li>
      </ul>

      <!-- CTA Button -->
      <router-link
        to="#contact"
        class="hidden md:inline-block px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-300"
        ref="ctaButton"
      >
        Hire Me
      </router-link>
    </div>
  </nav>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      mobileMenuOpen: false,
      scrolled: false,
      links: [
        { text: "About", to: "#about" },
        { text: "Portfolio", to: "#portfolio" },
        { text: "Pricing", to: "#pricing" },
        { text: "Testimonials", to: "#testimonials" },
        { text: "Contact", to: "#contact" },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      gsap.to(this.$refs.navLinks, {
        duration: 0.5,
        opacity: this.mobileMenuOpen ? 1 : 0,
        y: this.mobileMenuOpen ? 0 : -20,
        ease: "power2.out",
      });
    },
    handleScroll() {
      this.scrolled = window.scrollY > 50;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("scroll", this.handleScroll);

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
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
[v-cloak] {
  display: none;
}
</style>
