  <script>
  export default {
  name: 'myCardTv',
  props: {
    tv: Object
  }
  }
  </script>

<template>
  <div class="card">
    <span>{{ tv.original_name }}</span>
    <span>{{ tv.name }}</span>
    <div class="language">
      <img v-if="tv.original_language === 'en'" src="../assets/img/en.png" alt="">
      <img v-else-if="tv.original_language === 'it'" src="../assets/img/it.png" alt="">
      <span v-else>{{ tv.original_language }}</span>
    </div>
    <span>{{ tv.vote_average }}</span>
    <div class="tv-overview">
      <p>{{ tv.overview }}</p>
    </div>
  </div>
</template>


<style scoped>
.card {
  width: 200px;
  height: 300px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
}
.tv-overview {
  width: 100%;
  height: 100px;
  overflow: auto;
}
.language {
  height: 30px;
  width: 30px;
}

.language > img {
  width: 100%;
}
</style>