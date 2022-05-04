<template>
  <div>
    <div v-if="showModal">
      <ProjectModal :project="project" />
    </div>
    <div class="card-body py-4" @click="toggleModal">
      <h4 class="card-title text-left">{{ project.name }}</h4>
      <p class="lead card-subtitle">ADD SOMETHING</p>
      <img :src="project.image" alt="Picture of project" class="col-12" />
      <p class="card-text mx-5 text-muted d-none d-lg-block text-right">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
        voluptatem!
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import ProjectModal from "./ProjectModal.vue";
export default {
  props: ["project"],
  components: {
    ProjectModal,
  },
  setup() {
    let showModal = ref(false);
    const toggleModal = () => {
      showModal.value = !showModal.value;
    };
    return { showModal, toggleModal };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";
img {
  background-size: cover;
  object-fit: cover;
  height: 100px;
}
</style>