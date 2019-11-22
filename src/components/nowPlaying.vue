<template>
  <div class="film-list">
    <!-- 正在热映 -->
    <ul>
      <router-link
        tag="li"
        v-for="film in filmList"
        :key="film.filmId"
        :to="`/film/${film.filmId}`"
      >
        <div class="left">
          <img :src="film.poster" alt="">
        </div>
        <div class="center">
          <div class="name">
            <span>{{ film.name }}</span>
            <span class="item">{{ film.timeType }}D</span>
          </div>
          <div
            class="grade"
            :style="{visibility: film.grade ? 'initial' : 'hidden'}"
          >
            <span class="gradee">观众评分：</span>
            <span class="label">{{ film.grade }}</span>
          </div>
          <div class="actors">
            <span>主演：{{ formatActors(film.actors) }}</span>
          </div>
          <div class="detail">
            <span>{{ film.nation }} | {{ film.runtime}}分钟</span>
          </div>
        </div>
        <div class="right" v-if="filmType === 'nowPlaying'">
          购票
        </div>
        <div class="right" v-if="filmType === 'comingSoon'">
          预购
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'FilmList',
  props: {
    // filmList: {
    //   type: Array,
    //   default: () => []
    // },
    filmType: {
      type: String,
      required: true,
      validator (value) {
        return ['nowPlaying', 'comingSoon'].indexOf(value) > -1
      }
    }
  },
  computed: {
    ...mapState('film', ['filmList'])
  },
  methods: {
    ...mapActions('film', ['getFilmList']),
    formatActors (actors) {
      if (!actors) {
        return '暂无主演'
      }
      let tmp = actors.map(item => {
        return item.name
      })
      return tmp.join('、')
    }
  },
  created () {
    this.getFilmList()
    console.log(this.props)
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/common/mixins.scss';
.film-list {
  ul {
    margin-left: 15px;
  }
  li {
    @include border-bottom;
    display: flex;
    height: 94px;
    padding: 15px 15px 15px 0;
    overflow: hidden;
    align-items: center;
    .left {
      width: 66px;
      flex-shrink: 0;
      img {
        width: 100%;
      }
    }
    .right {
      @include border;
      line-height: 25px;
      height: 25px;
      width: 50px;
      color: #ff5f16;
      font-size: 13px;
      text-align: center;
      border-radius: 2px;
      position: relative;
      float: right;
    }
    .center {
      width: calc(100% - 116px);
      padding: 0 10px;
      .name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        span {
          max-width: calc(100% - 25px);
          color: #191a1b;
          font-size: 16px;
          height: 22px;
          line-height: 22px;
          margin-right: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: inline-block;
          vertical-align: middle;
        }
        .item {
          font-size: 9px;
          color: #fff;
          background-color: #d2d6dc;
          height: 14px;
          line-height: 14px;
          padding: 0 2px;
          border-radius: 2px;
        }
      }
      .grade {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        .gradee {
          font-size: 13px;
          margin-top: 4px;
          color: #797d82;
        }
        .label {
          color: #ffb232;
          font-size: 14px;
        }
      }
      .actors {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        span {
          font-size: 13px;
          margin-top: 4px;
          color: #797d82;
        }
      }
      .detail {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        span {
          font-size: 13px;
          margin-top: 4px;
          color: #797d82;
        }
      }
    }
    &:last-child::after {
      display: none;
    }
  }
}
</style>
