<template>
  <div
    class="relative inline-block"
    @mouseenter="toggleSubcategories(true)"
    @mouseleave="toggleSubcategories(false)"
  >
    <button
      @click="selectSkill"
      :class="[
        'px-4 py-2 rounded-lg overflow-hidden relative z-20',
        {
          'bg-blue-600 text-white': isActive,
          'bg-gray-200 text-gray-800': !isActive,
        },
      ]"
      class="transition duration-500 ease-out transform hover:scale-110"
    >
      <span class="relative z-10">{{ skill.name }}</span>
      <span
        class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 origin-left transition-all duration-500 ease-in-out hover:scale-x-100 z-0"
      ></span>
    </button>

    <!-- Subcategories Dropdown -->
    <div
      v-show="showSubcategories && skill.subcategories"
      ref="dropdown"
      class="absolute left-0 mt-1 ml-2 w-max bg-white shadow-2xl rounded-lg z-10 overflow-hidden opacity-0 transform scale-95 origin-top"
    >
      <ul>
        <li
          v-for="(subcategory, index) in skill.subcategories"
          :key="index"
          class="px-6 py-3 cursor-pointer hover:bg-gradient-to-r from-blue-200 to-blue-400 transition-all duration-300 ease-in-out"
          @click="selectSubcategory(subcategory.name)"
        >
          {{ subcategory.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

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
  data() {
    return {
      showSubcategories: false,
    };
  },
  watch: {
    showSubcategories(value) {
      const dropdown = this.$refs.dropdown;

      if (value) {
        gsap.to(dropdown, {
          opacity: 1,
          scaleY: 1,
          scaleX: 1,
          y: 0,
          duration: 0.5,
          ease: "power4.out",
        });
      } else {
        gsap.to(dropdown, {
          opacity: 0,
          scaleY: 0.95,
          scaleX: 0.95,
          y: -10,
          duration: 0.3,
          ease: "power4.in",
        });
      }
    },
  },
  methods: {
    selectSkill() {
      if (!this.skill.subcategories) {
        this.$emit("filter-selected", {
          mainCategory: this.skill.name,
          subCategory: "",
        });
      }
    },
    toggleSubcategories(value) {
      this.showSubcategories = value;
    },
    selectSubcategory(subcategoryName) {
      this.$emit("filter-selected", {
        mainCategory: this.skill.name,
        subCategory: subcategoryName,
      });
      this.showSubcategories = false;
    },
  },
};
</script>

<style scoped>
button span::before,
button span::after {
  content: "";
  position: absolute;
  width: 120%;
  height: 120%;
  background: rgba(255, 255, 255, 0.1);
  top: -10%;
  left: -10%;
  transform: rotate(45deg);
  transition: opacity 0.5s, transform 0.5s;
}

button span::before {
  animation: shine 2s infinite linear;
}

@keyframes shine {
  0% {
    transform: rotate(45deg) translateX(-200%);
  }
  100% {
    transform: rotate(45deg) translateX(200%);
  }
}
</style>
