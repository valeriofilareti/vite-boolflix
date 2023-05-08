<script>
import { store } from "../data/store";

export default {
  name: 'myCard',
  props: {
    movie: Object
  },
  data(){
    return {
      store,
    }
  }
}
</script>

<template>

    <div :style="{ backgroundImage: `url(${store.imgUrl + movie.poster_path})` }" class="card">
      
      <div class="overlay">
        <span>{{ movie.title }}</span>
        <span>{{ movie.original_title }}</span>
        <div class="language">
          <img v-if="movie.original_language === 'en'" src="../assets/img/en.png" alt="">
          <img v-else-if="movie.original_language === 'it'" src="../assets/img/it.png" alt="">
          <span v-else>{{ movie.original_language }}</span>
        </div>
        <span>vote: {{ Math.round(movie.vote_average / 2) }}</span>
        <div class="movie-overview">
          <p>{{ movie.overview }}</p>
        </div>
      </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../scss/general/utilities' as *;
</style>