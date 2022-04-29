<template>
  <div>
    <div class="card-body text-center py-4">
      {{ project.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
};
</script>

<style lang="scss" scoped>
</style>