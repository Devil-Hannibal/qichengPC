<template>
    <div class="Course">
        <div class="yc-course-content">











        </div>
    </div>


</template>
<script>
    //import animate from "animate.css"
    export default {
        name:'Course',
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
    .Course{}
    .yc-course-content{width:1560px;margin: 0 auto;}




</style>





