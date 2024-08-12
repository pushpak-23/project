<template>
  <button
    @click="handleClick"
    :class="[
      'px-4 py-2 rounded-lg',
      {
        'bg-blue-600 text-white': isActive,
        'bg-gray-200 text-gray-800': !isActive,
      },
    ]"
    class="transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-500"
  >
    {{ skill.name }}
  </button>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit("filter-selected", this.skill.name);
    },
  },
};
</script>

<style scoped>
/* Custom styles if needed */
</style>
