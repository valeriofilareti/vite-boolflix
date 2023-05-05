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
      <div class="language">
        <img v-if="movie.original_language === 'en'" src="../assets/img/en.png" alt="">
        <img v-else-if="movie.original_language === 'it'" src="../assets/img/it.png" alt="">
        <span v-else>{{ movie.original_language }}</span>
      </div>
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
.language {
  height: 30px;
  width: 30px;
}

.language > img {
  width: 100%;
}

</style>