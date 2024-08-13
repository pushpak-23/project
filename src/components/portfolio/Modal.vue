<!-- Modal.vue -->
<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
  >
    <div
      class="relative w-full max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg"
    >
      <button
        @click="closeModal"
        class="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
      >
        &times;
      </button>
      <div class="flex flex-col items-center">
        <img
          :src="project.image"
          :alt="project.title"
          class="w-full h-80 object-cover rounded-lg mb-4"
        />
        <h3 class="text-2xl font-semibold mb-4">{{ project.title }}</h3>
        <p class="text-gray-700 mb-4">{{ project.description }}</p>
        <a
          :href="project.link"
          target="_blank"
          class="text-blue-500 hover:underline"
        >
          Visit Project
        </a>
      </div>
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
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.backdrop-blur-sm {
  backdrop-filter: blur(5px);
}
</style>
