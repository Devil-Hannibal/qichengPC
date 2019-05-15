<template>
  <div class="footer">
    <div class="top">
      <div class="main">
        <p>
          <img :src="logo" alt>
        </p>
        <p>福州启成教育信息咨询有限公司</p>
        <p>主办单位：北京华夏启成教育科技有限公司</p>
        <p>承办单位：福州启成教育信息咨询有限公司</p>
      </div>
      <div class="centent">
        <img :src="ewm" alt>
      </div>
      <div class="silde">
        <ul>
          <li>
              <router-link to="/">网站首页</router-link>
          </li>
          <li class="bdr"></li>
          <li>手机端</li>
          <li class="bdr"></li>
          <li>启成优势</li>
          <li class="bdr"></li>
          <li>
              <router-link to="/my">联系我们</router-link>
          </li>
          <li class="bdr"></li>
          <li>
            <router-link to="/joinUs">联系我们</router-link>
          </li>
          <li class="bdr"></li>
          <li>网站导航</li>
          <li class="bdr"></li>
          <li>友情链接</li>
        </ul>
        <div>网站技术支持：资海科技集团福建分公司</div>
      </div>
    </div>
    <div class="bottom">Copyright Reserved 2018 福州启成教育信息咨询有限公司 版权所有 沪ICP备17043689号</div>
  </div>
</template>

<script>
import ewm from "./../../../static/images/ewm.png";
import logo from "./../../../static/images/logo.png";
export default {
  data() {
    return {
      ewm: ewm,
      logo: logo
    };
  }
};
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  background-color: #f7f9fe;
}

  .top{
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      padding: 30px 0 ;
      .main{
          p{
              font-size: 14px;
              color: #333333;
              line-height: 24px;
          }
      }
      .centent{
          margin-left: 110px;
          margin-right: 135px;
          img{
              width: 148px;
              height: 148px;
          }
      }
      .silde{
          padding-top: 58px;
          ul{   
              display: flex;
              justify-content: end;
              li{
                font-size: 12px;
                line-height: 24px;
                color: #333333;
                &:nth-child(odd){
                    padding-left: 15px;
                    padding-right: 15px;
                    
                }
                &:last-child{
                    padding-left: 15px;
                    padding-right: 0;;
                    
                }
                  &.bdr::before{
                      content: '';
                      display: block;
                      width: 1px;
                      height: 10px;
                      background-color: #97989a;
                      margin-top: 5px;
                      position: absolute;
                      
              }

              }
              
          }
          &>div{
                font-size: 12px;
                color: #999999;
                text-align: right;
                margin-top: 20px;
          }
      }
  }
  .bottom{
      background-color: #4187e9;
      font-size: 14px;
      color: white;
      line-height: 24px;
      text-align: center;
      height: 70px;
      line-height: 70px;

  }
  
</style>


