<template>
    <div class="SchoolEnvironment">
        <!--公共头-->
        <my-header :titleBgColor="titleBgc" :titleWidth="TWidth"></my-header>

        <!--学校环境内容-->
        <div class="yc-Environment">
            <h1>用心为学员服务</h1>
            <div>教室环境<span class="iconfont iconxiangxiajiantoushixin"></span></div>
            <div class="iconfont iconquotation"></div>
            <p>用心为学员服务，用心为学员服务，用心为学员服务，用心为学员服务，用心为学员服务。用心为学员服务，用心为学员服务，用心为学员服务，用心为学员服务，用心为学员服务。</p>
            <div class="iconfont iconquotation"></div>
            <ul class="yc-qf">
                <li v-for="(item,index) in 8" :key="index">
                    <img src="../../../static/images/yc-schoolEnvironment.png" alt="">
                </li>
            </ul>
        </div>

        <!--公共底-->
        <my-footer></my-footer>
    </div>
</template>

<script>
    import Header from "@/components/common/Header"
    import Footer from "@/components/common/Footer"
    //import animate from "animate.css"
    export default {
        name:'SchoolEnvironment',
        data(){
            return {
                titleBgc:"#f7f9fe",  //头部颜色
                TWidth:1200,       //头部宽度
            }
        },
        components:{
            "my-header": Header,
            "my-footer": Footer
        },
        mounted(){
            this.getData();
        },
        methods:{
            getData(){


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

    .SchoolEnvironment{background: #f7f9fe;}
    //头部导航
    .yc-Environment{width:1200px;margin: 0 auto;background: #fff;text-align: center;padding-bottom: 40px;position: relative;}
    .yc-Environment h1{height:24px;font-weight: normal;font-size:24px;padding-top: 60px;margin: 0 auto;}
    .yc-Environment div:nth-child(2){position: absolute;left:-20px;top:122px;width:215px;height:65px;text-align: center;line-height: 50px;
        background: url("../../../static/images/yc-environment.png") no-repeat;font-size:18px;color:#fff; }
    .yc-Environment div:nth-child(2) span{font-size:13px;color:#fff;margin-left:15px; }
    .yc-Environment div:nth-child(3){margin-top: 170px;font-size: 58px;color:#d7dbe4;text-align: left;margin-left:158px;}
    .yc-Environment>p{line-height: 25px; margin: 25px 180px;font-size: 14px;text-align: left;}
    .yc-Environment div:nth-child(5){width:100px;font-size: 58px;color:#d7dbe4;text-align:left;margin-left:775px;
        display: inline-block;transform:rotate(180deg);
        -moz-transform:rotate(180deg);
        -webkit-transform:rotate(180deg);
        -o-transform:rotate(180deg);
        }
    .yc-Environment ul{height:410px;width: 1132px;padding:0 37px;margin-top: 54px;}
    .yc-Environment ul li{float: left;width:270px;height:195px;margin-right: 8px;margin-bottom: 10px;}
    .yc-Environment ul li img{width:270px;height:195px;}
    .yc-Environment ul li:nth-child(4n){margin-right: 0;}



</style>
<!--
<div class="yc-Environment">
    <h1>用心为学员服务</h1>
            <div>教室环境</div>
            <div class="iconfont iconquotation"></div>
            <p>用心为学员服务，用心为学员服务，用心为学员服务，用心为学员服务，用心为学员服务。用心为学员服务，用心为学员服务，用心为学员服务，用心为学员服务，用心为学员服务。</p>
            <div></div>
            <ul>
                <li v-for="(item,index) in 8" :key="index">
                    <img src="../../../static/images/yc-schoolEnvironment.png" alt="">
                </li>
            </ul>
        </div>
</div>

-->



