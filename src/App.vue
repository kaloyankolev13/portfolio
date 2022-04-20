<template>
  <div class="objdect"></div>
  <NavBar msg="Welcome to Your Vue.js App" />
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
}
.object {
  width: 100px;
  height: 100px;
  background: red;
  border-radius: 50%;
}
</style>
