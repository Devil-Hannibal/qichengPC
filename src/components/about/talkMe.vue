<template>
  <div class="talkMe">
    <div class="talkMe_container">
      <!-- 头部 -->
      <div class="title">
        <h2>联系我们</h2>
        <p>联系方式</p>
      </div>
      <!-- 内容区  -->
      <div class="content">
        <div class="talk_info">
          <p>福州启成教育信息咨询有限公司</p>
          <p>fuzhouqichengjiaoyuxinxizixunyouxiangongsi</p>
          <p>全国统一咨询热线：400-8453-520</p>
          <p>公司地址：中国 福建 福州市鼓楼区古田路9号广场明珠大厦11层</p>
        </div>
        <div class="tab_info">
          <ul class="tab-tilte">
            <li  @click="cur=0" :class="{active:cur==0}">微信</li>
            <li class="now"></li>
            <li @click="cur=1" :class="{active:cur==1}">小程序</li>
            <li class="now"></li>
            <li @click="cur=2" :class="{active:cur==2}">QQ</li>
          </ul>
          <div class="tab-content">
            <div v-show="cur==0">
              <ul>
                <li>
                  <div>
                    <img :src="ewm" alt="">
                  </div>
                  <div>
                    <p>扫一扫添加我们的微信</p>
                    <p>福州：wxp20140820</p>
                  </div>
                </li>
                  <li>
                  <div>
                    <img :src="ewm" alt="">
                  </div>
                  <div>
                    <p>扫一扫添加我们的微信</p>
                    <p>福州：wxp20140820</p>
                  </div>
                </li>
                  <li>
                  <div>
                    <img :src="ewm" alt="">
                  </div>
                  <div>
                    <p>扫一扫添加我们的微信</p>
                    <p>福州：wxp20140820</p>
                  </div>
                </li>
                <li>
                  <div>
                    <img :src="ewm" alt="">
                  </div>
                  <div>
                    <p>扫一扫添加我们的微信</p>
                    <p>福州：wxp20140820</p>
                  </div>
                </li>
                  <li>
                  <div>
                    <img :src="ewm" alt="">
                  </div>
                  <div>
                    <p>扫一扫添加我们的微信</p>
                    <p>福州：wxp20140820</p>
                  </div>
                </li>
                  <li>
                  <div>
                    <img :src="ewm" alt="">
                  </div>
                  <div>
                    <p>扫一扫添加我们的微信</p>
                    <p>福州：wxp20140820</p>
                  </div>
                </li>
              </ul>
            </div>
            <div v-show="cur==1">内容二</div>
            <div v-show="cur==2">内容三</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ewm from "./../../../static/images/ewm.png";
export default {
  data(){
    return{
      cur:0,
      ewm:ewm
    }
  }
};
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
    // 头部
    .title {
      position: relative;
      padding: 74px 0 113px;
      border-bottom: 1px solid #eeeeee;
      h2 {
        font-size: 24px;
        color: #333333;
        text-align: center;
      }
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
    // 内容区
    .content {
      padding: 60px;
      .talk_info {
        & p:nth-child(1) {
          font-size: 30px;
          font-weight: 400;
          color: #333333;
        }
        & p:nth-child(2) {
          font-size: 20px;
          color: #999999;
          margin-top: 20px;
        }
        & p:nth-child(3) {
          font-size: 18px;
          color: #333333;
          line-height: 30px;
          margin-top: 60px;
        }
        & p:nth-child(4) {
          font-size: 18px;
          color: #333333;
          line-height: 30px;
        }
      }
      // /tab切换
      .tab_info {
        margin-top: 50px;
        // tab头部
        .tab-tilte {
          display: flex;
          justify-content: start;
          & .active{
            background: #4187e9;
            color: white;
          }
          li:nth-child(odd){
            padding: 0 26px;
            font-size: 14px;
            height: 32px;
            line-height: 32px;
            cursor:pointer
          }
          li.now::before{
            display: block;
            content: '';
            width: 1px;
            height: 15px;
            background: #333333;
            margin: 10px 15px 0;

          }
        }
        // tab内容区
        .tab-content{
            ul{
              display: flex;
                justify-content: space-between;
              li{
                display: flex;
                justify-content: space-between;
                width: 30%;
                box-shadow: 0 0 20px #e6e6ee;
                padding: 25px 20px 30px 30px;
                flex-wrap: wrap;
                img{
                  width: 80px;
                  height: 80px;
                }
                p{
                  font-size: 16px;
                  color: #333333;
                  line-height: 27px;
                }
              }
            }
        }
      }
    }
  }
}
</style>



