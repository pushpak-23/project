<template>
  <div
    class="portfolio-card relative overflow-hidden rounded-lg shadow-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300"
  >
    <img
      :src="project.image"
      :alt="project.title"
      class="w-full h-64 object-cover"
    />
    <div
      class="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
    >
      <h3 class="text-white text-xl font-semibold">{{ project.title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Custom styles if needed */
</style>
