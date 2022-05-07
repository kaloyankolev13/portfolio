<template>
  <main class="container screen">
    <div class="row">
      <div class="col m-3">
        <h1 class="display-1 text-left">Hi , I am Kaloyan Kolev</h1>
        <p class="col-sm-12">I'm a frontend developer</p>
      </div>
    </div>
    <div class="accordion-flush" id="accordionExample">
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
          <div class="accordion-item m-3">
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
          <div class="accordion-item m-3">
            <h4>Skills:</h4>
            <ul>
              <div class="row my-3">
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
  color: #fff;
}

.accordion-button:not(.collapsed),
.accordion-button:focus {
  color: #f3f3f3;
  font-size: 1.5rem;
  transition: ease-in;
  background: none;
  box-shadow: none;
  border-color: #333;
}
.accordion-item {
  background: rgba(0, 0, 255, 0);
  border-bottom: #fff solid 1px;
}

.accordion-body {
  background-color: $primary-color;
  opacity: 0.6;
  border-radius: 10px;
  color: #fff;
}

button {
  background: rgba(0, 0, 0, 0);
  color: #fff;
}
</style>