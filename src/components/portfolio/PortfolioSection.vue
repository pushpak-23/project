<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-8">
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">
        My Portfolio
      </h2>

      <!-- Filter Buttons -->
      <div class="flex justify-center mb-12 space-x-4">
        <FilterButton
          v-for="(skill, index) in skills"
          :key="index"
          :skill="skill"
          :isActive="skill.name === activeSkill"
          @filter-selected="setActiveSkill"
        />
      </div>

      <!-- Projects Grid -->
      <transition-group
        name="fade"
        tag="div"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <PortfolioCard
          v-for="(project, index) in filteredProjects"
          :key="index"
          :project="project"
          class="portfolio-card transition-transform transform hover:scale-105"
        />
      </transition-group>
    </div>
  </section>
</template>

<script>
import FilterButton from "./FilterButton.vue";
import PortfolioCard from "./PortfolioCard.vue";
import portfolioData from "../data/portfolioData.json";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    FilterButton,
    PortfolioCard,
  },
  data() {
    return {
      skills: [{ name: "Best" }, ...portfolioData.skills], // Add "Best" category
      activeSkill: "Best", // Set "Best" as the default
      activeSubcategory: "", // Initially empty, used for other categories
    };
  },
  computed: {
    filteredProjects() {
      if (this.activeSkill === "Best") {
        // If the "Best" category is active, randomly select projects from all subcategories
        let allProjects = [];
        this.skills.slice(1).forEach((skill) => {
          skill.subcategories.forEach((subcat) => {
            allProjects = [...allProjects, ...subcat.projects];
          });
        });
        return allProjects.sort(() => 0.5 - Math.random()).slice(0, 6); // Return a random selection of 6 projects
      } else {
        const skill = this.skills.find(
          (skill) => skill.name === this.activeSkill
        );
        if (!skill) return [];

        const subcategory = skill.subcategories.find(
          (subcat) => subcat.name === this.activeSubcategory
        );

        return subcategory ? subcategory.projects : [];
      }
    },
  },
  methods: {
    setActiveSkill({ mainCategory, subCategory }) {
      console.log("Main Category:", mainCategory, "Sub Category:", subCategory); // Debugging log
      this.activeSkill = mainCategory;

      if (mainCategory === "Best") {
        this.activeSubcategory = ""; // Reset subcategory for "Best"
      } else {
        this.activeSubcategory = subCategory; // Set subcategory for other skills
      }

      this.animateProjects(); // Re-trigger the animation
    },

    animateProjects() {
      gsap.fromTo(
        ".portfolio-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".portfolio-card",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
  },
  mounted() {
    this.animateProjects(); // Initial animation on mount
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
