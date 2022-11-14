<template>
  <div>
    <div v-if="showModal">
      <ProjectModal :project="project" @close="toggleModal" />
    </div>
    <div class="card-body align-items-center my-5 py-4" @click="toggleModal">
      <h4 class="card-title text-left">{{ project.name }}</h4>
      <p class="lead card-subtitle">{{ project.description }}</p>
      <p class="lead card-subtitle py-1" style="font-size: 11px">
        {{ project.note }}
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import ProjectModal from "./ProjectModal.vue";
export default {
  props: ["project"],
  emits: ["close"],
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