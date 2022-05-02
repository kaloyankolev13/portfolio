<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-8">
          <img :src="project.image" alt="Picture of project" class="col-12" />
        </div>
        <div class="col-4 d-flex align-items-center justify-content-center">
          <h1>{{ project.name }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            saepe natus consectetur laborum nostrum commodi esse officia cumque
            impedit atque ad est nisi dolorem, ab velit nesciunt repellendus?
            Est minima tempore quam esse inventore repudiandae reiciendis quia
            modi, alias aut facere ea cupiditate numquam illo tempora quibusdam
          </p>
        </div>
        <div class="col-8">
          Heya Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          rem, porro nihil tempore mollitia voluptatem vitae inventore maiores.
          Eos, consequuntur.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  setup(props) {
    console.log(props.project.image);
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