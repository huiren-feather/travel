<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-imgcontent" :src="item.imgUrl" alt />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [
        {
          id: '0001',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '热门景点'
        },
        {
          id: '0002',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '滑雪季1111111wwwwwww'
        },
        {
          id: '0003',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '滑雪季aaaaaaaaaaaaaa'
        },
        {
          id: '0004',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '滑雪季'
        },
        {
          id: '0005',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '滑雪季'
        },
        {
          id: '0006',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '滑雪季'
        },
        {
          id: '0007',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '滑雪季'
        },
        {
          id: '0008',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '滑雪季'
        },
        {
          id: '0009',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '滑雪季'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';
.icons {
  overflow: hidden;

  .swiper-container {
    height: 0;
    padding-bottom: 50%;
  }

  .icon {
    position: relative;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      .icon-imgcontent {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }

    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: $darkTextColor;
      ellipsis()
    }
  }
}
</style>
