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
    .yc-qf:after{ content:"";display:block;clear:both}
    .CurriculumSystem{background: #f7f9fe;}
    .yc-system-content{width:1200px;margin: 0 auto;}
    .yc-system-head{display: flex;justify-content: space-between;align-content: center;}

    .yc-system-head li:first-child h1{font-size:24px;font-weight: normal; margin-top: 30px;}
    .yc-system-head li:first-child h2{font-size:14px;font-weight: normal; margin-top: 10px;color:#999;}
    .yc-system-head li:last-child{display: flex;justify-content:flex-start;padding-top: 60px;}
    .yc-system-head li:last-child p a{display:block;color:#999;font-size: 14px;}
    .yc-system-head li:last-child p:last-child{margin-left:15px; }
    .yc-system-head li:last-child p a:hover{color:#4187e9;cursor: pointer;}


</style>




