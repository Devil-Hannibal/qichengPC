<template>
    <div class="CourseInterview">
        我是面试页，我是面试页，我是面试页，我是面试页，我是面试页，我是面试页，我是面试页，
        <ul class="yc-qf">
            <li v-for="(item,index) in 5" :key="index">
                <router-link to="">
                    <img src="../../../../static/images/yc-CurriculumSystem.png" alt="">
                </router-link>
            </li>
        </ul>


    </div>


</template>

<script>
    //import animate from "animate.css"
    export default {
        name:'CourseInterview',
        data(){
            return {


            }
        },
        components: {

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
    .CourseInterview{width:1200px;margin: 0 auto;}




</style>





