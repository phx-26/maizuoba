import axios from 'axios'

export default {
  namespaced: true,

  state: {
    filmList: [],
    filmTotal: 1
  },
  getters: {

  },
  mutations: {
    setFilmList (state, payload) {
      state.filmList = payload
    },
    setFilmTotal (state, payload) {
      state.filmTotal = payload
    }
  },
  actions: {
    getFilmList (context, payload) {
      axios.get('https://m.maizuo.com/gateway', {
        params: {
          cityId: 440300,
          pageNum: 1,
          pageSize: 10,
          type: 1,
          k: 7568369
        },
        headers: {
          'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"157103657520989505176261","bc":"440300"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(response => {
        // console.log(response)
        let result = response.data
        // console.log(result)
        if (result.status === 0) {
          context.commit('setFilmTotal', result.data.total)
          context.commit('setFilmList', context.state.filmList.concat(result.data.films))

          // if (payload.callback) {
          //   payload.callback()
          // }
        }
      })
    }
  }
}
