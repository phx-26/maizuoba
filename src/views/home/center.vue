<template>
  <div class="page-center">
<!-- 二级路由页面 我的页面 -->
    <h1>个人中心页</h1>
    <p v-if="userInfo.username">{{ userInfo.username }}</p>
    <router-link to="/login" v-else>去登陆</router-link>
    <p></p>
    <hr />
    <router-link tag="li" to="/money">余额</router-link>
    <router-link tag="li" to="/card">卡劵页</router-link>
    <p>{{ name }}</p>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Center',
  data () {
    let userInfo = window.localStorage.getItem('userInfo')
    return {
      userInfo: userInfo ? JSON.parse(window.localStorage.getItem('userInfo')) : {}
    }
  },
  computed: {
    // ...mapState('film', ['name'])
    name: {
      get () {
        return this.$store.state.film.name
      },
      set (value) {
        this.$store.commit('film/setName', value)
      }
    }
  },
  methods: {
    ...mapActions('film', ['a'])
  },
  created () {
    this.a()
    // this.$store.commit('film/setName')
    // console.log(this.$store.getters['film/msg'])
  }
}
</script>
