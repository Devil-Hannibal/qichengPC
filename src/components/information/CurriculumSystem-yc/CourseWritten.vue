<template>
    <div class="CourseWritten">
        <ul>
            <li>
                <router-link to.stop="" >
                    <div class="iconfont"></div>
                    <p>学时：100课时</p>
                </router-link>
            </li>
            <li>
                <router-link to="">
                    <div class="iconfont"></div>
                    <p>价格：9000￥</p>
                </router-link>
            </li>
            <li>
                <router-link to="">
                    <div class="iconfont"></div>
                    <p>试听入口</p>
                </router-link>
            </li>
            <li>
                <router-link to="">
                    <div class="iconfont"></div>
                    <p>报名</p>
                </router-link>
            </li>
        </ul>
        <div>
            <p>大学英语六级考试（又称CET-6，全称为“College English Test-6”）是由国家统一出题的，统一收费，统一组织考试，用来评定应试人英语能力的全国性的考试，每年各举行两次。
                大学英语六级考试作为一项全国性的教学考试由“国家教育部高教司”主办，每年各举行两次。从2005年1月起，成绩满分为710分，凡考试成绩在220分以上的考生，由国家教育部高教司委托“全国大学英语六级考试委员会”发给成绩单。2007年1月起，六级考试不再接受非在校生报名。</p>
            <p><span>班级名称：</span>英语六级冲刺</p>
            <P><span>授课内容：</span>六级语法、口语实战、听力1000题、阅读题强化练习讲解、写作练习提升</P>
        </div>
        <ul>
            <li v-for="(item,index) in 3" :key="index">
                <router-link to="">
                    <!--<img src="../../../../../static/images/yc-CurriculumSystem.png" alt="">-->
                    <h1>课程图片1</h1>
                    <p>我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'CourseWritten',
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

    .CourseWritten{background: #f1f5f9;}




</style>
<!--

-->




