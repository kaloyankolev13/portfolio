<template>
  <div class="container" @click="$emit('close')">
    <div>
      <div class="row">
        <div class="col-8">
          <img :src="project.image" alt="Picture of project" class="col-12" />
        </div>
        <div class="col-4 d-flex align-items-center justify-content-center">
          <h1>{{ project.name }}</h1>
        </div>
        <a :href="link">Link</a>
      </div>
      <div class="row">
        <div class="col-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div>
        <div class="col-8">Heya Lor</div>
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
div {
  background: #f3f3f3;
}
img {
  background-size: cover;
  object-fit: cover;
  height: 300px;
}
</style>