<template>
  <div></div>
  <NavBar />
  <HeroSection />
  <ProjectsSection />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";

export default {
  name: "App",
  components: {
    NavBar,
    HeroSection,
    ProjectsSection,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  z-index: 1;
}
</style>
