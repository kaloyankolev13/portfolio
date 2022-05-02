<template>
  <main class="container screen">
    <div class="row">
      <div class="col">
        <h1 class="display-1 text-left">Front-End Developer</h1>
        <p class="col-sm-12">Hello , my name is Kaloyan Kolev</p>
      </div>
    </div>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Little About Me
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            I am a multimedia design student and an aspiring developer with keen
            interest in technology, searching for a job ,so that I can practise
            and improve my skills I have acquired so far. Past experiences
            helped me achieve creative thinking and a growth mindset with
            organisational , analytical and problem-solving skills .
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            More
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">Skills:</div>
          <br />
          <ul>
            <div class="row">
              <div class="col-6">
                <li>Html</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </div>
              <div class="col-6">
                <li>Sass</li>
                <li>Node.js</li>
                <li>Vue.js</li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
</style>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";

.container {
  padding: 200px 0 500px 0;
}

.accordion-button:not(.collapsed),
.accordion-button:focus {
  color: $primary-color;
  background: none;
  box-shadow: none;
}
.x-accordion-heading .x-accordion-toggle.collapsed {
  background-color: transparent;
}
</style>