<template>
  <section id="projects" class="bg-light mt-5">
    <div class="conatiner-lg">
      <div class="text-center pt-5">
        <h2>Projects</h2>
        <p class="lead text-muted">Some of the projects I have done so far</p>
      </div>
      <div class="row align-items-center justify-content-center my-5">
        <div
          v-for="project in projects"
          :key="project.id"
          class="card border-0 m-3 col-8 col-lg-4 col-xl-3"
        >
          <SingleProject :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";
import SingleProject from "./SingleProject.vue";
export default {
  components: {
    SingleProject,
  },
  setup() {
    let projects = ref([
      {
        id: 1,
        name: "project 1",
        description: "Once upon a time 1",
        image: require("../assets/img/Pants_Pullover_1.jpg"),
      },
      {
        id: 2,
        name: "project 2",
        description: "Once upon a time 2",
      },
    ]);
    return { projects };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";
</style>