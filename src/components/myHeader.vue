  <script>
  import { store } from "../data/store";
  export default {
  name: 'myHeader',
  data(){
    return {
      store
    }
  }
  }
  </script>

<template>
  <div>
    <h1>header</h1>
    <input type="text" v-model="store.searchText" @keyup.enter="$emit('search')">
  </div>
</template>


<style>

</style>