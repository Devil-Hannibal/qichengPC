<template>
  <div class="join">
    <div class="join_container">
      <!-- 头部 -->
      <div class="title">
        <p>诚聘英才</p>
      </div>
      <!-- 内容区  -->
      <div class="content">
        <div class="tab_info">
          <ul class="tab-tilte">
            <li @click="joinUs=0" :class="{active:joinUs==0}">福州启程</li>
            <li @click="joinUs=1" :class="{active:joinUs==1}">北京启程</li>
          </ul>
          <div class="tab-content">
            <div v-show="joinUs==0">
              <ul>
                <li>
                  <div class="info">
                    <div>常务副总经理</div>
                    <div>闽东产业园</div>
                    <div>柬埔寨</div>
                    <div>02-21</div>
                  </div>
                  <div class="details">
                      <div class="details_info">
                          任职要求：1、企业管理、工商管理、行政管理等相关专业本科以上学历；2、接受过企业管理、财务管理、市场营销等方面的培训；3、10年以上工作经验，6年以上企业全面管理工作经验；4、熟悉企业业务和流程，在团队管理方面有极强的领导技巧和才能；5、熟悉企业行政、工程等方面的运作，有广泛的客户资源和社会资源；6、具备熟练的计算机操作能力，熟悉办公软件的应用；7、有海外工作经验者优先；8、有英语听说能力优先
                      </div>
                      <button class="btn" @click="getJoinUsDetails">MORE</button>
                  </div>
                </li>
                 <li>
                  <div class="info">
                    <div>常务副总经理</div>
                    <div>闽东产业园</div>
                    <div>柬埔寨</div>
                    <div>02-21</div>
                  </div>
                  <div class="details">
                      <div class="details_info">
                          任职要求：1、企业管理、工商管理、行政管理等相关专业本科以上学历；2、接受过企业管理、财务管理、市场营销等方面的培训；3、10年以上工作经验，6年以上企业全面管理工作经验；4、熟悉企业业务和流程，在团队管理方面有极强的领导技巧和才能；5、熟悉企业行政、工程等方面的运作，有广泛的客户资源和社会资源；6、具备熟练的计算机操作能力，熟悉办公软件的应用；7、有海外工作经验者优先；8、有英语听说能力优先
                      </div>
                      <button class="btn">MORE</button>
                  </div>
                </li>
                 <li>
                  <div class="info">
                    <div>常务副总经理</div>
                    <div>闽东产业园</div>
                    <div>柬埔寨</div>
                    <div>02-21</div>
                  </div>
                  <div class="details">
                      <div class="details_info">
                          任职要求：1、企业管理、工商管理、行政管理等相关专业本科以上学历；2、接受过企业管理、财务管理、市场营销等方面的培训；3、10年以上工作经验，6年以上企业全面管理工作经验；4、熟悉企业业务和流程，在团队管理方面有极强的领导技巧和才能；5、熟悉企业行政、工程等方面的运作，有广泛的客户资源和社会资源；6、具备熟练的计算机操作能力，熟悉办公软件的应用；7、有海外工作经验者优先；8、有英语听说能力优先
                      </div>
                      <button class="btn">MORE</button>
                  </div>
                </li>
                 <li>
                  <div class="info">
                    <div>常务副总经理</div>
                    <div>闽东产业园</div>
                    <div>柬埔寨</div>
                    <div>02-21</div>
                  </div>
                  <div class="details">
                      <div class="details_info">
                          任职要求：1、企业管理、工商管理、行政管理等相关专业本科以上学历；2、接受过企业管理、财务管理、市场营销等方面的培训；3、10年以上工作经验，6年以上企业全面管理工作经验；4、熟悉企业业务和流程，在团队管理方面有极强的领导技巧和才能；5、熟悉企业行政、工程等方面的运作，有广泛的客户资源和社会资源；6、具备熟练的计算机操作能力，熟悉办公软件的应用；7、有海外工作经验者优先；8、有英语听说能力优先
                      </div>
                      <button class="btn">MORE</button>
                  </div>
                </li>
                 <li>
                  <div class="info">
                    <div>常务副总经理</div>
                    <div>闽东产业园</div>
                    <div>柬埔寨</div>
                    <div>02-21</div>
                  </div>
                  <div class="details">
                      <div class="details_info">
                          任职要求：1、企业管理、工商管理、行政管理等相关专业本科以上学历；2、接受过企业管理、财务管理、市场营销等方面的培训；3、10年以上工作经验，6年以上企业全面管理工作经验；4、熟悉企业业务和流程，在团队管理方面有极强的领导技巧和才能；5、熟悉企业行政、工程等方面的运作，有广泛的客户资源和社会资源；6、具备熟练的计算机操作能力，熟悉办公软件的应用；7、有海外工作经验者优先；8、有英语听说能力优先
                      </div>
                      <button class="btn">MORE</button>
                  </div>
                </li>
              </ul>
            </div>
             <div v-show="joinUs==1">
              <ul>
                <li>
                  <div class="info">
                    <div>常务总经理</div>
                    <div>闽东产业园</div>
                    <div>柬埔寨</div>
                    <div>02-21</div>
                  </div>
                  <div class="details">
                      <div class="details_info">
                          任职要求：1、企业管理、工商管理、行政管理等相关专业本科以上学历；2、接受过企业管理、财务管理、市场营销等方面的培训；3、10年以上工作经验，6年以上企业全面管理工作经验；4、熟悉企业业务和流程，在团队管理方面有极强的领导技巧和才能；5、熟悉企业行政、工程等方面的运作，有广泛的客户资源和社会资源；6、具备熟练的计算机操作能力，熟悉办公软件的应用；7、有海外工作经验者优先；8、有英语听说能力优先
                      </div>
                      <button class="btn" @click="getJoinUsDetails">MORE</button>
                  </div>
                </li>
                 <li>
                  <div class="info">
                    <div>常务副总经理</div>
                    <div>闽东产业园</div>
                    <div>柬埔寨</div>
                    <div>02-21</div>
                  </div>
                  <div class="details">
                      <div class="details_info">
                          任职要求：1、企业管理、工商管理、行政管理等相关专业本科以上学历；2、接受过企业管理、财务管理、市场营销等方面的培训；3、10年以上工作经验，6年以上企业全面管理工作经验；4、熟悉企业业务和流程，在团队管理方面有极强的领导技巧和才能；5、熟悉企业行政、工程等方面的运作，有广泛的客户资源和社会资源；6、具备熟练的计算机操作能力，熟悉办公软件的应用；7、有海外工作经验者优先；8、有英语听说能力优先
                      </div>
                      <button class="btn">MORE</button>
                  </div>
                </li>
                 <li>
                  <div class="info">
                    <div>常务副总经理</div>
                    <div>闽东产业园</div>
                    <div>柬埔寨</div>
                    <div>02-21</div>
                  </div>
                  <div class="details">
                      <div class="details_info">
                          任职要求：1、企业管理、工商管理、行政管理等相关专业本科以上学历；2、接受过企业管理、财务管理、市场营销等方面的培训；3、10年以上工作经验，6年以上企业全面管理工作经验；4、熟悉企业业务和流程，在团队管理方面有极强的领导技巧和才能；5、熟悉企业行政、工程等方面的运作，有广泛的客户资源和社会资源；6、具备熟练的计算机操作能力，熟悉办公软件的应用；7、有海外工作经验者优先；8、有英语听说能力优先
                      </div>
                      <button class="btn">MORE</button>
                  </div>
                </li>
                 <li>
                  <div class="info">
                    <div>常务副总经理</div>
                    <div>闽东产业园</div>
                    <div>柬埔寨</div>
                    <div>02-21</div>
                  </div>
                  <div class="details">
                      <div class="details_info">
                          任职要求：1、企业管理、工商管理、行政管理等相关专业本科以上学历；2、接受过企业管理、财务管理、市场营销等方面的培训；3、10年以上工作经验，6年以上企业全面管理工作经验；4、熟悉企业业务和流程，在团队管理方面有极强的领导技巧和才能；5、熟悉企业行政、工程等方面的运作，有广泛的客户资源和社会资源；6、具备熟练的计算机操作能力，熟悉办公软件的应用；7、有海外工作经验者优先；8、有英语听说能力优先
                      </div>
                      <button class="btn">MORE</button>
                  </div>
                </li>
                 <li>
                  <div class="info">
                    <div>常务副总经理</div>
                    <div>闽东产业园</div>
                    <div>柬埔寨</div>
                    <div>02-21</div>
                  </div>
                  <div class="details">
                      <div class="details_info">
                          任职要求：1、企业管理、工商管理、行政管理等相关专业本科以上学历；2、接受过企业管理、财务管理、市场营销等方面的培训；3、10年以上工作经验，6年以上企业全面管理工作经验；4、熟悉企业业务和流程，在团队管理方面有极强的领导技巧和才能；5、熟悉企业行政、工程等方面的运作，有广泛的客户资源和社会资源；6、具备熟练的计算机操作能力，熟悉办公软件的应用；7、有海外工作经验者优先；8、有英语听说能力优先
                      </div>
                      <button class="btn">MORE</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      joinUs: 0
    };
  },
  mounted(){

  },
  methods:{
    //   跳转招聘详情
      getJoinUsDetails(){
          this.$router.push({
              path:'/joinDetails'
          })
      }
  }
};
</script>

<style lang="less" scoped>
.join {
  background: #f1f5f9;
  padding-top: 114px;
  padding-bottom: 140px;
  .join_container {
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
    // // 内容区
    .content {
      padding-top: 50px;
      padding-right: 122px;
      padding-left: 112px;
      padding-bottom: 200px;

      // /tab切换
      .tab_info {
        // tab头部
        .tab-tilte {
          display: flex;
          justify-content: start;
          & .active {
            background: #e84284;
            color: white;
          }
          li {
            padding: 0 40px;
            margin-right: 40px;
            font-size: 18px;
            height: 50px;
            line-height: 50px;
            cursor: pointer;
          }
        }
        // tab内容区
        .tab-content {
          margin-top: 45px;
          ul {
            display: flex;
            justify-content: space-between;
            width: 100%;
            flex-wrap: wrap;
            li {
                width: 100%;
                padding-bottom: 65px;
              .info {
                display: flex;
                justify-content: start;
                font-size: 16px;
                color: #333333;
                position: relative;
                width: 100%;
               &>div{
                   padding: 0 60px;
                   &:first-child{
                       padding-left: 0;

                   }
                   &:last-child{
                    position: absolute;
                    right: 0;

                    padding: 0;
                       
                   }
               }

              }
              .details{
                display: flex;
                justify-content: space-between;
                margin-top: 25px;
                .details_info{
                    font-size: 14px;
                    color: #666666;
                    line-height: 24px;
                }
                .btn{
                    outline: none;
                    background: #4a90ff;
                    color: white;
                    padding: 0 27px;
                    height: 36px;
                    line-height: 36px;
                    border: none;
                    margin-top: 20px;
                    margin-left: 110px;
                    cursor:pointer;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>


