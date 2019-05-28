<template>
    <div class="TeacherData">
        <!--学员头-->
        <student-header :partent_to_width="partentwidth"></student-header>
        <!--公共头-->
        <my-header :titleBgColor="titleBgc" :titleWidth="TWidth"></my-header>
        <!--课程体系-->
        <div class="yc-teacherdata-center">
            <div class="yc-tdata-content">
                <img src="../../../static/images/yc-teacherdata1.png" alt="">
                <img src="../../../static/images/yc-xiaoming.jpg" alt="">
                <div>
                    <h1>刘涛&nbsp;<span>启成教育公共基础知识资深名师</span></h1>
                    <p>联系电话：<span>15659178769</span>&nbsp;<span>★★★★★</span>&nbsp;<span>9.8分</span>(<span><a href="">查看评分</a></span>)</p>
                    <p><a href="">查看详细资料</a><span class="iconfont iconxiajiantou"></span></p>
                </div>
                <ul>
                    <li :class="Personalclass" @click="clickPersonal">讲师个人简介</li>
                    <li :class="Courseclass" @click="clickCourse">历史课程</li>
                </ul>
                <div class="yc-content-select">
                    <div class="yc-select-personal" v-if="personal">
                        法学博士，公考教育研究与培训专家。主讲公共基础知识模块。拥有多年深厚公考培训经验，尤其对公共基础知识有深入研究，授课思路清晰，风趣幽默，善于通过大量案例启发式教学，使抽象问题具体化，复杂问题简单化，教学重点突出、课堂气氛活跃，受到学员一致好评。
                    </div>
                    <div class="yc-select-course" v-if="course">
                        <p v-for="(item,index) in 8" :key="index">
                            <span>刘涛-强化巩固-公基4</span>
                            <span>★★★★★</span>
                            <span>9.8分</span>(
                            <span><router-link to="">51人</router-link></span>)
                            <span>2017.12.07  19:00-21:00</span>
                        </p>
                    </div>
                </div>

            </div>
        </div>
        <!--公共底-->
        <my-footer></my-footer>
    </div>
</template>

<script>
    import Header from "@/components/common/Header"
    import Footer from "@/components/common/Footer"
    import StudentHeader from "@/components/common/StudentHeader"
    //import animate from "animate.css"
    export default {
        name:'TeacherData',
        data(){
            return {
                titleBgc:"#f7f9fe",  //头部颜色
                TWidth:1200,       //头部宽度
                partentwidth:1200,
                personal:true,
                course:false,
                Personalclass:'active',
                Courseclass:''

            }
        },
        components:{
            "my-header": Header,
            "my-footer": Footer,
            "student-header":StudentHeader,
        },
        mounted(){
            this.getData();
        },
        methods:{
            getData(){


            },
            clickPersonal(){
                this.personal=true;
                this.course=false;
                this.Personalclass='active';
                this.Courseclass='';
            },
            clickCourse(){
                this.personal=false;
                this.course=true;
                this.Personalclass='';
                this.Courseclass='active';
            },

        }
    }
</script>

<style lang="less" scoped>
    .yc-qf:after{ content:"";display:block;clear:both}
    .TeacherData{background: #f7f9fe;}
    .yc-teacherdata-center{width:1200px;margin: 0 auto;}
    .yc-tdata-content{margin-top: 40px;padding-bottom:77px;margin-bottom: 120px;background: #fff;position: relative;}
    .yc-tdata-content>img:first-child{width:100%;height:114px;}
    .yc-tdata-content>img:nth-child(2){position: absolute;top:94px;left:99px;width:132px;height:132px;border: 4px solid #fff;}
    .yc-tdata-content>div:nth-child(3){margin-left: 280px;}
    .yc-tdata-content>div:nth-child(3) h1{font-size: 24px;margin-top: 17px;font-weight: normal;}
    .yc-tdata-content>div:nth-child(3) h1 span{font-size: 14px;margin-left: 10px;font-weight: normal;color:#666;}
    .yc-tdata-content>div:nth-child(3)>p:nth-child(2){font-size: 14px;margin-top: 14px;color:#666;}
    .yc-tdata-content>div:nth-child(3)>p:nth-child(2)>span:nth-child(2){color:#f39700;font-size: 16px;margin-left: 8px;margin-right: 8px;}
    .yc-tdata-content>div:nth-child(3)>p:nth-child(2)>span:last-child>a{color:#4187e9;}
    .yc-tdata-content>div:nth-child(3)>p:nth-child(3){margin-top: 22px;}
    .yc-tdata-content>div:nth-child(3)>p:nth-child(3) a{font-size: 14px;margin-top: 22px;color:#666;}
    .yc-tdata-content>ul{margin-top:50px;height: 35px;width:1020px;display: flex;justify-content: flex-start;margin-left: 95px;border-bottom: 1px solid #d2d2d2;border-bottom: 1px solid #d2d2d2;box-sizing: border-box; }
    .yc-tdata-content>ul li{margin-left:65px;height: 34px;line-height:34px;text-align:center;border-bottom: 1px solid #d2d2d2;}
    .yc-tdata-content>ul li:first-child{margin-left: 0;}
    .yc-tdata-content>ul li:hover{cursor: pointer;}
    .yc-tdata-content>ul .active{border-bottom: 1px solid #4187e9;}
    .yc-select-personal{margin: 20px 97px;font-size: 14px;}
    .yc-select-course{margin: 20px 97px}
    .yc-select-course>p{height:50px;line-height:50px;border-bottom: 1px solid #d2d2d2;font-size: 18px;}
    .yc-select-course>p>span:nth-child(2){color:#f39700;font-size: 16px;margin-left: 44px;}
    .yc-select-course>p>span:nth-child(3){margin-left: 22px;}
    .yc-select-course>p>span:nth-child(4) a{color:#4187e9;}
    .yc-select-course>p>span:nth-child(5){margin-left: 22px;}
    .yc-select-course>p>span:last-child{color:#d2d2d2;font-size: 14px;}
</style>



