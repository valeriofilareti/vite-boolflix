  <script>
  export default {
  name: 'myCard',
  props: {
    movie: Object
  }
  }
  </script>

<template>

    <div class="card">
      <span>{{ movie.original_title }}</span>
      <span>{{ movie.title }}</span>
      <span>{{ movie.original_language }}</span>
      <span>{{ movie.vote_average }}</span>
      <div class="movie-overview">
        <p>{{ movie.overview }}</p>
      </div>
    </div>

</template>

<style scoped>
.card {
  width: 200px;
  height: 300px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
}
.movie-overview {
  width: 100%;
  height: 100px;
  overflow: auto;
}

</style>