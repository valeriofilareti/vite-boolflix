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
    </div>

</template>

<style scoped>
.card {
  width: 230px;
  height: 340px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  background-size: cover;
  background-position: center;
  position: relative;
  color: white;
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  display: none;
}
.card:hover .overlay {
  display: flex;
  transition: 1s;
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