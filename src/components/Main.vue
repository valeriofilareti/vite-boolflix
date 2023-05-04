  <script>
  import { store } from "../data/store";
  import myCard from './myCard.vue';
  export default {
  name: 'Main',
  data(){
    return {
      store
    }
  },
  components: {
    myCard
  }
  }
  </script>

<template>
  <div class="card-container">
    <myCard v-for="(movie, index) in store.resultArray" :movie="movie" :key="index" />
  </div>
</template>


<style scoped>
  .card-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }
</style>