<template>
  <div class="bg">
    <NavBar />
    <HeroSection />
    <ProjectsSection />
    <FooterVue />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import FooterVue from "./components/FooterVue.vue";

export default {
  name: "App",
  components: {
    NavBar,
    HeroSection,
    ProjectsSection,
    FooterVue,
  },
};
</script>

<style lang="scss">
@import "@/assets/style.scss"; // #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   color: #2c3e50;
//   z-index: 1;
// }
// // .bg {
// //   background-color: #333;
// // }

.bg {
  background: url(./assets/img/portfolio-bg.png);
  background-size: cover;
}
a {
  color: #fff;
}
</style>
