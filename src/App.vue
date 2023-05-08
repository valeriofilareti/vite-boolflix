
<script>
import axios from 'axios';
import { store } from "./data/store";
import myHeader from './components/myHeader.vue';
import Main from './components/Main.vue';
export default {
  name: 'App',
  data() {
    return {
      store,
      params: {
        params: {
          api_key: 'e99307154c6dfb0b4750f6603256716d',
          language: 'it-IT',
        }
      }
    }
  },
  components: {
    myHeader,
    Main
  },
  methods: {
    getApi(){
      axios.get(store.apiUrl + 'movie', this.params)
      .then(result => {
        store.resultArray = result.data.results
      })
    },
    getApiTv(){
      axios.get(store.apiUrl + 'tv', this.params)
      .then(result => {
        store.resultArrayTv = result.data.results
      })
    },
    getApiAll(){
      this.params.params.query = store.searchText;
      if(store.genre === 'all'){
        this.getApi();
        this.getApiTv();
        this.params.params.query = '';
      }else if(store.genre === 'movies'){
        this.getApi();
      }else if(store.genre === 'tvseries'){
        this.getApiTv();
      }
    },
    genreChange(){
      console.log(store.genre);
    }
  },
  mounted(){
  }
}
</script>
<template>
  <myHeader @search="getApiAll" @gen-change="genreChange" />
  <Main />
</template>

<style lang="scss">
@import './scss/main.scss';
body {
  background-color: black;
}
</style>