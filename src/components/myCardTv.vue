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
      <span>{{ tv.original_name }}</span>
      <span>{{ tv.name }}</span>
      <div class="language">
        <img v-if="tv.original_language === 'en'" src="../assets/img/en.png" alt="">
        <img v-else-if="tv.original_language === 'it'" src="../assets/img/it.png" alt="">
        <span v-else>{{ tv.original_language }}</span>
      </div>
      <span>{{ tv.vote_average }}</span>
      <div class="movie-overview">
        <p>{{ tv.overview }}</p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>