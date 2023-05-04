
<script>
import axios from 'axios';
import { store } from "./data/store";
import myHeader from './components/myHeader.vue';
export default {
  name: 'App',
  data() {
    return {
      store
    }
  },
  components: {
    myHeader
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
        console.log(result.data);
      })
    }
  },
  mounted(){
    this.getApi()
  }
}
</script>
<template>
  <myHeader @search="getApi" />
</template>

<style>

</style>