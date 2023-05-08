<script>
import { store } from "../data/store";
export default {
  name: 'myCardTv',
  data(){
    return {
      store
    }
  },
  props: {
    tv: Object
  }
}
</script>

<template>
  <div :style="{ backgroundImage: `url(${store.imgUrl + tv.poster_path})` }" class="card">
    <div class="overlay">
      <h2>{{ tv.original_name }}</h2>
      <h4>{{ tv.name }}</h4>
      <div class="language">
        <img v-if="tv.original_language === 'en'" src="../assets/img/en.png" alt="">
        <img v-else-if="tv.original_language === 'it'" src="../assets/img/it.png" alt="">
        <span v-else>{{ tv.original_language }}</span>
      </div>
      <span>
          <i v-for="(vote, index) in Math.round((tv.vote_average / 2))" :key="index" class="fa-solid fa-star"></i>
          <i v-for="(vote, index) in 5 - Math.round((tv.vote_average / 2))" :key="index" class="fa-regular fa-star"></i>
        </span>
      <div class="movie-overview">
        <p>{{ tv.overview }}</p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  i {
    color: yellow;
  }
</style>