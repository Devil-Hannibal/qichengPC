<template>
    <div class="InformationDetails-yc">
        <my-header :titleBgColor="titleBgc" :titleWidth="TWidth"></my-header>
        <!-- 分页banner图-->
        <div class="banner">
            <img :src="book0" alt="">
            <div class="banner_cover">
                <div class="banner_center">
                    <div>
                        <h1>考试资讯</h1>
                        <h2>Update the latest business activities </h2>
                        <h3>in real time</h3>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>

        <div class="yc-Details-content">
            <div class="yc-Details-left">
                <h1>综合实力强 微镖局入选新三板明星企业榜</h1>
                <div>作者：发布时间：2017-10-30</div>
                <div></div>
                <div class="yc-Details-text">
                    截止2017年10月13日，北京已有1623家企业加入新三板市场，市值总和达8112.03亿元，发展势头强劲。
                    近日，广证恒生针对北京市新三板挂牌企业的整体表现，从多个维度进行了梳理回顾，并根据综合评判遴选出25家区域明星企业。
                    道有道凭借优异的业绩表现，荣登北京市明星企业榜。
                    截止2017年10月13日，北京已有1623家企业加入新三板市场，市值总和达8112.03亿元，发展势头强劲。
                    近日，广证恒生针对北京市新三板挂牌企业的整体表现，从多个维度进行了梳理回顾，并根据综合评判遴选出25家区域明星企业。
                    道有道凭借优异的业绩表现，荣登北京市明星企业榜。
                    截止2017年10月13日，北京已有1623家企业加入新三板市场，市值总和达8112.03亿元，发展势头强劲。
                    近日，广证恒生针对北京市新三板挂牌企业的整体表现，从多个维度进行了梳理回顾，并根据综合评判遴选出25家区域明星企业。
                    道有道凭借优异的业绩表现，荣登北京市明星企业榜。
                </div>
                <ul>
                    <li>
                        <router-link to="">上一篇：专注精准营销 道有道斩获《广告主》最佳效果广告奖</router-link>
                        <router-link to="">下一篇：获“买入”评级，道有道构建闭环生态 打造企业级移动营销服务商</router-link>
                    </li>
                    <li>
                        <span class="iconfont iconfenxiang"></span>
                        分享
                    </li>
                </ul>
            </div>
            <div class="yc-Details-right">
                <h1>考试资讯</h1>
                <div class="yc-Details-list">
                    <router-link class="yc-qf" v-for="(item,index) in 5" to="/infornation/infor/details" :key="index">
                        <ul>
                            <li>我是考试资讯我是考试资讯我是考试</li>
                            <li>日期：2018.10.11</li>
                        </ul>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </router-link>
                </div>
                <div class="yc-right-nav">
                    <h1>资讯</h1>
                    <ul>
                        <li><router-link to="" class='iconfont iconic_arrow_r'>考试资讯（20）</router-link></li>
                        <li><router-link to="" class='iconfont iconic_arrow_r'>培训资料（80）</router-link></li>
                    </ul>
                </div>
            </div>
        </div>


        <my-footer></my-footer>
    </div>
</template>

<script>
    import Header from "@/components/common/Header"
    import Footer from "@/components/common/Footer"
    import book0 from "../../../static/images/yc_book0.png"

    //import animate from "animate.css"
    export default {
        name:'InformationDetails-yc',
        data(){
            return {
                titleBgc:"#f1f5f9",  //头部颜色
                TWidth:1200,          //头部宽度
                book0,                 //banner图
                Zid:'',               //当前考试资讯id
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
                this.Zid=this.$route.query.zid;
                console.log(this.Zid);


            },


        }
    }
</script>

<style lang="less" scoped>
    body,div,ul,li,ol,dl,dt,dd,h1,h2,h3,h4,h5,h6,s,u,b,p,span,i,a,header,nav{
        padding:0; margin:0; list-style:none; text-decoration:none; font-size:12px; color:#333;
        font-family: -apple-system-font, "Helvetica Neue", sans-serif;
    }
    .yc-qf:after{ content:"";display:block;clear:both}
    *{margin:0;padding:0;}

    .InformationDetails-yc{background: #f1f5f9;}
    .banner{height:360px;width:100%;background: aquamarine;position: relative;}
    .banner>img{height:100%;width:100%;}
    .banner_cover{position: absolute;top:0;left:0;background: rgba(65,135,233,.5);height:360px;width: 100%}
    .banner_center{width:1200px;height:360px;margin: 0 auto;display: flex;justify-content: flex-end;align-items: center;}
    .banner_center>div{height:94px;margin-right:25px; }
    .banner_center>div>h1,h2,h3{color: #fff;text-align: right;}
    .banner_center>div>h2,h3{font-weight: normal;font-size: 18px;}
    .banner_center>div>h1{font-size: 36px;margin-bottom: 16px;height:40px;line-height: 40px;}
    .banner_center>p{width:44px;height:94px;border: 4px solid #fff;box-sizing: border-box;}


    .yc-Details-content{width:1200px;margin: 0 auto;display: flex;justify-content: flex-start;margin-top: 68px;margin-bottom: 68px;}
    .yc-Details-content .yc-Details-left{width:785px;min-height:1096px;background:#fff;text-align: center; }
    .yc-Details-left h1{font-size: 18px;margin-top: 62px;}
    .yc-Details-left div:nth-child(2){font-size: 14px;margin-top: 18px;color:#999;}
    .yc-Details-left div:nth-child(3){height:2px;width:700px;background: #999;margin: 0 auto;margin-top: 50px;}
    .yc-Details-left div:nth-child(4){margin: 60px 60px;line-height:28px;
        text-align: center;color:#666;}
    .yc-Details-left ul{margin: 60px;display: flex;justify-content: flex-start;align-items: center;}
    .yc-Details-left ul li:first-child{width:545px;}
    .yc-Details-left ul li:first-child a{display: block;text-align: left;}
    .yc-Details-left ul li:first-child a:hover{color:#4187e9;}
    .yc-Details-left ul li:last-child{color:#999;width:120px;height:46px;line-height:44px;border:1px solid #999;border-radius: 5px;font-size: 16px;}
    .yc-Details-left ul li:last-child span{color:#999;font-size: 24px;}
    .yc-Details-left ul li:last-child:hover{cursor: pointer;border: 1px solid #4187e9;color:#4187e9}
    .yc-Details-left ul li:last-child:hover span{color:#4187e9;}

    .yc-Details-right{width:380px;margin-left: 34px;}
    .yc-Details-right>h1{font-size: 24px;margin-top: 65px;}
    .yc-Details-list{width:380px;margin: 0 auto;margin-top: 20px;}
    .yc-Details-list>a{display:block;height:78px;width:380px;border: 1px solid #999;box-sizing: border-box;
        display: flex;justify-content:space-between;align-items: center;margin-top: 20px;}
    .yc-Details-list>a:hover{cursor: pointer;border: 2px solid #4187e9;}
    .yc-Details-list>a>ul:nth-child(1){margin-left: 29px;width:400px;}
    .yc-Details-list>a>ul:nth-child(1)>li:first-child{font-weight: bold;}
    .yc-Details-list>a>ul:nth-child(1)>li:last-child{color:#999;}
    .yc-Details-list>a:hover ul:nth-child(1)>li:first-child{color:#4187e9;}
    .yc-Details-list>a>ul:nth-child(2){height:76px;margin: 0 46px;display: flex;justify-content: flex-start;align-items: center;}
    .yc-Details-list>a>ul:nth-child(2)>li{background:#999;height:8px;width:8px;border-radius: 50%;}
    .yc-Details-list>a>ul:nth-child(2)>li:nth-child(2){height:12px;width:12px;margin: 0 5px;}
    .yc-Details-list>a:hover ul:nth-child(2)>li{background:#4187e9;}

    .yc-right-nav{margin-top: 95px;}
    .yc-right-nav h1{font-size: 24px;}
    .yc-right-nav ul{margin-top: 55px;}
    .yc-right-nav ul li a{display: block;font-size: 24px;color:#999;}
    .yc-right-nav ul li a:last-child{margin-top: 20px;}
    .yc-right-nav ul li a:hover{color:#4187e9;}
</style>





