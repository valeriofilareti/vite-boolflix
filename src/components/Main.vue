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
  },
  props: {
    title: String,
    originalTitle: String,
    language: String,
    rate: String
  }
  }
  </script>

<template>
  <myCard
    v-for="(movie, index) in store.resultArray" :key="index" 

  />
</template>


<style>

</style>