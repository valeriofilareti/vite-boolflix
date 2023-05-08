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
  <h1 v-if="store.resultArray.length !== 0">Movie</h1>
  <div class="card-container d-flex">
    <myCardMovie 
    v-for="(movie, index) in store.resultArray" 
    :movie="movie" 
    :key="index" 
    />
  </div>
  <h1 v-if="store.resultArrayTv.length !== 0">Tv</h1>
  <div class="card-container d-flex">
    <myCardTv
    v-for="(tv, index) in store.resultArrayTv" 
    :tv="tv" 
    :key="index" 
    />
  </div>
</template>


<style lang="scss" scoped>
@use '../scss/general/utilities' as *;
  .card-container {
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }
  h1 {
    color: white;
    margin: 20px;
    
  }
</style>