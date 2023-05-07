import {reactive} from "vue";

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/',
  searchText: '',
  imgUrl: 'https://image.tmdb.org/t/p/w780',
  resultArray: [],
  resultArrayTv: []

})