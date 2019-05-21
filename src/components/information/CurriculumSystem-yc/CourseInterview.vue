<template>
    <div class="Informatiuon">
        <my-header :titleBgColor="titleBgc" :titleWidth="TWidth"></my-header>
        <!-- 分页banner图-->
        <div class="banner">
            <img :src="book0" alt="">
            <div class="banner_cover">
                <div class="banner_center">
                    <div>
                        <h1>考试资讯</h1>
                        <h2>Update the latest business activities</h2>
                        <h3>in real time</h3>
                    </div>
                    <p></p>
                </div>
            </div>
        </div>
        <!--资讯-->
        <div class="yc-infor">
            <div class="yc-infor-head">
                <p>Z</p>
                <div>
                    <h1>资讯</h1>
                    <h2>Information</h2>
                </div>
                <ul>
                    <li><router-link to="/infornation/infor">考试资讯</router-link></li>
                    <li></li>
                    <li><router-link to="/infornation/data">培训资料</router-link></li>
                </ul>
            </div>

            <div class="yc-infor-center">
                <router-view></router-view>
                <!--<div class="yc-infor-list">
                    <div class="yc-qf" v-for="(item,index) in 7" :key="index">
                        <ul>
                            <li>我是考试资讯我是考试资讯我是考试</li>
                            <li>日期：2018.10.11</li>
                        </ul>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>-->

            </div>
        </div>

        <!--分页-->
        <div class="Pagination">
            <el-pagination
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage1"
                    :page-size="100"
                    layout="prev, pager, next"
                    :total="1000" style="margin-bottom: 162px;">
            </el-pagination>
        </div>


        <my-footer></my-footer>



    </div>
</template>

<script>
    import Header from "@/components/common/Header"
    import Footer from "@/components/common/Footer"
    import book0 from "../../../../static/images/yc_book0.png"
    import book1 from "../../../../static/images/yc_book1.png"
    import book2 from "../../../../static/images/yc_book2.png"
    //import animate from "animate.css"
    export default {
        name:'Book',
        data(){
            return {
                titleBgc:"#f1f5f9",  //头部颜色
                TWidth:1200,       //头部宽度
                book0,
                book1,
                book2,
                currentPage1: 5, //分页当前页

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



            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }



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

    .Informatiuon{background: #f1f5f9;}
    .banner{height:360px;width:100%;background: aquamarine;position: relative;}
    .banner>img{height:100%;width:100%;}
    .banner_cover{position: absolute;top:0;left:0;background: rgba(65,135,233,.5);height:360px;width: 100%}
    .banner_center{width:1200px;height:360px;margin: 0 auto;display: flex;justify-content: flex-end;align-items: center;}
    .banner_center>div{height:94px;margin-right:25px; }
    .banner_center>div>h1,h2,h3{color: #fff;text-align: right;}
    .banner_center>div>h2,h3{font-weight: normal;font-size: 18px;}
    .banner_center>div>h1{font-size: 36px;margin-bottom: 16px;height:40px;line-height: 40px;}
    .banner_center>p{width:44px;height:94px;border: 4px solid #fff;box-sizing: border-box;}

    .yc-infor{width: 100%;margin-bottom: 60px;min-height:800px;}
    .yc-infor .yc-infor-head{width:1200px;height:140px;margin: 0 auto;margin-top: 60px;
        display: flex;justify-content: flex-start;align-items: center;}
    .yc-infor-head>p{font-size: 72px;color:#4187e9;height:140px;line-height: 140px;}
    .yc-infor-head>div{margin-left: 30px;}
    .yc-infor-head>div>h1{text-align: left;font-size: 36px;height:44px;line-height: 44px;font-weight: normal;}
    .yc-infor-head>div>h2{text-align: left;font-size: 18px;color:#999999;font-weight: normal;}
    .yc-infor-head>ul{height:140px;display: flex;justify-content: flex-start;align-items: center;margin-left: 850px;}
    .yc-infor-head>ul>li>a{line-height: 23px;color: #999;font-size: 14px;width: 80px;height:23px;text-align: center;}
    .yc-infor-head>ul>li:nth-child(2){height:16px;width:2px;background: #999;margin: 0 28px;}

    .yc-infor-center{width:100%;}
    /*.yc-infor-list{width:1200px;margin: 0 auto;margin-top: 20px;}
    .yc-infor-list>div{float:left;height:120px;width:590px;border: 2px solid #999;box-sizing: border-box;
        display: flex;justify-content:space-between;align-items: center;margin-right:18px;margin-top: 20px;}
    .yc-infor-list>div:nth-child(even){margin-right: 0;}
    .yc-infor-list>div:hover{cursor: pointer;border: 2px solid #4187e9;}
    .yc-infor-list>div>ul:nth-child(1){margin-left: 29px;width:400px;}
    .yc-infor-list>div>ul:nth-child(1)>li:first-child{font-weight: bold;}
    .yc-infor-list>div>ul:nth-child(1)>li:last-child{color:#999;}
    .yc-infor-list>div:hover ul:nth-child(1)>li:first-child{color:#4187e9;}
    .yc-infor-list>div>ul:nth-child(2){height:116px;margin: 0 46px;display: flex;justify-content: flex-start;align-items: center;}
    .yc-infor-list>div>ul:nth-child(2)>li{background:#999;height:12px;width:12px;border-radius: 50%;}
    .yc-infor-list>div>ul:nth-child(2)>li:nth-child(2){height:18px;width:18px;margin: 0 5px;}
    .yc-infor-list>div:hover ul:nth-child(2)>li{background:#4187e9;}*/


    .Pagination{width: 1200px;margin: 0 auto;height:100px;display: flex;justify-content: flex-start;align-items: center;}
</style>
<!--
<div class="yc-infor-list">
                <div>
                    <ul>
                        <li>我是考试资讯我是考试资讯我是考试</li>
                        <li>日期：2018.10.11</li>
                    </ul>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
</div>

-->




