<template>
  <section id="projects" class="bg-light mt-5">
    <div class="conatiner-md p-2">
      <div class="text-center pt-5">
        <h2>Projects</h2>
        <p class="lead text-muted">Some of the projects I have done so far</p>
      </div>
      <div class="row align-items-center justify-content-center my-5">
        <div
          v-for="project in projects"
          :key="project.id"
          class="card border-0 m-3 col-8 col-lg-4 col-xl-2"
          :style="{
            backgroundImage: 'url(' + project.image + ')',
            color: project.color,
            objectFit: 'fill',
          }"
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
        name: "Bulgarian Legacy",
        description: "Commemorative coins",
        image: require("../assets/img/legacy.jpg"),
        link: "#",
        color: "#fff",
        backgroundColor: "#000009",
        note: "Currently in development",
      },
      {
        id: 2,
        name: "TechhubSyd",
        description: "Programming network",
        image: require("../assets/img/techhub.png"),
        link: "https://techhub-exam.web.app/",
        color: "#fff",
        backgroundColor: null,
      },
      {
        id: 3,
        name: "Trapholt",
        description: "Art Museum",
        image: require("../assets/img/trapholt.png"),
        link: "https://github.com/kaloyankolev13/trapholt_dk",
        color: "",
        backgroundColor: "#f3f3f3",
      },
      {
        id: 4,
        name: "The Doors",
        description: "Tribute Page",
        image: require("../assets/img/doors.png"),
        link: "#",
        color: "#fff",
        backgroundColor: "#333",
      },
      {
        id: 5,
        name: '"Кубиста"',
        description: "Clothing Brand",
        image: require("../assets/img/Pants_Pullover_1.jpg"),
        link: "#",
        color: "#ffffff",
        backgroundColor: "#333",
        note: "Sadly not available anymore",
      },
    ]);
    return { projects };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";
.card {
  height: 200px;
}
</style>