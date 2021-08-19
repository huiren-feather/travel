<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="//imgs.qunarzz.com/vs_ceph_vcimg/79faa5a73731e84a7731db49d5baa91e.jpeg"
        alt
      />
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界（AAAA景区）</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe691;</span> 39
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show='showGallary'
    @close='handleGallaryClose'></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default ({
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['//imgs.qunarzz.com/vs_ceph_vcimg/79faa5a73731e84a7731db49d5baa91e.jpeg',
        '//imgs.qunarzz.com/vs_ceph_vcimg/79faa5a73731e84a7731db49d5baa91e.jpeg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
})
</script>

<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 30.47%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      line-height: 0.32rem;
      height: 0.32rem;
      margin-top: 0.14rem;
      font-size: 0.24rem;
      padding: 0 0.4rem;
      background: rgba(0, 0, 0, 0.8);

      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
