<template>
  <div
    class="testimonial-card p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
  >
    <img
      :src="testimonial.photo"
      alt="photo"
      class="w-16 h-16 rounded-full mx-auto mb-4"
    />
    <h3 class="text-lg font-bold text-center">{{ testimonial.name }}</h3>
    <p class="text-center text-sm text-gray-500">
      {{ testimonial.designation }}
    </p>
    <p class="mt-4 text-gray-700">{{ testimonial.feedback }}</p>
  </div>
</template>

<script>
export default {
  props: {
    testimonial: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Custom styles if needed */
</style>
