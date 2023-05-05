
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
          language: 'it_IT',
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
      console.log(this.params);
      axios.get(store.apiUrl + 'movie', this.params)
      .then(result => {
        store.resultArray = result.data.results
        console.log(store.resultArray);
        
      })
    },
    getApiTv(){
      axios.get(store.apiUrl + 'tv', this.params)
      .then(result => {
        store.resultArrayTv = result.data.results
        console.log(store.resultArrayTv);
      })
    },
    getApiAll(){
      this.params.params.query = store.searchText;
      this.getApi();
      this.getApiTv();
    }
  },
  mounted(){
    console.log(this.store.resultArrayTv);
  }
}
</script>
<template>
  <myHeader @search="getApiAll" />
  <Main />
</template>

<style>

</style>