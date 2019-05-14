<template>
  <div class="helloWord">
      <!-- 头部 -->
      <my-header ></my-header>
      <!-- 内容渲染 -->
      <router-view></router-view>
      <!-- 尾部 -->
      <my-footer></my-footer>
  </div>
</template>

<script>
import Header from './common/Header'
import Footer from './common/Footer'
export default {
  components:{
    "my-header":Header,
    "my-footer":Footer,
  },
  data(){
    return{}
  },
}
</script>

<style lang="less" scoped>
</style>


