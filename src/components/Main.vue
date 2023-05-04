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
  <myCard v-for="(movie, index) in store.resultArray" :movie="movie" :key="index" />
</template>


<style>

</style>