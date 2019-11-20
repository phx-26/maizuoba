import Vue from 'vue'
import Vuex from 'vuex'

import filmModule from './modules/film'
import cinemaModule from './modules/cinema'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    film: filmModule,
    cinema: cinemaModule
  }
})

export default store
