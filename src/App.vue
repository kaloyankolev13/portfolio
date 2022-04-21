<template>
  <div class="object"></div>
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
.object {
  width: 300px;
  height: 300px;
  transform-origin: 0 0;
  transform: translate(-100%, 50%) rotate(45deg) translate(100%, -50%);
  background: red;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;

  z-index: -9999;
}
</style>
