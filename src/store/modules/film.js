export default {
  namespaced: true,

  state: {
    name: '张三',
    filmList: []
  },

  getters: {
    filmCount (state) {
      return state.filmList.length
    },
    msg (state) {
      return state.filmList.length
    },
    a () {
      return 'film -a -getter'
    },
    b (state, getters, rootState) {
      console.log(state)
      console.log(rootState)
      return getters.a
        .split('')
        .reverse()
        .join('')
    }
  },

  mutations: {
    setFilmList (state, payload) {
      state.filmList = payload
    },
    setName (state, payload) {
      state.name = payload
    }
  },

  actions: {
    a ({ state, rootState }) {
      console.log('film-a')
      console.log(state)
      console.log(rootState.cinema.name)
    },
    getFilmList (context, payload) {
      setTimeout(() => {
        let result = [
          { filmId: 1, filmName: '中国机长' },
          { filmId: 2, filmName: '我和我的祖国' }
        ]
        context.commit('setFilmList', result)
      }, 5000)
    }
  }
}
