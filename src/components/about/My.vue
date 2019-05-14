<template>
  <div class="my">
    <div class="banner">
      <img :src="banner" alt>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import banner from "./../../../static/images/my_banner.png"
export default {
  data() {
    return {
      banner: banner
    }
  }
};
</script>

<style lang="less" scoped>
.my{
    overflow: hidden;
    .banner{
        img{
            width: 100%;
            height: 360px;
        }
    }
}
</style>


