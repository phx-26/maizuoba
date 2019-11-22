<template>
  <div class="page-films">
  <!-- 二级路由页面 影片列表页 -->
    <div class="banner"></div>
    <!-- Tabe 切换 -->
    <div
      class="tabs"
      :class="{'fixed': isFixed}"
      :style="{ 'top': isFixed ? `${fixedTop}px` : 0 }"
    >
      <ul>
        <li
          :class="{'active': curFilmType === 'nowPlaying' }"
          @click="chgFilmType('nowPlaying')"
        >正在热映</li>
        <li
          :class="{'active': curFilmType === 'comingSoon' }"
          @click="chgFilmType('comingSoon')"
        >即将上映</li>
      </ul>
      <div class="active-line" :style="{'left': curFilmType === 'nowPlaying' ? '0' : '50%' }">
        <span></span>
      </div>
    </div>
    <!-- 影片列表的数据 -->
    <component :is="curFilmType" :filmType="curFilmType"/>
  </div>
</template>

<script>
import nowPlaying from '../../components/nowPlaying'
import comingSoon from '../../components/comingSoon'

export default {
  name: 'Films',
  data () {
    return {
      curFilmType: 'nowPlaying',
      isFixed: false,
      fixedTop: 0
    }
  },
  components: {
    nowPlaying,
    comingSoon
  },
  methods: {
    chgFilmType (type) {
      this.curFilmType = type
    }
  }
}
</script>

<style lang="scss">
.page-films {
  .banner {
    height: 210px;
  }
  .tabs {
    position: relative;
    position: sticky;
    top: 0;
    height: 50px;
    width: 100%;
    background: #fff;
    z-index: 999;
    ul {
      display: flex;
      align-items: center;
      height: 50px;
      li {
        flex: 1;
        text-align: center;
        cursor: pointer;
        &.active {
          color: #ff5f16;
        }
      }
    }
    .active-line {
      position: absolute;
      left: 0;
      bottom: 0;
      height:  2px;
      width: 50%;
      transition: left 0.3s;
      span {
        display: block;
        width: 56px;
        height: 2px;
        margin: auto;
        background: #ff5f16;
      }
    }
  }
}
</style>
