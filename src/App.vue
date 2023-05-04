
<script>
import axios from 'axios';
import { store } from "./data/store";
import myHeader from './components/myHeader.vue';
import Main from './components/Main.vue';
export default {
  name: 'App',
  data() {
    return {
      store
    }
  },
  components: {
    myHeader,
    Main
  },
  methods: {
    getApi(){
      axios.get(store.apiUrl, {
      params: {
        api_key: 'e99307154c6dfb0b4750f6603256716d',
        language: 'it_IT',
        query: store.searchText
      }
      })
      .then(result => {
        store.resultArray = result.data.results
        console.log(store.resultArray);
      })
    }
  },
  mounted(){
    console.log(this.store.resultArray);
  }
}
</script>
<template>
  <myHeader @search="getApi" />
  <Main />
</template>

<style>

</style>