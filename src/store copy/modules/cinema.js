export default {
  state: {
    cinemaList: []
  },
  getters: {
    cinemaCount (state) {
      return state.cinemaList.length
    }
  },
  mutations: {
    setCinemaList (state, payload) {
      state.cinemaList = payload
    }
  },
  actions: {
    getCinemaList (context, payload) {
      setTimeout(() => {
        let result = [
          { cinID: 1, cinName: 'A影院' },
          { cinID: 2, cinName: 'B影院' }
        ]
        context.commit('setCinemaList', result)
      }, 5000)
    }
  }
}
