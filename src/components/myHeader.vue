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
    <div class="search-bar d-flex align-center">
      <input type="text" placeholder="Search something..." v-model="store.searchText" @keyup.enter="$emit('search')">
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../scss/general/utilities' as *;
.header {
  padding: 30px;
  background-color: black;
}
.logo {
  height: 100%;
  width: 200px;
  img {
    width: 100%;
  }
}
.search-bar {
  width: 200px;
  border-radius: 15px;
  input {
    height: 30px;
    width: 100%;
  }
}
h1 {
  color: white;
}
</style>