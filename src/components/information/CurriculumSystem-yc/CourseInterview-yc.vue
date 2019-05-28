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
    .yc-qf:after{ content:"";display:block;clear:both}
    *{margin:0;padding:0;}
    .CourseInterview{width:1200px;margin: 0 auto;}
</style>





