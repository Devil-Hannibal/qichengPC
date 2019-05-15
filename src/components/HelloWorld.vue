<template>
    <div class="HelloWord">
        <my-header class="header" style="display: block"></my-header>
        <!-- 轮播 -->
        <div class="swiper-container swiper-container-initialized swiper-container-vertical" ref="swiper_wrapper" style="height:300px;"><!--style="height:300px;"-->
            <div class="swiper-wrapper" style="height:100%;transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
                <div class="swiper-slide" style="height: 100%;" id="1"><img :src="bannerImg1" alt=""></div>
                <div class="swiper-slide" style="height: 100%;" id="2"><img :src="bannerImg2" alt=""></div>
                <div class="swiper-slide" style="height: 100%;" id="3"><img :src="bannerImg3" alt=""></div>
                <div class="swiper-slide" style="height: 100%;" id="4">
                    <img :src="bannerImg4" alt="">
                    <!--<my-footer class="footer"></my-footer>-->

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

        <div style="height:200px;width:100%;background: aquamarine;" v-if="bottomShow">
            底部
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




    import ewm from "./../../static/images/ewm.png";
    import logo from "./../../static/images/logo.png";
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



                ewm: ewm,
                logo: logo
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
                //console.log(document.documentElement.clientHeight);
                this.$refs.swiper_wrapper.style.height=String(this.client_Height)+'px';
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
                            if(swiper_slide_active[0].getAttribute("id")==2){ /*& document.documentElement.scrollTop==0*/
                                document.getElementsByClassName('header')[0].style.display="none";
                            }else if(swiper_slide_active[0].getAttribute("id")==1){
                                document.getElementsByClassName('header')[0].style.display="block";
                            }
                        }
                    }
                });
            },
        }



    }
</script>

<style lang="less" scoped>
    .HelloWord{position: relative;}
    .header{position: absolute;top:0;z-index: 999;background: #fff;}
    .swiper-wrapper>div:last-child{position: relative;}
    .footer{position: absolute;bottom:0;z-index: 999;}

















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





