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

    <div :style="{ backgroundImage: movie.poster_path? `url(${store.imgUrl + movie.poster_path})` : 'url(\'../src/assets/img/Image_not_available.png\')'}" class="card">
      
      <div class="overlay">
        <h2>{{ movie.title }}</h2>
        <h4>{{ movie.original_title }}</h4>
        <div class="language">
          <img v-if="movie.original_language === 'en'" src="../assets/img/en.png" alt="">
          <img v-else-if="movie.original_language === 'it'" src="../assets/img/it.png" alt="">
          <span v-else>{{ movie.original_language }}</span>
        </div>
        
        <span>
          <i v-for="(vote, index) in Math.round((movie.vote_average / 2))" :key="index" class="fa-solid fa-star"></i>
          <i v-for="(vote, index) in 5 - Math.round((movie.vote_average / 2))" :key="index" class="fa-regular fa-star"></i>
        </span>
        <div class="movie-overview">
          <p>{{ movie.overview }}</p>
        </div>
      </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../scss/general/utilities' as *;
i {
  color: yellow;
}
</style>