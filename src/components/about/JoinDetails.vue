<template>
  <div class="joinDetails">
    <div class="joinDetails_container">
      <!-- 头部 -->
      <div class="title">
        <p>职位介绍</p>
      </div>
      <!-- 内容区  -->
      <div class="content">
        <div class="tab_info">
          <!-- 切换左侧 -->
          <div class="tab-left">
            <div v-show="joinDetails==0">
              <!-- 职位头 -->
              <div class="bor_title">
                <div class="iconfont icondian"></div>
                <div class="postName">常务副总经理</div>
                <div class="line_pos"></div>
              </div>
              <!-- 职位头的信息 -->
              <div class="bor_title_info">
                <p>
                  <span>招聘人数</span>
                  <span>1</span>
                </p>
                <p>
                  <span>工作地点:</span>
                  <span>柬埔寨</span>
                </p>
                <p>
                  <span>备注:</span>
                  <span>有工业园工作经验优先</span>
                </p>
                <p>
                  <span>发布时间：</span>
                  <span>2019-02-21</span>
                </p>
              </div>
              <!-- 职位头的信息 -->
              <div class="bor_content">
                <p>任职资格：</p>
                <p>1、企业管理、工商管理、行政管理等相关专业本科以上学历；</p>
                <p>2、接受过企业管理、财务管理、市场营销等方面的培训；</p>
                <p>3、10年以上工作经验，6年以上企业全面管理工作经验；</p>
                <p>4、熟悉企业业务和流程，在团队管理方面有极强的领导技巧和才能；</p>
                <p>5、熟悉企业行政、工程等方面的运作，有广泛的客户资源和社会资源；</p>
                <p>6、具备熟练的计算机操作能力，熟悉办公软件的应用；</p>
                <p>7、有海外工作经验者优先；</p>
                <p>8、有英语听说能力优先。</p>
              </div>
            </div>
             <div v-show="joinDetails==1">
              <!-- 职位头 -->
              <div class="bor_title">
                <div class="iconfont icondian"></div>
                <div class="postName">营销副总经理</div>
                <div class="line_pos"></div>
              </div>
              <!-- 职位头的信息 -->
              <div class="bor_title_info">
                <p>
                  <span>招聘人数</span>
                  <span>10</span>
                </p>
                <p>
                  <span>工作地点:</span>
                  <span>柬埔寨</span>
                </p>
                <p>
                  <span>备注:</span>
                  <span>有工业园工作经验优先</span>
                </p>
                <p>
                  <span>发布时间：</span>
                  <span>2019-02-21</span>
                </p>
              </div>
              <!-- 职位头的信息 -->
              <div class="bor_content">
                <p>任职资格：</p>
                <p>1、企业管理、工商管理、行政管理等相关专业本科以上学历；</p>
                <p>2、接受过企业管理、财务管理、市场营销等方面的培训；</p>
                <p>3、10年以上工作经验，6年以上企业全面管理工作经验；</p>
                <p>4、熟悉企业业务和流程，在团队管理方面有极强的领导技巧和才能；</p>
                <p>5、熟悉企业行政、工程等方面的运作，有广泛的客户资源和社会资源；</p>
                <p>6、具备熟练的计算机操作能力，熟悉办公软件的应用；</p>
                <p>7、有海外工作经验者优先；</p>
                <p>8、有英语听说能力优先。</p>
              </div>
            </div>
          </div>
          <!-- 切换右侧 -->
          <div class="tab-right">
            <!-- 职位头 -->
            <div class="right_title">
              <div class="iconfont icondian"></div>
              <div class="postName">闽东产业园</div>
              <div class="line_pos"></div>
            </div>
            <ul>
              <li @click="joinDetails=0" :class="{active:joinDetails==0}">常务副总经理</li>
              <li @click="joinDetails=1" :class="{active:joinDetails==1}">营销副总经理</li>
              <li @click="joinDetails=2" :class="{active:joinDetails==2}">生产副总经理</li>
              <li @click="joinDetails=3" :class="{active:joinDetails==3}">会计</li>
              <li @click="joinDetails=4" :class="{active:joinDetails==4}">加工副总经理</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            joinDetails:0,
        }
    }
};
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
    // 内容区域
    .content {
      display: flex;
      justify-content: space-between;
      padding: 100px;
      box-sizing: border-box;
      .tab_info {
        display: flex;
        justify-content: space-between;
        // 切换左侧部分
        .tab-left {
          width: 640px;
          .bor_title {
            display: flex;
            justify-content: start;
            position: relative;
            .icondian {
              color: #4187e9;
              line-height: 40px;
              position: absolute;
              left: -25px;
              top: -8px;
              font-size: 20px;
            }
            .postName {
              font-size: 24px;
              color: #333333;
            }
            .line_pos::before {
              content: "";
              display: block;
              width: auto;
              height: 2px;
              background: #4187e9;
              width: 470px;
              margin-left: 25px;
              margin-top: 12px;
            }
          }
          //  职位头的信xi
          .bor_title_info {
            p {
              line-height: 48px;
              font-size: 18px;
              & span:first-child {
                color: #333333;
              }
              & span:last-child {
                color: #666666;
              }
            }
          }
          // <!-- 职位头的内容 -->
          .bor_content {
            margin-top: 23px;
            p {
              font-size: 18px;
              line-height: 48px;
              color: #666666;
              &:first-child {
                background-color: #f3f7f8;
                color: #333333;
                padding: 0 15px;
              }
            }
          }
        }
        // 切换右侧部分
        .tab-right {
          width: 373px;
          padding-left: 60px;
          box-sizing: border-box;
          .right_title {
            display: flex;
            justify-content: start;
            position: relative;
            .icondian {
              color: #4187e9;
              line-height: 40px;
              position: absolute;
              left: -25px;
              top: -8px;
              font-size: 20px;
            }
            .postName {
              font-size: 24px;
              color: #333333;
            }
            .line_pos::before {
              content: "";
              display: block;
              width: auto;
              height: 2px;
              background: #4187e9;
              max-width: 475px;
              width: 134px;
              margin-left: 25px;
              margin-top: 12px;
              box-sizing: border-box;
            }
          }
          .active{
              background-color: #f3f7f8;
          }
          ul{
              margin-top: 20px;
              li{
                  font-size: 16px;
                  color: #666666;
                  padding: 0 20px;
                  line-height: 40px;
                  cursor:pointer;
              }
          }
        }
      }
    }
  }
}
</style>


