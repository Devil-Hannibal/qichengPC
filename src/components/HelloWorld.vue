<template>
    <div class="HelloWord">
        <!--<my-header class="header" style="display: block"></my-header>-->
        <!-- 头部-->
        <div class="header" style="display: block">
            <!-- 头部内容区 -->
            <div class="header_container">
                <div class="logo">
                    <img :src="logo0" alt>
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
        <!-- 头部 结束-->
        <!--导航-->
        <div class="header_nav" style="display: block">
            <div>
                <div>
                    <p class="iconfont iconcaidan"></p>
                    <p>考试导航</p>
                    <div class="nav_content">
                        <ul class="nav_item">
                            <li>教师</li>
                            <li></li>
                            <li class="nav_item_content">
                                <div>教师资格</div>
                                <div>教师荣誉</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!--导航 结束-->

        <!-- 轮播 -->
        <div class="swiper-container swiper-container-initialized swiper-container-vertical" ref="swiper_wrapper" style="height:300px;width:100%;"><!--style="height:300px;"-->
            <div class="swiper-wrapper" style="height:100%;width:100%;transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
                <div class="swiper-slide" style="height: 100%;width:100%;position: relative;" id="1">
                    <img class="swiper_Img" :src="bannerImg1" alt="" style="width:100%;height:100%;">
                    <!--嵌套banner-->
                    <!--<div class="swiper-container0 swiper-container-initialized swiper-container-horizontal">
                        <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-1080px, 0px, 0px);">
                            <div class="swiper-slide" style="width: 1080px;"><img class="swiper_Img" :src="bannerImg1" alt="" style="width:100%;height:100%;"></div>
                            <div class="swiper-slide" style="width: 1080px;"><img class="swiper_Img" :src="bannerImg2" alt="" style="width:100%;height:100%;"></div>
                            <div class="swiper-slide" style="width: 1080px;"><img class="swiper_Img" :src="bannerImg3" alt="" style="width:100%;height:100%;"></div>
                            <div class="swiper-slide" style="width: 1080px;"><img class="swiper_Img" :src="bannerImg4" alt="" style="width:100%;height:100%;"></div>
                        </div>
                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                    </div>-->
                    <!--嵌套banner 结束-->
                    <!--&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
                </div>
                <div class="swiper-slide" style="height: 100%;width:100%;position: relative;" id="2">
                    <img class="swiper_Img" :src="bannerImg2" alt="" style="width:100%;height:100%;">
                    <p style="width: 100%;height:100%;position:absolute;top:0;left:0;z-index: 999;background: rgba(225,225,225,.6);color:#333;display: flex;justify-content: center;align-items : center;font-size:48px;">口碑好，通过率高</p>
                </div>
                <div class="swiper-slide" style="height: 100%;width:100%;position: relative;" id="3">
                    <img class="swiper_Img" :src="bannerImg3" alt="" style="width:100%;height:100%;">
                    <p style="width: 100%;height:100%;position:absolute;top:0;left:0;z-index: 999;background: rgba(225,225,225,.6);color:#333;display: flex;justify-content: center;align-items : center;font-size:48px;">启发式、人性化、个性化、实战式</p>
                </div>
                <div class="swiper-slide" style="height: 100%;width:100%;position: relative;" id="4">
                    <img class="swiper_Img" :src="bannerImg4" alt="" style="width:100%;height:100%;">
                    <p style="width: 100%;height:100%;position:absolute;top:0;left:0;z-index: 999;background: rgba(225,225,225,.6);color:#333;display: flex;justify-content: center;align-items : center;font-size:48px;">启发式、人性化、个性化、实战式</p>
                    <!--<my-footer class="footer"></my-footer>-->
                </div>
                <!--<div class="swiper-slide swiper-slide-active" style="height:100%; margin-bottom: 30px;">Slide 1</div>
                <div class="swiper-slide swiper-slide-next" style="height: 100%; margin-bottom: 30px;">Slide 2</div>
                <div class="swiper-slide" style="height: 100%; margin-bottom: 30px;">Slide 3</div>
                <div class="swiper-slide" style="height: 100%; margin-bottom: 30px;">Slide 4</div>-->
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                <span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1"></span>
                <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span>
                <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span>
                <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 4"></span>
            </div>
            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
        <!-- 轮播 结束-->
        <!--<router-view style="height:500px"></router-view>-->
        <div class="footer" style="display: none">
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
                            <router-link to="/">联系我们</router-link>
                        </li>
                        <li class="bdr"></li>
                        <li>诚聘英才</li>
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
    </div>
</template>

<script>
    import Header from './common/Header'
    import Footer from './common/Footer'
    import Swiper from "swiper"
    import banner1_0 from "../../static/images/yc-banner1_0.png"
    import banner2 from "../../static/images/yc-banner2.png"
    import banner3 from "../../static/images/yc-banner3.png"
    import banner4 from "../../static/images/yc-banner4.png"



    import logo0 from "./../../static/images/logo.png";
    import ewm from "./../../static/images/ewm.png";
    import logo from "./../../static/images/logo.png";
    import navImg from "./../../static/images/yc-nav.png";
    export default {
        name:'HelloWord',
        data(){
            return {
                bottomShow:false,
                client_Height:document.documentElement.clientHeight,    //屏幕高度
                bannerImg1:banner1_0,
                bannerImg2:banner2,
                bannerImg3:banner3,
                bannerImg4:banner4,


                logo0 ,//logo背景
                isJobType:0,//工作类型
                ewm,     //底部图标1
                logo,    //底部图标2
                navImg   //nav图片
            }
        },
        components:{
            "my-header":Header,
            "my-footer":Footer,
        },
        mounted(){
            this.getData();
        },
        methods:{
            getData(){
                this.$refs.swiper_wrapper.style.height=String(this.client_Height)+'px';
                //document.getElementsByClassName('swiper_Img')[0].style.height=String(this.client_Height)+"px";
                //document.getElementsByClassName('swiper_lastImg')[0].style.height=String(this.client_Height-284)+"px";
                /*let swiper0 = new Swiper('.swiper-container0', {
                    pagination: {
                        el: '.swiper-pagination',
                    },
                });*/

                let swiper = new Swiper('.swiper-container', {
                    direction: 'vertical',
                    slidesPerView: 1,
                    spaceBetween: 30,
                    mousewheel: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    on:{
                        transitionEnd: function(){    //swiper中过度结束触发事件
                            let swiper_slide_active=document.getElementsByClassName('swiper-slide-active');
                            if(swiper_slide_active[0].getAttribute("id") == 1){
                                document.getElementsByClassName('header')[0].style.display="block";
                                document.getElementsByClassName('footer')[0].style.display="none";
                                document.getElementsByClassName('header_nav')[0].style.top="152px";
                            }
                            else if(swiper_slide_active[0].getAttribute("id") == 4){
                                document.getElementsByClassName('header')[0].style.display="none";
                                document.getElementsByClassName('footer')[0].style.display="block";
                                document.getElementsByClassName('header_nav')[0].style.top="0px";
                            }
                            else if(swiper_slide_active[0].getAttribute("id")>1 && swiper_slide_active[0].getAttribute("id")<4){
                                document.getElementsByClassName('header')[0].style.display="none";
                                document.getElementsByClassName('footer')[0].style.display="none";
                                document.getElementsByClassName('header_nav')[0].style.top="0px";
                            }
                        }
                    }
                });

                var swiper0 = new Swiper('.swiper-container0', {
                    //autoplay: true,
                });


            },
            //   进入触摸弹出列表
            getJobList(Num){
                this.isJobType=Num

            },


        }



    }
</script>

<style lang="less" scoped>
    .HelloWord{position: relative;}
    .header{position: absolute;top:0;z-index: 777;background: #fff;}
    .footer{position: absolute;bottom:0;z-index: 888;}

    .swiper-slide>p{display: block;}




    .header {width: 100%;}
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


    //头部导航
    .header_nav{width:100%;height:50px;position: absolute;top:152px;z-index: 5;background: #fff;
        border-top: 2px solid #4a90ff;box-sizing: border-box;
    }
    .header_nav>div{width: 1200px;height:48px;margin: 0 auto;
        display: flex;justify-content:flex-start;
    }
    .header_nav>div>div{width: 192px;height:48px;background:#4a90ff ;
        display: flex;justify-content: center;align-items : center;}

    .header_nav>div>div>p{font-size:18px;color:#fff; }







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





<!--<template>
  <div class="HelloWord">
      &lt;!&ndash; 头部 &ndash;&gt;
      <my-header ></my-header>&lt;!&ndash;style="display: none"&ndash;&gt;
      &lt;!&ndash; 内容渲染 &ndash;&gt;

      &lt;!&ndash; 尾部 &ndash;&gt;
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

</style>-->





