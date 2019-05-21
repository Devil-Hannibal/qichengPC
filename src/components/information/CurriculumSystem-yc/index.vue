<template>
    <div class="CurriculumSystem">
        <!--公共头-->
        <my-header :titleBgColor="titleBgc" :titleWidth="TWidth"></my-header>
        <!--课程体系-->
        <div class="yc-system-content">
            <ul class="yc-system-head">
                <li>
                    <h1>课程体系</h1>
                    <h2>Curriculum system</h2>
                </li>
                <li>
                    <p><router-link to="/curriculumsystem/courseWritten">笔试</router-link></p>
                    <p><router-link to="/curriculumsystem/courseInterview">面试</router-link></p>
                </li>
            </ul>
        </div>
        <router-view></router-view>
        <!--公共底-->
        <my-footer></my-footer>
    </div>
</template>

<script>
    import Header from "@/components/common/Header"
    import Footer from "@/components/common/Footer"
    //import animate from "animate.css"
    export default {
        name:'CurriculumSystem',
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
    .CurriculumSystem{background: #f7f9fe;}
    .yc-system-content{width:1200px;margin: 0 auto;padding-bottom: 40px;}
    .yc-system-head{display: flex;justify-content: space-between;align-content: center;}

    .yc-system-head li:first-child h1{font-size:24px;font-weight: normal; margin-top: 30px;}
    .yc-system-head li:first-child h2{font-size:14px;font-weight: normal; margin-top: 10px;color:#999;}
    .yc-system-head li:last-child{display: flex;justify-content: space-between;align-content: center;}
    .yc-system-head li:last-child p a{display:block;color:#999;}
    .yc-system-head li:last-child p:last-child{margin-left:15px; }
    .yc-system-head li:last-child p a:hover{color:#4187e9;cursor: pointer;}
</style>
<!--
            <ul class="yc-system-head">
                <li>
                    <h1>课程体系</h1>
                    <h2>Curriculum system</h2>
                </li>
                <li>
                    <p>面试</p>
                    <p>笔试</p>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="">
                        <div class="iconfont"></div>
                        <p>学时：100课时</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <div class="iconfont"></div>
                        <p>价格：9000￥</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <div class="iconfont"></div>
                        <p>试听入口</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <div class="iconfont"></div>
                        <p>报名</p>
                    </a>
                </li>
            </ul>
-->



