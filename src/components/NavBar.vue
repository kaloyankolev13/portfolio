<template>
  <nav class="navbar navbar-dark navbar-expand-md fixed-top p-3">
    <div class="container-xxl">
      <!-- navbar brand / title -->
      <a class="" href="#">
        <img src="../assets/img/logo.svg" height="80" alt="logo" />
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
@import "../assets/style.scss";

@media (max-width: 768px) {
  .nav-item {
    border-bottom: 1px solid #f3f3f3;
  }
}

a {
  color: #fff;
}
a:hover {
  color: $primary-color;
}

.navbar-toggler {
  border: $primary-color 1px solid;
  outline: none;

  &:focus,
  &:active,
  &-icon:focus {
    outline: none;
    box-shadow: none;
  }
}
</style>