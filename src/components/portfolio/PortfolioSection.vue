<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-8">
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">
        My Portfolio
      </h2>

      <div class="flex justify-center mb-12 space-x-4">
        <FilterButton
          v-for="(skill, index) in skills"
          :key="index"
          :skill="skill"
          :isActive="skill.name === activeSkill"
          @filter-selected="setActiveSkill"
        />
      </div>

      <transition-group
        name="fade"
        tag="div"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <PortfolioCard
          v-for="(project, index) in filteredProjects"
          :key="index"
          :project="project"
          class="transition-transform transform hover:scale-105"
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

export default {
  components: {
    FilterButton,
    PortfolioCard,
  },
  data() {
    return {
      skills: portfolioData.skills,
      activeSkill: "Photography",
    };
  },
  computed: {
    filteredProjects() {
      const skill = this.skills.find(
        (skill) => skill.name === this.activeSkill
      );
      return skill ? skill.projects : [];
    },
  },
  methods: {
    setActiveSkill(skillName) {
      this.activeSkill = skillName;
      this.animateProjects();
    },
    animateProjects() {
      gsap.fromTo(
        ".portfolio-card",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: "power3.out" }
      );
    },
  },
  mounted() {
    this.animateProjects();
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
