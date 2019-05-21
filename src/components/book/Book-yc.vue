<template>
    <div class="Book">
        <my-header :titleBgColor="titleBgc" :titleWidth="TWidth"></my-header>
        <!-- 分页banner图-->
        <div class="banner">
            <img :src="book0" alt="">
            <div class="banner_cover">
                <div class="banner_center">
                    <div>
                        <h1>图书</h1>
                        <h2>Update the latest business activities </h2>
                        <h3>in real time</h3>
                    </div>
                    <p></p>
                </div>
            </div>
        </div>
        <!--图书城-->
        <div class="book_city">
            <div class="book_city_head">
                <img :src="book1" alt="">
                <div>
                    <h1>图书城</h1>
                    <h2>Book city</h2>
                </div>
                <p><a href="#">MORE+</a></p>
            </div>

            <div class="book_city_title">
                <ul>
                    <li>全部课程</li>
                    <li></li>
                    <li>智能选课</li>
                </ul>
                <div>
                    <h1>科目：</h1>
                    <div>
                        <p>不限</p>
                        <p>数学</p>
                        <p>语文</p>
                        <p>外语</p>
                    </div>
                </div>
            </div>

            <div class="book_city_books">
                <ul class="book_item qf" v-for="item in 9">
                    <li><img :src="book2" alt=""></li>
                    <li>【配套讲解】华图公务员考试用书2019省考 公务员核心教材申论行测常 公务员核心教材申论行测常公务员核心教材申论行测常</li>
                    <li>
                        <div>
                            <div>
                                <span>￥</span>
                                <span>94</span>
                                <span>.00</span>
                            </div>
                            <p>原价:<span><del>￥120.00</del></span></p>
                        </div>
                        <div class="iconfont icongouwuche"></div>
                    </li>
                </ul>
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
    import book0 from "../../../static/images/yc_book0.png"
    import book1 from "../../../static/images/yc_book1.png"
    import book2 from "../../../static/images/yc_book2.png"
    //import animate from "animate.css"
    export default {
        name:'Book',
        data(){
            return {
                titleBgc:"#fff",  //头部颜色
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
            //this.getData();
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
    .qf:after{ content:"";display:block;clear:both}
    *{margin:0;padding:0;}

    .Book{}
    .banner{height:360px;width:100%;background: aquamarine;position: relative;}
    .banner>img{height:100%;width:100%;}
    .banner_cover{position: absolute;top:0;left:0;background: rgba(65,135,233,.5);height:360px;width: 100%}
    .banner_center{width:1200px;height:360px;margin: 0 auto;display: flex;justify-content: flex-end;align-items: center;}
    .banner_center>div{height:94px;margin-right:25px; }
    .banner_center>div>h1,h2,h3{color: #fff;text-align: right;}
    .banner_center>div>h2,h3{font-weight: normal;font-size: 18px;}
    .banner_center>div>h1{font-size: 36px;margin-bottom: 16px;height:40px;line-height: 40px;}
    .banner_center>p{width:44px;height:94px;border: 4px solid #fff;box-sizing: border-box;}

    .book_city{width: 100%;margin-bottom: 60px;height:1750px;}
    .book_city .book_city_head{width:1200px;height:140px;margin: 0 auto;margin-top: 60px;
        display: flex;justify-content: flex-start;align-items: center;}
    .book_city_head>div{margin-left: 30px;}
    .book_city_head>div>h1,h2{text-align: left;}
    .book_city_head>div>h1{font-size: 36px;height:44px;line-height: 44px;}
    .book_city_head>div>h2{font-size: 18px;color:#333;font-weight: normal;}
    .book_city_head>p{margin-left: 956px;height:140px;display: flex;align-items:flex-start;}
    .book_city_head>p a:hover{cursor: pointer;color:#4187e9;}

    .book_city_title{width:1200px;height:152px;margin: 0 auto;border: 1px solid #d8e1e6;
        box-sizing: border-box;padding:0 20px;}
    .book_city_title>ul{height:90px;width:1198px;display: flex;justify-content: flex-start;align-items: center;}
    .book_city_title>ul li{font-size:20px; }
    .book_city_title>ul li:first-child,li:last-child{border-radius: 5px;height:40px;line-height:40px;padding: 0 12px;}
    .book_city_title>ul li:first-child:hover{background: #4187e9;color:#fff;}
    .book_city_title>ul li:last-child:hover{background: #4187e9;color:#fff;}
    .book_city_title>ul li:first-child:hover{cursor: pointer;}
    .book_city_title>ul li:last-child:hover{cursor: pointer;}
    .book_city_title>ul li:nth-child(2){width: 2px;background: #333;height:23px;margin: 0 13px;}
    .book_city_title>div{height:60px;width:1198px;display: flex;justify-content: flex-start;align-items: center;}
    .book_city_title>div>div{display: flex;justify-content: flex-start;align-items: center;}
    .book_city_title>div h1{font-size: 16px;}
    .book_city_title>div>div p{font-size: 16px;padding:10px;height:22px;line-height:22px;
        margin-right:10px;border-radius: 5px;}
    .book_city_title>div>div p:hover{background: #4187e9;color:#fff;cursor: pointer;}

    .book_city_books{width:1200px;margin: 0 auto;margin-top: 23px;}
    .book_item{float:left;width:287px;height:454px;border-radius: 8px;background: #f7f9fe;margin-top: 20px;margin-right: 17px;}
    .book_city_books>ul:nth-child(4n){margin-right:0; }
    .book_city_books>ul>li:first-child{width:287px;height:287px;}
    .book_city_books>ul>li:first-child img{display:block;width:287px;height:287px;}
    .book_city_books>ul>li:nth-child(2){width:253px;height:51px;text-align:left;margin:17px;
        font-size: 14px;overflow:hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;line-height:25px;}
    .book_city_books>ul>li:nth-child(3){display: flex;justify-content: flex-start;align-items: center;height:82px;}
    .book_city_books>ul>li:nth-child(3) div:first-child>div>span{color:red;}
    .book_city_books>ul>li:nth-child(3) div:first-child>div>span:first-child{font-size:22.5px;}
    .book_city_books>ul>li:nth-child(3) div:first-child>div>span:nth-child(2){font-size:30px;}
    .book_city_books>ul>li:nth-child(3) div:first-child>div>span:nth-child(3){font-size:20px;}
    .book_city_books>ul>li:nth-child(3) div:last-child{font-size: 35px;margin-left: 120px;}
    .book_city_books>ul>li:nth-child(3) div:last-child:hover{color:#4187e9;cursor: pointer;}
    .book_city_books>ul>li:nth-child(3) div:first-child>p{height:50px;}

    .Pagination{width: 1200px;margin: 0 auto;height:100px;display: flex;justify-content: flex-start;align-items: center;}



</style>





