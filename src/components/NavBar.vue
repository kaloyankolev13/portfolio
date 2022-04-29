<template>
  <nav class="navbar navbar-expand-md navbar-light pt-4">
    <div class="container-xxl">
      <!-- navbar brand / title -->
      <a class="navbar-brand" href="#intro">
        <span class="text-secondary fw-bold"> Kaloyan Kolev </span>
      </a>
      <!-- toggle button for mobile nav -->
      <button
        @click="open"
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#main-nav"
        aria-controls="main-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- navbar links -->
      <div
        class="collapse navbar-collapse justify-content-end align-center"
        id="main-nav"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#topics">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Get in Touch</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    const open = function (e) {
      console.log(e.key);
    };
    return { open };
  },
};
</script>

<style lang="scss" scoped>
.navbar-toggler {
  border: none;
  outline: none;

  &:focus,
  &:active,
  &-icon:focus {
    outline: none;
    box-shadow: none;
  }
}
</style>