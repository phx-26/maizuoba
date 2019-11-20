export default {
  namespaced: true,
  state: {
    name: '李四',
    cinemaList: []
  },
  getters: {
    cinemaCount (state) {
      return state.cinemaList.length
    },
    msg (state) {
      return state.cinemaList.length
    }
  },
  mutations: {
    setCinemaList (state, payload) {
      state.cinemaList = payload
    }
  },
  actions: {
    a () {
      console.log('cinema-a')
    },
    getCinemaList ({ commit }, payload) {
      setTimeout(() => {
        let result = [
          { cinID: 1, cinName: 'A影院' },
          { cinID: 2, cinName: 'B影院' }
        ]
        commit('setCinemaList', result)
      }, 5000)
    }
  }
}
