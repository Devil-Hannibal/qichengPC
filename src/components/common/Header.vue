<template>
  <div class="header">
    <!-- 头部内容区 -->
    <div class="header_container">
      <div class="logo">
        <img :src="Logo" alt>
      </div>
      <div class="job">
        <!-- 地区 -->
        <div class="list" >
          <div class="region">
            <div class="title">地区</div>
            <div class="title_list"  @mousemove="getJobList(1)">
              <span>福州</span>
              <span class="iconfont icon-arrow-2"></span>
            </div>
          </div>
           <!-- 触摸弹出 -->
          <div class="job_list" :class="this.isJobType==1? 'active':'' " >
            <div class="posScale"></div>
            <ul>
              <li>上海</li>
              <li>广州</li>
              <li>北平</li>
              <li>哈尔滨</li>
            </ul>
          </div>
        </div>
        <div class="list">
          <div class="column">
            <div class="title">栏目</div>
            <div class="title_list" @mousemove="getJobList(2)">
              <span>资讯</span>
              <span class="iconfont icon-arrow-2"></span>
            </div>
          </div>
          <!-- 触摸弹出 -->
          <div class="job_list" :class="this.isJobType==2? 'active':'' " > 
            <div class="posScale"></div>
            <ul>
              <li>资讯</li>
              <li>课程</li>
              <li>题库</li>
              <li>图书</li>
            </ul>
          </div>
        </div>
        <div class="list">
          <div class="project">
            <div class="title">项目</div>
            <div class="title_list" @mousemove="getJobList(3)">
              <span>教师</span>
              <span class="iconfont icon-arrow-2"></span>
            </div>
          </div>
           <!-- 触摸弹出 -->
          <div class="job_list" :class="this.isJobType==3? 'active':'' " >
            <div class="posScale"></div>
            <ul>
              <li>老师</li>
              <li>英语</li>
              <li>数学</li>
              <li>外语</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 搜索 -->
      <div class="search">
        <span class="iconfont icon-fangdajing pos"></span>
        <input type="text" placeholder="请输入考试类别，查看考试资讯。">
        <button>搜索</button>
      </div>
      <!-- /联系电话 -->
      <div class="phone">
        <div class="tel iconfont icon-phoneon"></div>
        <div class="tel_number">
          <p>0591-88315053</p>
          <p>9:00-22:00</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "./../../../static/images/logo.png";

export default {
  data() {
    return {
      Logo: logo ,//logo背景
      isJobType:0,//工作类型

    };
  },
  methods:{
    //   进入触摸弹出列表
      getJobList(Num){
          this.isJobType=Num
         
      },
  }
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: auto;
}
.header_container {
  display: flex;
  justify-content: start;
  width: 1200px;
  margin: 0 auto;
  padding-top: 26px;
  padding-bottom: 35px;
  // logo
  .logo {
    width: 185px;
    height: 70px;
    margin: auto 0;
    img {
      width: 100%;
      height: 70px;
    }
  }
  // 分类区
  .job {
    display: flex;
    flex: start;
    padding-top: 26px;
    padding-bottom: 26px;
    padding-left: 16px;
    .list {
      &>div {
        display: flex;
        justify-content: start;
        position: relative;
        cursor:pointer;
      }

      .title {
        color: #666666;
        font-size: 16px;
        width: 35px;
      }
      .job_list.active{
          display: block;
      }
      .job_list {
        position: absolute;
        top: 83px;
        box-shadow: 0 0 10px #f0f0f0;
        width: 90px;
        padding: 0 10px;
        box-sizing: border-box;
        display: none;
        .posScale {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          height: 10px;
          background-color: white;
          width: 10px;
          
        }
        ul {
            width: 100%;
            background-color: #fff;
            
          li {
            border-bottom: 1px solid #dddddd;
            font-size: 16px;
            line-height: 36px;
            color: #333333;
            
            &:last-child {
              border: none;
            }
          }
        }
      }
      & div:last-child {
        color: #333333;
        font-size: 16px;
        padding-left: 8px;
        & span:last-child {
          color: #dddddd;
          font-size: 12px;
          padding-left: 10px;
          padding-right: 20px;
        }
      }
    }
  }
  // 搜索
  .search {
    padding-top: 21px;
    padding-bottom: 10px;
    position: relative;
    .pos {
      position: absolute;
      z-index: 88;
      top: 30px;
      left: 10px;
      color: #d7d7d7;
    }

    // 输入框
    input {
      border: 1px solid #dddddd;
      height: 37px;
      width: 380px;
      padding-left: 40px;
      box-sizing: border-box;
    }
    button {
      background: #eeeeee;
      outline: none;
      border: none;
      padding: 9px 25px 10px;
      position: absolute;
      top: 22px;
      right: 0;
      color: #666666;
    }
  }
  // 联系电话
  .phone {
    display: flex;
    justify-content: space-between;
    height: 40px;
    margin: auto 0;

    .tel {
      font-size: 40px;
      color: #459df5;
      margin-top: 15px;
      padding-left: 25px;
      padding-right: 20px;
    }
    .tel_number {
      line-height: 20px;
      & p:first-child {
        font-size: 24px;
        color: #459df5;
        line-height: 36px;
      }
      & p:last-child {
        color: #999999;
        font-size: 16px;
      }
    }
  }
}
</style>


