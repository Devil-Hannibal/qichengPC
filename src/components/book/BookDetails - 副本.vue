<template>
    <div class="BookDetails">
        <my-header :titleBgColor="titleBgc" :titleWidth="TWidth"></my-header>
        <!-- 面包屑-->
        <div class="breadcrumb">
            <div class="breadcrumb_center">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>图书</el-breadcrumb-item>
                    <el-breadcrumb-item>商品名称商品名称</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>

        <div class="buy">
            <div class="buy_center">
                <div class="buy_center_left">            <!--放大镜-->
                    <!--<div :style="imgStyle"></div>-->
                        <!-- Swiper -->
                        <div class="swiper-container gallery-top swiper-container-initialized swiper-container-horizontal" style="width:100%;height:502px;">
                            <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-5450px, 0px, 0px); width:100%;height:502px;">
                                <div v-for="item in 5" class="swiper-slide" :style="imgStyle"><img :src="BookDetails1" style="width:100%;height:100%;"></div>
                            </div>
                            <!-- Add Arrows -->
                            <div class="swiper-button-next swiper-button-white" tabindex="0" role="button" aria-label="Next slide" aria-disabled="false"></div>
                            <div class="swiper-button-prev swiper-button-white" tabindex="0" role="button" aria-label="Previous slide" aria-disabled="false"></div>
                            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                        </div>
                        <div class="swiper-container gallery-thumbs swiper-container-initialized swiper-container-horizontal swiper-container-free-mode swiper-container-thumbs">
                            <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-876.571px, 0px, 0px);">
                                <div  v-for="item in 5" class="swiper-slide" style="width:25%;height:100px;margin-top: 3px; margin-right: 10px;box-sizing: border-box;"><img :src="BookDetails1" style="width:100%;height:100%;"></div>
                            </div>
                            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                        </div>







                </div>
                <div class="buy_center_right">
                    <h1>商品名称商品名称商品品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称</h1>
                    <ul>
                        <li>折后价 ￥</li>
                        <li>82.00</li>
                        <li>14</li>
                        <li>：</li>
                        <li>08</li>
                        <li>：</li>
                        <li>20</li>
                        <li>后结束</li>
                    </ul>
                    <p>原价 ￥1171.42 7折</p>
                    <div>
                        <p>配送</p>
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div>
                        <p>运费</p>
                        <div>订单满88免运费</div>
                    </div>
                    <div>
                        <p>数量</p>
                        <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                        <p>仅剩<span>20</span>件，抓紧时间抢购哦！</p>
                    </div>
                    <div>
                        <el-button type="primary">立即购买</el-button>
                        <div class="iconfont icongouwuche"></div>
                    </div>



                </div>

            </div>
        </div>

        <div clss="goodsDetails">
            <div class="goodsDetails_center">
                <h1>商品详情</h1>
                <p></p>
                <div>
                    <img :src="BookDetails3" alt="">
                </div>
            </div>
        </div>




        <my-footer></my-footer>
    </div>
</template>

<script>
    import Swiper from "swiper"
    import Header from "@/components/common/Header"
    import Footer from "@/components/common/Footer"
    import BookDetails1 from "../../../static/images/yc_bookDetails1.png"
    import BookDetails2 from "../../../static/images/yc_bookDetails2.png"
    import BookDetails3 from "../../../static/images/yc_bookDetails3.png"
    //import animate from "animate.css"
    export default {
        name:'BookDetails',
        data(){
            return {
                titleBgc:"#f7f9fe",  //头部颜色
                TWidth:1200,       //头部宽度
                BookDetails1,
                BookDetails2,
                BookDetails3,
                currentPage1: 5, //分页当前页
                imgStyle:`background-image: url(${BookDetails1}) no-repeat center; width: 100%; margin-right: 10px;height:100%;`,
                num1: 1,    //计数器值
                options: [{     //选择器
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: ''
            }
        },
        components: {
            "my-header": Header,
            "my-footer": Footer
        },
        mounted(){
            this.getData();
        },
        methods:{
            getData(){

                let galleryThumbs = new Swiper('.gallery-thumbs', {
                    spaceBetween: 10,
                    slidesPerView: 4,
                    freeMode: true,
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                });
                let galleryTop = new Swiper('.gallery-top', {
                    spaceBetween: 10,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    thumbs: {
                        swiper: galleryThumbs
                    }
                });


            },
            handleChange(value) {     //计数器方法
                console.log(value);
            }



        }
    }
</script>
<style lang="less" scoped>
    body,div,ul,li,ol,dl,dt,dd,h1,h2,h3,h4,h5,h6,s,u,b,p,span,i,a,header,nav{
        padding:0; margin:0; list-style:none; text-decoration:none; font-size:12px; color:#333;
        font-family: -apple-system-font, "Helvetica Neue", sans-serif;
    }
    .qf:after{ content:"";display:block;clear:both}
    *{margin:0;padding:0;}

    .BookDetails{background: #f7f9fe;}
    .breadcrumb{width:100%;height:58px;border-top: 1px solid #dddddd;}
    .breadcrumb_center{width:1200px;height:58px;margin: 0 auto;}
    .el-breadcrumb{padding-top: 22px;}

    .buy_center{height:605px;width:1200px;margin:0 auto;display: flex;justify-content: flex-start;}
    .buy_center_left{height:605px;width:500px;}

    .buy_center_right{height:605px;width:660px;margin-left: 40px;}
    .buy_center_right h1{font-size: 18px;margin-top: 75px;height:38px;
        overflow:hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;}
    .buy_center_right ul{display: flex;justify-content: flex-start;align-items : center;
    background: url("../../../static/images/yc_bookDetails2.png") no-repeat center;
    background-size: cover;height:57px;width:660px;margin-top: 13px;}
    .buy_center_right ul>li{color:#fff;}
    .buy_center_right ul>li:first-child{font-size: 24px;margin-left: 20px;}
    .buy_center_right ul>li:nth-child(2){font-size: 44px;margin-left: 9px;}
    .buy_center_right ul>li:nth-child(3){font-size: 18px;margin-left:210px;width:28px;text-align:center;line-height:28px;height:28px;background: #fff;border-radius: 2px;color:#db54c0;}
    .buy_center_right ul>li:nth-child(4){margin: 0 4px;}
    .buy_center_right ul>li:nth-child(5){font-size: 18px;width:28px;text-align:center;line-height:28px;height:28px;background: #fff;border-radius: 2px;color:#db54c0;}
    .buy_center_right ul>li:nth-child(6){margin: 0 4px;}
    .buy_center_right ul>li:nth-child(7){font-size: 18px;width:28px;text-align:center;line-height:28px;height:28px;background: #fff;border-radius: 2px;color:#db54c0;}
    .buy_center_right ul>li:nth-child(8){margin-left: 12px;}
    .buy_center_right>p{width:640px;height:63px;line-height: 63px;background:#f8f2f5;
        font-size: 24px; padding-left: 20px;color:#999999;}
    .buy_center_right>div{display: flex;justify-content: flex-start;align-content: center;}
    .buy_center_right>div:nth-child(4){margin-top: 23px;height:40px;}
    .buy_center_right>div:nth-child(4) p{align-content: center;margin-top: 10px;}
    .buy_center_right>div:nth-child(4) .el-select{margin-left: 16px;}
    .buy_center_right>div:nth-child(4) .el-select .el-input{box-sizing: border-box;}
    .buy_center_right>div:nth-child(5){margin-top: 18px;height:18px;}
    .buy_center_right>div:nth-child(5)>div{margin-left: 16px;}
    .buy_center_right>div:nth-child(6){margin-top: 25px;height:40px;}
    .buy_center_right>div:nth-child(6) p{margin-top: 10px;}
    .buy_center_right>div:nth-child(6) .el-input-number{margin-left: 16px;}
    .buy_center_right>div:nth-child(6) p:last-child{margin-left: 10px;color:#333;}
    .buy_center_right>div:nth-child(6) p:last-child>span{color:red;}
    .buy_center_right>div:nth-child(7){margin-top: 29px;height:56px;}
    .el-button{width:238px !important;height:56px !important;margin-left: 40px;}
    .buy_center_right>div:nth-child(7)>div{margin-left:20px;font-size: 40px; margin-top: 18px;color:#999;}
    .buy_center_right>div:nth-child(7)>div:hover{cursor: pointer;}
    .buy_center_right>div>p{color:#999;}

    .goodsDetails{width:100%;}
    .goodsDetails_center{width:1200px;margin: 0 auto;margin-top: 70px;}
    .goodsDetails_center>h1{font-weight: normal;font-size: 18px;color:#4187e9;}
    .goodsDetails_center p{margin-top: 13px;width:100%;height:4px;background: #333;}
    .goodsDetails_center>div{display: flex;justify-content: center;padding-top: 58px;padding-bottom: 58px;}


</style>

