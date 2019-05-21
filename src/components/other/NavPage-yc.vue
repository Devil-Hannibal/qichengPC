<template>
    <div class="NavPage">
        <my-header :titleBgColor="titleBgc" :titleWidth="TWidth"></my-header>

        <!--导航-->
        <div class="yc-nav">
            <div>
                <p class="iconfont iconcaidan">考试导航</p>
                <div class="yc-nav-content">
                    <div class="yc-nav-part">
                        <div>
                            <ul class="nav_item" v-for="(item,index) in 10" :key="index">
                                <li>教师</li>
                                <li class="iconfont iconic_arrow_r"></li>
                                <li class="nav_item_content">
                                    <div><a href="#">教师资格</a></div>
                                    <div><a href="#">教师荣誉</a></div>
                                </li>
                            </ul>
                        </div>
                        <img src="../../../static/images/yc-navpage.png" alt="">
                    </div>

                    <div class="yc-nav-part"><span>资讯</span>
                        <ul class="nav_item" v-for="(item,index) in 6" :key="index">
                        <li>教师</li>
                        <li class="iconfont iconic_arrow_r"></li>
                        <li class="nav_item_content">
                            <div><a href="#">教师资格</a></div>
                            <div><a href="#">教师荣誉</a></div>
                        </li>
                        </ul>
                    </div>

                    <div class="yc-nav-part"><span>课程</span>
                        <ul class="nav_item" v-for="(item,index) in 3" :key="index">
                            <li>教师</li>
                            <li class="iconfont iconic_arrow_r"></li>
                            <li class="nav_item_content">
                                <div><a href="#">教师资格</a></div>
                                <div><a href="#">教师荣誉</a></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>



        <my-footer></my-footer>
    </div>
</template>

<script>
    import Header from "@/components/common/Header"
    import Footer from "@/components/common/Footer"

    //import animate from "animate.css"
    export default {
        name:'NavPage',
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
    .NavPage{background: #f7f9fe;}
    //头部导航
    .yc-nav{width:100%;border-top: 2px solid #4a90ff;margin-bottom:150px; }
    .yc-nav>div{width: 1200px;margin: 0 auto;}
    .yc-nav>div>p{width: 192px;height:48px;line-height:48px;text-align:center;background:#4a90ff;font-size:18px;color:#fff; }

    .yc-nav-content{width:100%;}
    .yc-nav-content .nav_item{height:35px;border-bottom: 1px solid #dddddd;box-sizing: border-box;
        display: flex;justify-content: flex-start;align-items: center;}
    .yc-nav-content .nav_item>li{height:34px;text-align:left;line-height: 34px;}
    .yc-nav-content .nav_item>li:first-child{width:140px;}
    .yc-nav-content .nav_item>li:nth-child(2){width:30px;}
    .yc-nav-content .nav_item>li:nth-child(3){display: flex;justify-content: flex-start;align-items: center;}
    .yc-nav-content .nav_item>li:nth-child(3) div a{display:block;margin: 0 14px;color:#999;}
    .yc-nav-content .nav_item>li:nth-child(3) div a:hover{color:#4a90ff;}
    .yc-nav-content .yc-nav-part{background: #fff;margin-top: 21px;padding:36px;}
    .yc-nav-content .yc-nav-part:first-child{display: flex;justify-content: flex-start;align-items:flex-start;}
    .yc-nav-content .yc-nav-part:first-child .nav_item{width:800px;}
    .yc-nav-content .yc-nav-part:first-child .nav_item li{margin-top:0;text-align:center;}
    .yc-nav-content .yc-nav-part:first-child img{height:520px;margin-left: 41px;}





</style>






