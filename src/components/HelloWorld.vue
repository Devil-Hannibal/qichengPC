<template>
    <div class="HelloWord">
        <my-header class="header"></my-header>
        <!-- 轮播 -->
        <div class="swiper-container swiper-container-initialized swiper-container-vertical" ref="swiper_wrapper" style="height:300px;"><!--style="height:300px;"-->
            <div class="swiper-wrapper" style="height:100%;transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
                <div class="swiper-slide" style="height: 100%;" id="1"><img :src="bannerImg1" alt=""></div>
                <div class="swiper-slide" style="height: 100%;" id="2"><img :src="bannerImg2" alt=""></div>
                <div class="swiper-slide" style="height: 100%;" id="3"><img :src="bannerImg3" alt=""></div>
                <div class="swiper-slide" style="height: 100%;" id="4">
                    <img :src="bannerImg4" alt="">
                    <my-footer class="footer"></my-footer>
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
                            if(swiper_slide_active[0].getAttribute("id")==4 & document.documentElement.scrollTop==0){
                                window.onmousewheel = function(){  //再次触发滚轮事件
                                    //let _this=this;
                                    //alert('过渡结束');
                                    //_this.bottomShow=true;
                                    //document.documentElement.scrollTop=200;


                                }
                            }
                            /*if(document.documentElement.scrollTop>0 & document.documentElement.scrollTop<=200){
                                alert(123);
                                document.documentElement.scrollTop=0;
                            }*/
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





