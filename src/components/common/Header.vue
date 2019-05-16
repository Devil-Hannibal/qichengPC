<template>
  <div class="header" :style="{'background-color':titleBgColor}" >
    <!-- 头部内容区 -->
    <header class="header_container claerfix" :style="{'width':titleWidth+'px'}">
      <div class="logo">
        <img :src="Logo" alt>
      </div>
      <div class="job">
        <!-- 地区 -->
        <div class="list"  @mousemove="getJobList(1)">
          <div class="region">
            <div class="title">地区</div>
            <div class="title_list">
              <span>福州</span>
              <span class="iconfont iconarrow-2"></span>
            </div>
          </div>
          <!-- 触摸弹出 -->
          <div class="job_list" :class="{active:this.isJobType==1 }"  @mouseout="outJobList">
            <div class="posScale"></div>
            <ul>
              <li>上海</li>
              <li>广州</li>
              <li>北平</li>
              <li>哈尔滨</li>
            </ul>
          </div>
        </div>
        <div class="list" @mousemove="getJobList(2)">
          <div class="column">
            <div class="title">栏目</div>
            <div class="title_list" >
              <span>资讯</span>
              <span class="iconfont iconarrow-2"></span>
            </div>
          </div>
          <!-- 触摸弹出 -->
          <div class="job_list" :class="{active:this.isJobType==2 }"  @mouseout="outJobList">
            <div class="posScale"></div>
            <ul>
              <li>资讯</li>
              <li>课程</li>
              <li>题库</li>
              <li>图书</li>
            </ul>
          </div>
        </div>
        <div class="list"  @mousemove="getJobList(3)">
          <div class="project">
            <div class="title">项目</div>
            <div class="title_list">
              <span>教师</span>
              <span class="iconfont iconarrow-2"></span>
            </div>
          </div>
          <!-- 触摸弹出 -->
          <div class="job_list" :class="{active:this.isJobType==3 }"  @mouseout="outJobList">
            <div class="posScale"></div>
            <ul>
              <li @click="init">老师</li>
              <li>英语</li>
              <li>数学</li>
              <li @click="init">外语</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 搜索 -->
      <div class="search" :class="{posFloat:titleWidth==1200}">
        <span class="iconfont iconsearch pos"  :class="{pos1500:titleWidth==1500}"></span>
        <input type="text" placeholder="请输入考试类别，查看考试资讯。" :class="{input1500:titleWidth==1500}">
        <button :class="{button1500:titleWidth==1500}">搜索</button>
      </div>
      <!-- /联系电话 -->

        <div class="phone" v-show="titleWidth==1200">
          <div class="tel iconfont iconphone-on"></div>
          <div class="tel_number">
            <p>0591-88315053</p>
            <p>9:00-22:00</p>
          </div>
        </div>
    </header>
  </div>
</template>

<script>
import logo from "./../../../static/images/logo.png";

export default {
  props:{
    'titleBgColor': String, //  标题背景颜色
    'titleWidth':{          //默认宽度1200
      type:Number,
      default:()=>1200
    }
  },
  data() {
    return {
      Logo: logo, //logo背景
      isJobType: 0 //工作类型
    };
  },
  mounted(){
    this.init()
  },
  methods: {
    //   进入触摸弹出列表
    getJobList(Num) {
      this.isJobType = Num;
    },
    outJobList(){
      this.isJobType = 0;
    },
    init(){
      var a =this.$store.state.count
      console.log(this.$store.state.Num)
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  padding-top: 26px;
  padding-bottom: 30px;
  
}
.header_container {
  margin: 0 auto;
  height: 70px;
  
  // logo
  .logo {
    float: left;
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
    float: left;
    display: flex;
    flex: start;
    padding-top: 26px;
    padding-bottom: 26px;
    padding-left: 16px;
    .list {
      position: relative;
      & > div {
        display: flex;
        justify-content: start;
        cursor: pointer;
      }

      .title {
        color: #666666;
        font-size: 16px;
        width: 35px;
      }
      .job_list.active {
        display: block;
      }
      .job_list {
        position: absolute;
        top: 32px;
        box-shadow: 0 0 10px #f0f0f0;
        width: 90px;
        padding: 0 10px;
        box-sizing: border-box;
        display: none;
        z-index: 99;
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
          position: absolute;
          padding: 0 10px;
          box-sizing: border-box;
          box-shadow: 0 0 10px #efefef;

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
    float:right;
    padding-top: 21px;
    padding-bottom: 10px;
    position: relative;
    .pos {
      font-size: 20px;
      position: absolute;
      z-index: 88;
      top: 30px;
      left: 10px;
      color: #d7d7d7;
    }
    .pos1500{
      color: #459df5;
    }

    // 输入框
    input {
      border: 1px solid #dddddd;
      height: 37px;
      width: 380px;
      padding-left: 40px;
      box-sizing: border-box;
    }
    .input1500{
      width: 535px;
      border:1px solid #4a90ff;
      
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
    .button1500{
      background-color:  #4a90ff;
      color: white;
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
  .posFloat{
    float: left;
  }
}
</style>


