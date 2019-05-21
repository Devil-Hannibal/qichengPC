<template>
    <div class="TeacherEnroll">
        <!--公共头-->
        <my-header :titleBgColor="titleBgc" :titleWidth="TWidth"></my-header>

        <!--报考教师资格证的条件-->
        <div class="yc-Environment">
            <h1>报考教师资格证的条件</h1>
            <div>教室环境<span class="iconfont iconxiangxiajiantoushixin"></span></div>

            <p>

                We've been crafting beautiful websites, launching stunning brands and making clients happy for years.
                Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod lobortis aliquam. Aliquam in tortor enim.
                orci ut et lobortis aliquam. Aliquam in tortor enim.
                We've been crafting beautiful websites, launching stunning brands and making clients happy for years.Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod lobortis aliquam. Aliquam in tortor enim. orci ut et lobortis aliquam. Aliquam in tortor enim.
                We've been crafting beautiful websites, launching stunning brands and making clients happy for years.
                Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod lobortis aliquam. Aliquam in tortor enim.
                orci ut et lobortis aliquam. Aliquam in tortor enim.

                We've been crafting beautiful websites, launching stunning brands and making clients happy for years.
                Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod lobortis aliquam. Aliquam in tortor enim.
                orci ut et lobortis aliquam. Aliquam in tortor enim.
                We've been crafting beautiful websites, launching stunning brands and making clients happy for years.Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod lobortis aliquam. Aliquam in tortor enim. orci ut et lobortis aliquam. Aliquam in tortor enim.
                We've been crafting beautiful websites, launching stunning brands and making clients happy for years.
                Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod lobortis aliquam. Aliquam in tortor enim.
                orci ut et lobortis aliquam. Aliquam in tortor enim.
                We've been crafting beautiful websites, launching stunning brands and making clients happy for years.Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod lobortis aliquam. Aliquam in tortor enim. orci ut et lobortis aliquam. Aliquam in tortor enim.
                We've been crafting beautiful websites, launching stunning brands and making clients happy for years.Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod lobortis aliquam. Aliquam in tortor enim.
                orci ut et lobortis aliquam. Aliquam in tortor enim.
            </p>


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
        name:'TeacherEnroll',
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
    .TeacherEnroll{background: #f7f9fe;}
    .yc-Environment{width:1200px;margin: 0 auto;background: #fff;text-align: center;padding-bottom: 40px;position: relative;}
    .yc-Environment h1{height:24px;font-weight: normal;font-size:24px;padding-top: 60px;margin: 0 auto;}
    .yc-Environment div:nth-child(2){position: absolute;left:-20px;top:122px;width:215px;height:65px;text-align: center;line-height: 50px;
        background: url("../../../static/images/yc-environment.png") no-repeat;font-size:18px;color:#fff; }
    .yc-Environment div:nth-child(2) span{font-size:13px;color:#fff;margin-left:15px; }
    .yc-Environment>p{width: 1128px;padding:36px;font-size: 18px;text-align: left;margin-top: 120px;
        color:#666;line-height: 25px;border-top: 1px solid #ddd;}
</style>



