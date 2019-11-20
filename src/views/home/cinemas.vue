<template>
  <div class="page-cinemas">
<!-- 二级路由页面 影院列表页 -->
    <h1>影院列表</h1>
    <ul>
      <li v-for="item in cinema.cinemaList" :key="item.cinId">{{ item.cinName }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Cinemas',
  computed: {
    ...mapState(['cinema'])
  },
  created () {
    this.$store.dispatch('cinema/getCinemaList')
  }
}
</script>
