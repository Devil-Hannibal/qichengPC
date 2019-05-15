<template>
    <div class="joinDetails">
        <div class="joinDetails_container">
             <!-- 头部 -->
      <div class="title">
        <p>职位介绍</p>
      </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.joinDetails {
  background: #f1f5f9;
  padding-top: 114px;
  padding-bottom: 140px;
  .joinDetails_container {
    width: 1200px;
    margin: 0 auto;
    background-color: white;
     // 头部
    .title {
      position: relative;
      padding: 74px 0 113px;
      border-bottom: 1px solid #eeeeee;
      p {
        position: absolute;
        bottom: 0;
        left: 0;
        background: url("./../../../static/images/blueBgc.png") no-repeat center;
        width: 222px;
        height: 80px;
        color: white;
        font-size: 18px;
        text-align: center;
        line-height: 80px;
        position: absolute;
        bottom: 15px;
        left: -20px;
      }
    }
    }
}
</style>


