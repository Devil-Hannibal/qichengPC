<template>
  <div class="qbHome">
    <!-- 头部 -->
    <my-header :titleBgColor="titleBgc" :titleWidth="TWidth"></my-header>
    <!-- 头部END -->
    <!-- 内容区域 -->
    <div class="qbHome_container">
      <aside>
        <!-- tab切换 -->
        <div class="tabNav">
          <ul>
            <li :class="{active:questionSelect==1}" @click="questionSelect=1">经济</li>
            <li :class="{active:questionSelect==2}" @click="questionSelect=2">法规</li>
            <li :class="{active:questionSelect==3}" @click="questionSelect=3">管理</li>
            <li :class="{active:questionSelect==4}" @click="questionSelect=4">建筑实务</li>
            <li :class="{active:questionSelect==5}" @click="questionSelect=5">机电实务</li>
            <li :class="{active:questionSelect==6}" @click="questionSelect=6">公路实物</li>
            <li :class="{active:questionSelect==7}" @click="questionSelect=7">市政实物</li>
            <li :class="{active:questionSelect==8}" @click="questionSelect=8">通信实物</li>
            <li :class="{active:questionSelect==9}" @click="questionSelect=9">水利实物</li>
          </ul>
        </div>
        <!-- tab切换END -->
        <!-- tab切换内容 -->
        <ul class="tabContent">
          <li class="itemTab" v-show="questionSelect==1">
            <!-- 练习数据 -->
            <div class="tab_test">
              <div class="again">
                <p class="iconfont iconzhongxinsheji"></p>
                <p>继续上一次的练习</p>
              </div>
              <ul class="right_question">
                <li>
                  <p>
                    <span>0</span>
                    <span>%</span>
                  </p>
                  <p>我的正确率</p>
                </li>
                <li class="line"></li>
                <li>
                  <p>
                    <span>0</span>
                    <span>道</span>
                  </p>
                  <p>正确题数</p>
                </li>
                <li class="line"></li>
                <li>
                  <p>
                    <span>0</span>
                    <span>道</span>
                  </p>
                  <p>错误题数</p>
                </li>
                <li class="line"></li>
                <li>
                  <p>
                    <span>0</span>
                    <span>道</span>
                  </p>
                  <p>总题量</p>
                </li>
              </ul>
            </div>
            <!-- 章节精炼样式 -->
            <div class="tab_refine">
              <div class="title">
                <span class="iconfont iconshuxian"></span>
                <span>章节精炼</span>
                <span>快速智能做题</span>
                <span class="iconfont iconmendian-"></span>
              </div>
              <div class="content">
                <el-table :data="tableData" style="width: 100%" height="200">
                  <el-table-column prop="name" label="目录" width="620">
                    <template slot-scope="scope">
                      <i class="iconfont iconarrow posIcon"></i>
                      <span style="margin-left: 10px">{{ scope.row.name }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column prop="province" label="做题进度" width="125">
                    <template slot-scope="scope">
                      <span>{{ scope.row.ageNum }}</span>
                      <span>/</span>
                      <span>{{ scope.row.total }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column prop="city" label="完成度" width="117">
                    <template slot-scope="scope">
                      <span>{{ scope.row.ageNum }}</span>
                      <span>%</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作" width="100">
                    <span class="iconfont iconqianbi" @click="init"></span>
                  </el-table-column>
                </el-table>
              </div>
            </div>
            <!-- 题的列表 -->
            <div class="questionList">
              <div class="questionList_tab">
                <div class="title">
                  <div :class="{active:questionList==1}" @click="questionList=1">历年真题</div>
                  <div :class="{active:questionList==2}" @click="questionList=2">模拟考试</div>
                </div>
                <div class="content">
                  <ul v-show="questionList==1">
                    <li class="item">
                      <div class="box">
                        <p :style="{backgroundImage: 'url(' + bg1 + ')' }">开始做题</p>
                        <p>2015年</p>
                        <p>
                          <span>一级建造师</span>
                          <span>建设工程</span>
                        </p>
                        <p>
                          <span>经济</span>
                          <span>真题</span>
                        </p>
                        <p>
                          总分
                          <span>222</span>分，
                          <span>90</span>道试题
                        </p>
                      </div>
                      <!-- 遮罩 -->
                      <div class="zhezhao iconfont iconsuotoucopy" v-show="lock"></div>
                    </li>
                    <li class="item">
                      <div class="box">
                        <p :style="{backgroundImage: 'url(' + bg1 + ')' }">开始做题</p>
                        <p>2015年</p>
                        <p>
                          <span>一级建造师</span>
                          <span>建设工程</span>
                        </p>
                        <p>
                          <span>经济</span>
                          <span>真题</span>
                        </p>
                        <p>
                          总分
                          <span>222</span>分，
                          <span>90</span>道试题
                        </p>
                      </div>
                      <!-- 遮罩 -->
                      <div class="zhezhao iconfont iconsuotoucopy" v-show="lock==false"></div>
                    </li>
                    <li class="item">
                      <div class="box">
                        <p :style="{backgroundImage: 'url(' + bg1 + ')' }">开始做题</p>
                        <p>2015年</p>
                        <p>
                          <span>一级建造师</span>
                          <span>建设工程</span>
                        </p>
                        <p>
                          <span>经济</span>
                          <span>真题</span>
                        </p>
                        <p>
                          总分
                          <span>222</span>分，
                          <span>90</span>道试题
                        </p>
                      </div>
                      <!-- 遮罩 -->
                      <div class="zhezhao iconfont iconsuotoucopy" v-show="lock==true"></div>
                    </li>
                    <li class="item">
                      <div class="box">
                        <p :style="{backgroundImage: 'url(' + bg1 + ')' }">开始做题</p>
                        <p>2015年</p>
                        <p>
                          <span>一级建造师</span>
                          <span>建设工程</span>
                        </p>
                        <p>
                          <span>经济</span>
                          <span>真题</span>
                        </p>
                        <p>
                          总分
                          <span>222</span>分，
                          <span>90</span>道试题
                        </p>
                      </div>
                      <!-- 遮罩 -->
                      <div class="zhezhao iconfont iconsuotoucopy" v-show="lock==false"></div>
                    </li>
                    <li class="item">
                      <div class="box">
                        <p :style="{backgroundImage: 'url(' + bg1 + ')' }">开始做题</p>
                        <p>2015年</p>
                        <p>
                          <span>一级建造师</span>
                          <span>建设工程</span>
                        </p>
                        <p>
                          <span>经济</span>
                          <span>真题</span>
                        </p>
                        <p>
                          总分
                          <span>222</span>分，
                          <span>90</span>道试题
                        </p>
                      </div>
                      <!-- 遮罩 -->
                      <div class="zhezhao iconfont iconsuotoucopy" v-show="lock==false"></div>
                    </li>
                    <li class="item">
                      <div class="box">
                        <p :style="{backgroundImage: 'url(' + bg1 + ')' }">开始做题</p>
                        <p>2015年</p>
                        <p>
                          <span>一级建造师</span>
                          <span>建设工程</span>
                        </p>
                        <p>
                          <span>经济</span>
                          <span>真题</span>
                        </p>
                        <p>
                          总分
                          <span>222</span>分，
                          <span>90</span>道试题
                        </p>
                      </div>
                      <!-- 遮罩 -->
                      <div class="zhezhao iconfont iconsuotoucopy" v-show="lock==false"></div>
                    </li>
                    <li class="item">
                      <div class="box">
                        <p :style="{backgroundImage: 'url(' + bg1 + ')' }">开始做题</p>
                        <p>2015年</p>
                        <p>
                          <span>一级建造师</span>
                          <span>建设工程</span>
                        </p>
                        <p>
                          <span>经济</span>
                          <span>真题</span>
                        </p>
                        <p>
                          总分
                          <span>222</span>分，
                          <span>90</span>道试题
                        </p>
                      </div>
                      <!-- 遮罩 -->
                      <div class="zhezhao iconfont iconsuotoucopy" v-show="lock==false"></div>
                    </li>
                    <li class="item">
                      <div class="box">
                        <p :style="{backgroundImage: 'url(' + bg1 + ')' }">开始做题</p>
                        <p>2015年</p>
                        <p>
                          <span>一级建造师</span>
                          <span>建设工程</span>
                        </p>
                        <p>
                          <span>经济</span>
                          <span>真题</span>
                        </p>
                        <p>
                          总分
                          <span>222</span>分，
                          <span>90</span>道试题
                        </p>
                      </div>
                      <!-- 遮罩 -->
                      <div class="zhezhao iconfont iconsuotoucopy" v-show="lock==false"></div>
                    </li>
                  </ul>
                </div>
              </div>

              <el-pagination layout="prev, pager, next" :total="50" :page-size="9" prev-text="上一页" next-text="下一页"></el-pagination>
            </div>
          </li>
        </ul>
        <!-- tab切换内容END -->
      </aside>
      <main></main>
    </div>
    <!-- 内容区域END -->

    <!-- 通用尾部 -->
    <my-footer></my-footer>
    <!-- 通用尾部END -->
  </div>
</template>

<script>
import Header from "./../common/Header";
import Footer from "./../common/Footer";
import bg1 from "./../../../static/images/111.png";

export default {
  name: "qbHome",
  components: {
    "my-header": Header,
    "my-footer": Footer
  },
  data() {
    return {
      bg1,
      lock: true, //答题锁
      titleBgc: "#f1f5f9", //头部的背景颜色
      TWidth: 1555, ///头部的宽度
      questionSelect: 1, //题库tab默认为1
      questionList: 1, //题切换
      tableData: [
        {
          name: "1Z101000  工程经济",
          total: 618,
          ageNum: 50,
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          name: "1Z101000  工程经济",
          total: 618,
          ageNum: 50,
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          name: "1Z101000  工程经济",
          total: 618,
          ageNum: 50,
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          name: "1Z101000  工程经济",
          total: 618,
          ageNum: 50,
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          name: "1Z101000  工程经济",
          total: 618,
          ageNum: 50,
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    init() {
      alert("暂未完成");
    }
  }
};
</script>

<style lang="less" scoped>
.qbHome {
  width: 100%;
  background-color: #f1f5f9;
  
  .qbHome_container {
    width: 1555px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-bottom: 130px;
    // 左侧内容
    aside {
      width: 1000px;
      // tab切换
      .tabNav {
        background-color: #fafbfc;
        padding: 19px 17px;
        border: 1px solid #d8e1e6;
        ul {
          display: flex;
          justify-content: space-between;
          li {
            font-size: 18px;
            height: 40px;
            line-height: 40px;
            background-color: #fafbfc;
            border-radius: 5px;
            padding: 0 23px;
            color: #999999;
            cursor: pointer;
            &.active {
              background-color: #4187e9;
              color: white;
            }
          }
        }
      }
      //   tab内容区
      .tabContent {
        padding-top: 20px;
        //  每一项的配置
        .itemTab {
          .tab_test {
            display: flex;
            justify-content: space-between;

            .again {
              color: #333333;
              width: 190px;
              background-color: #fff;
              text-align: center;
              cursor: pointer;
              &:hover {
                color: #4187e9;
              }
              .iconzhongxinsheji {
                font-size: 100px;
                margin-top: 33px;
              }
              p {
                font-size: 14px;
                margin-top: 45px;
              }
            }
            // 右侧
            .right_question {
              display: flex;
              justify-content: start;
              background-color: white;
              .line {
                display: block;
                content: "";
                width: 1px;
                height: 100px;
                background-color: #dddddd;
                margin-top: 20px;
              }
              li {
                width: 200px;
                height: 140px;
                text-align: center;
                box-sizing: border-box;
                padding-top: 53px;
                padding-bottom: 30px;
                cursor: pointer;
                color: #333333;
                &:hover {
                  color: #4187e9;
                }
                p {
                  font-size: 14px;
                  &:first-child {
                    padding-bottom: 20px;
                    span {
                      font-size: 14px;

                      &:first-child {
                        font-size: 24px;
                      }
                    }
                  }
                }
              }
            }
          }
          //   章节精炼样式
          .tab_refine {
            margin-top: 20px;
            background-color: #fff;
            padding: 0 16px 28px;
            .posIcon {
              color: #4187e9;
              font-size: 12px;
            }
            .iconqianbi {
              color: #4a90ff;
            }
            .title {
              border-bottom: 1px solid #eeeeee;
              padding-left: 7px;
              padding-top: 10px;
              padding-bottom: 10px;
              span {
                font-size: 20px;
                &:first-child {
                  color: #4a90ff;
                }
                &:nth-child(2) {
                  color: #333333;
                  font-size: 20px;
                }
                &:nth-child(3) {
                  color: white;
                  font-size: 18px;
                  background-color: #4a90ff;
                  padding: 0 30px;
                  height: 36px;
                  line-height: 36px;
                  border-radius: 20px;
                  display: inline-block;
                  margin-left: 600px;
                }
                &:nth-child(4) {
                  margin-left: 30px;
                  color: #b3b3b3;
                }
              }
            }
          }
          //   题的列表
          .questionList {
            background-color: white;
            margin-top: 20px;
            padding-bottom: 30px;
            .title {
              display: flex;
              justify-content: start;
              font-size: 20px;
              color: #333333;
              line-height: 70px;
              height: 70px;
              padding-right: 20px;
              border-bottom: 1px solid #eeeeee;
              padding: 0 40px;

              & > div {
                margin-right: 40px;
                cursor: pointer;
                &.active {
                  color: #4187e9;
                  border-bottom: 3px solid #4187e9;
                  border-top-left-radius: 3px;
                  border-top-right-radius: 3px;
                  border-bottom-left-radius: 3px;
                  border-bottom-right-radius: 3px;
                }
              }
            }
            // 内容
            .content {
              padding: 30px 40px;
              ul {
                display: flex;
                justify-content: start;
                flex-wrap: wrap;
                .item {
                  width: 25%;
                  padding-right: 15px;
                  box-sizing: border-box;
                  position: relative;
                  &:nth-child(4n) {
                    padding-right: 0;
                  }
                  &:nth-child(n + 5) {
                    margin-top: 20px;
                  }
                  // 内容盒子
                  .box {
                    border: 6px solid #f1f5f9;
                    border-radius: 5px;
                    position: relative;
                    padding: 100px 0 38px;
                    p {
                      font-size: 16px;
                      color: #333333;
                      text-align: center;
                    }
                    p:first-child {
                      position: absolute;
                      top: -6px;
                      right: 20px;
                      background-repeat: no-repeat;
                      width: 46px;
                      height: 83px;
                      padding: 15px 9px;
                      box-sizing: border-box;
                      color: #4a90ff;
                      font-size: 14px;
                    }
                    p:nth-child(3),
                    p:nth-child(4) {
                      margin-top: 15px;
                    }
                    p:nth-child(5) {
                      margin-top: 25px;
                      color: #999999;
                    }
                  }
                  // 遮罩
                  .zhezhao {
                    width: 120px;
                    height: 120px;
                    background: #000;
                    opacity: 0.4;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    border-radius: 50%;
                    font-size: 90px;
                    color: white;
                    line-height: 120px;
                    text-align: center;
                  }
                }
              }
            }
          }
        }
      }
    }
    //右侧内容
    main {
    }
  }
}
</style>


