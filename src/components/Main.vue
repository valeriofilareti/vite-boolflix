  <script>
  import { store } from "../data/store";
  import myCardMovie from './myCardMovie.vue';
  import myCardTv from './myCardTv.vue';
  export default {
  name: 'Main',
  data(){
    return {
      store
    }
  },
  components: {
    myCardMovie,
    myCardTv
  }
  }
  </script>

<template>
  <h1>Movie</h1>
  <div class="card-container">
    <myCardMovie 
    v-for="(movie, index) in store.resultArray" 
    :movie="movie" 
    :key="index" 
    />
  </div>
  <h1>Tv</h1>
  <div class="card-container">
    <myCardTv
    v-for="(tv, index) in store.resultArrayTv" 
    :tv="tv" 
    :key="index" 
    />
  </div>
</template>


<style scoped>
  .card-container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
  }
</style>