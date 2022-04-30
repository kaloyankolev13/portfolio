<template>
  <div>
    <div class="card-body py-4">
      <h4 class="card-title text-left">{{ project.name }}</h4>
      <p class="lead card-subtitle">ADD SOMETHING</p>
      <p class="display-5 my-4 text-primary text-center fw-bold">10</p>
      <p class="card-text mx-5 text-muted d-none d-lg-block text-right">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
        voluptatem!
      </p>
      <a href="" class="btn btn-outline-primary btn-lg mt-3 text-center">
        Read More
      </a>
    </div>
  </div>
  <ProjectModal :project="project" />
</template>

<script>
import ProjectModal from "./ProjectModal.vue";
export default {
  props: ["project"],
  components: {
    ProjectModal,
  },
  setup(props) {
    console.log(props.project);
  },
};
</script>

<style lang="scss" scoped>
</style>