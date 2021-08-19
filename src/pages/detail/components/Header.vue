<template>
  <div>
    <router-link tag="div" class="header-abs" to="/" v-show="showAbs">
      <span class="iconfont header-abs-back">&#xe624;</span>
    </router-link>
    <div class="header-fixed"  v-show="!showAbs"
    :style="opacityStyle">
      景点详情
      <router-link to="/" >
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default ({
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 解绑滚动事件
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  }

})
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    line-height .8rem
    text-align center
    border-radius .4rem
    background rgba(0,0,0,.8)
    .header-abs-back
      color #fff
      font-size .4rem
  .header-fixed
    z-index 2
    position fixed
    top 0
    left 0
    right  0
    height: 0.86rem
    line-height: 0.86rem
    text-align: center
    color: #fff
    font-size: 0.32rem
    background: $bgColor
    .header-fixed-back
      position absolute
      width 0.64rem
      top 0
      left 0
      text-align center
      font-size .4rem
      color #fff
</style>
