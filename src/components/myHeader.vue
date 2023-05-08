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
  <div class="header d-flex justify-between align-center">
    <div class="logo">
      <img src="../assets/img/logo-boolflix.png" alt="">
    </div>
    <div class="inputs d-flex align-center">
      <select id="genres" @change="$emit('gen-change')" v-model="store.genre">
        <option value="all">All</option>
        <option value="movies">Movies</option>
        <option value="tvseries">Tv Series</option>
      </select>
      <input type="text" placeholder="Search something..." v-model="store.searchText" @keyup.enter="$emit('search')">
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../scss/general/utilities' as *;
.header {
  padding: 20px;
  background-color: black;
}
.logo {
  height: 100%;
  width: 200px;
  img {
    width: 100%;
  }
}
.inputs {
  width: 300px;
  border-radius: 15px;
  input, select {
    height: 30px;
    width: 100%;
    margin: 5px
  }
}
h1 {
  color: white;
}
</style>