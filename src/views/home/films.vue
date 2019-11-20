<template>
  <div class="page-films">
<!-- 二级路由页面 影片列表页 -->
    <h1>影片列表</h1>
    <ul>
      <li v-for="item in filmList" :key="item.filmId">{{ item.filmName }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Films',
  computed: {
    ...mapState('film', ['filmList'])
  },
  methods: {
    ...mapActions('film', ['getFilmList']),
    ...mapActions('cinema', ['getCinemaList'])
  },
  created () {
    // this.$store.dispatch('film/getFilmList')
    this.getFilmList()
  }
}
</script>
