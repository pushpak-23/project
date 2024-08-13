<template>
  <div
    class="pricing-card p-8 bg-white rounded-lg shadow-lg transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl"
  >
    <h3 class="text-2xl font-bold text-center text-gray-800">
      {{ pricing.skill }}
    </h3>
    <p class="mt-4 text-center text-gray-600">{{ pricing.description }}</p>

    <div class="mt-6 text-center">
      <span
        v-if="pricing.hourlyRate"
        class="text-2xl font-semibold text-green-600"
      >
        ${{ pricing.hourlyRate }} / hour
      </span>
      <span v-else class="text-2xl font-semibold text-green-600">
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
.pricing-card {
  background: linear-gradient(135deg, #ffffff, #f9f9f9);
}

.pricing-card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}
</style>
