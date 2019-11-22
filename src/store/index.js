import Vue from 'vue'
import Vuex from 'vuex'
import FilmModules from './modules/film'
import CityModules from './modules/city'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    film: FilmModules,
    city: CityModules
  }
})

export default store
