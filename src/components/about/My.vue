<template>
  <div class="my">
    <my-header :titleBgColor='titleBgc' ></my-header>
    <div class="banner">
      <img :src="banner" alt>
    </div>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Header from "./../common/Header"
import Footer from "./../common/Footer"
import Banner from "./../../../static/images/my_banner.png"

export default {
  components: {
    "my-header": Header,
    "my-footer": Footer
  },
  data() {
    return {
      banner: Banner,
      titleBgc:'white',
    }
  }
};
</script>

<style lang="less" scoped>
.my {
  overflow: hidden;
  .banner {
    width: 100%;
    height: 360px;
    img {
      width: 100%;
      height: 360px;
    }
  }
}
</style>


