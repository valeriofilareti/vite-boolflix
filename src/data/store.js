import {reactive} from "vue";

export const store = reactive({
  genre: 'movie',
  apiUrl: 'https://api.themoviedb.org/3/search/',
  searchText: '',
  resultArray: [],
  resultArrayTv: []

})