<template>
  <div class="talkMe">
    <div class="talkMe_container">
        <!-- 头部 -->
      <div class="title">
        <h2>联系我们</h2>
        <p>联系方式</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.talkMe {
  background: #f1f5f9;
  padding-top: 114px;
  padding-bottom: 140px;
  .talkMe_container {
    width: 1200px;
    margin: 0 auto;
    background-color: white;
    height: 600px;
    // 头部
    .title{
        position: relative;
        h2{
            font-size: 24px;
            color: #333333;
            text-align: center;
        }
        p{
            position: absolute;
            bottom: 0;
            left: 0;

        }
    }
  }
}
</style>



