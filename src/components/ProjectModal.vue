<template>
  <div
    :style="{ backgroundColor: project.backgroundColor }"
    class="container my-5 rounded"
    @click="$emit('close')"
  >
    <div class="row p-3">
      <div class="col-8">
        <img
          :src="project.image"
          alt="Picture of project"
          class="col-12 rounded-3 border"
        />
      </div>
      <div
        class="border col-4 d-flex align-items-center justify-content-center"
      >
        <h1>{{ project.name }}</h1>
      </div>
    </div>
    <a v-if="link" class="btn" :href="link">Link</a>
    <p v-else>Link not available</p>
    <div class="row py-3">
      <div class="col-4 border">
        <h3>Technologies</h3>
        <p>Technologies used in the project</p>
      </div>
      <div class="col-8 border">
        <p>{{ project.descriptionLong }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: ["project"],
  emits: ["close"],
  setup(props) {
    let link = ref(props.project.link);
    return { link };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";
.container {
  position: fixed;
  z-index: 9999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

img {
  background-size: cover;
  object-fit: cover;
  height: 300px;
}
.btn {
  background: rgb(104, 12, 7);
  color: #fff;
  border-radius: 30px;
  width: 200px;
  height: 100%;
}
</style>