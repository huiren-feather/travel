<template>
  <div class="search">
      <input type="text" placeholder="输入城市名或拼音" class="search-input">
  </div>
</template>

<script>

export default {
  name: 'CitySearch'

}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
  .search
    height 0.72rem
    padding 0 .1rem
    background $bgColor
    .search-input
    // 不加下面这句，当字数太多时，搜索框的右边框会消失
      box-sizing border-box
      width 100%
      height 0.62rem
      padding 0 .1rem
      line-height .62rem
      text-align center
      border-radius .06rem
      color #666
</style>
