<template>
  <section class="py-16 bg-gray-100">
    <div class="container mx-auto px-8">
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">
        What Clients Say
      </h2>

      <div class="testimonials-carousel">
        <transition-group
          name="fade"
          tag="div"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <TestimonialCard
            v-for="(testimonial, index) in testimonials"
            :key="index"
            :testimonial="testimonial"
            class="testimonial-card"
          />
        </transition-group>
      </div>
    </div>
  </section>
</template>

<script>
import TestimonialCard from "./TestimonialCard.vue";
import testimonialsData from "../data/testimonialsData.json";
import { gsap } from "gsap";

export default {
  components: {
    TestimonialCard,
  },
  data() {
    return {
      testimonials: testimonialsData.testimonials,
    };
  },
  mounted() {
    this.animateTestimonials();
  },
  methods: {
    animateTestimonials() {
      gsap.fromTo(
        ".testimonial-card",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.3, duration: 0.8, ease: "power3.out" }
      );
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
