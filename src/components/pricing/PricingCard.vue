<template>
  <div
    class="pricing-card p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
  >
    <h3 class="text-2xl font-bold text-center text-gray-800">
      {{ pricing.skill }}
    </h3>
    <p class="mt-4 text-center text-gray-600">{{ pricing.description }}</p>

    <div class="mt-6 text-center">
      <span
        v-if="pricing.hourlyRate"
        class="text-xl font-semibold text-green-500"
      >
        ${{ pricing.hourlyRate }} / hour
      </span>
      <span v-else class="text-xl font-semibold text-green-500">
        From ${{ pricing.minRate }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pricing: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Custom styles if needed */
</style>
