<template>
  <div v-show="showModal">
    <ProjectModal :project="project" @close="toggleModal" />
  </div>
  <div id="overlay" class="rounded-1">
    <div class="card-body align-items-center pt-5" @click="toggleModal">
      <h4 class="card-title text-left">{{ project.name }}</h4>
      <p class="lead card-subtitle">{{ project.descriptionShort }}</p>

      <p class="lead card-subtitle note" style="font-size: 11px; color: #fff">
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
.note {
  background: rgb(104, 12, 7);
}

#overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
}
#overlay:hover {
  background: rgba(0, 0, 0, 0.7);
}
</style>