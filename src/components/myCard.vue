  <script>
  export default {
  name: 'myCard',
  props: {
    movie: Object
  }
  }
  </script>

<template>
  <h1>{{ movie.original_title }}</h1>
  <h1>{{ movie.title }}</h1>
  <p>{{ movie.overview }}</p>
  <p>{{ movie.original_language }}</p>
</template>

<style scoped>

body {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}

</style>