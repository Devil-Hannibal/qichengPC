<template>
    <div class="CourseWritten">
        <ul>
            <li>
                <router-link to="" >
                    <div class="iconfont iconweb-icon-"></div>
                    <p>学时：100课时</p>
                </router-link>
            </li>
            <li>
                <router-link to="">
                    <div class="iconfont iconjiaqian"></div>
                    <p>价格：9000￥</p>
                </router-link>
            </li>
            <li>
                <router-link to="">
                    <div class="iconfont iconerji"></div>
                    <p>试听入口</p>
                </router-link>
            </li>
            <li @click="signUp">
                <router-link to="">
                    <div class="iconfont iconrenyuanbaoming"></div>
                    <p>报名</p>
                </router-link>
            </li>
        </ul>

        <div>
            <p>大学英语六级考试（又称CET-6，全称为“College English Test-6”）是由国家统一出题的，统一收费，统一组织考试，用来评定应试人英语能力的全国性的考试，每年各举行两次。
                大学英语六级考试作为一项全国性的教学考试由“国家教育部高教司”主办，每年各举行两次。
                从2005年1月起，成绩满分为710分，凡考试成绩在220分以上的考生，由国家教育部高教司委托“全国大学英语六级考试委员会”发给成绩单。2007年1月起，六级考试不再接受非在校生报名。
            </p>
            <p>班级名称：英语六级冲刺</p>
            <P>授课内容：六级语法、口语实战、听力1000题、阅读题强化练习讲解、写作练习提升</P>
        </div>

        <ul class="yc-qf">
            <li v-for="(item,index) in 5" :key="index">
                <router-link to="">
                    <img src="../../../../static/images/yc-CurriculumSystem.png" alt="">
                    <h1>课程图片1</h1>
                    <p>我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题</p>
                </router-link>
            </li>
        </ul>

        <el-dialog title="填写报名信息" :visible.sync="centerDialogVisible" width="30%" center>
            <div style="color:#4187e9;font-size:16px;margin-top: 20px;">报名信息：</div>
            <div style="margin-top: 20px;">
                <el-input v-model="input" placeholder="姓名："></el-input>
            </div>
            <div style="margin-top: 10px;">
                <el-input v-model="input" placeholder="联系电话："></el-input>
            </div>
            <div style="color:#4187e9;font-size:16px;margin-top: 20px;">报名课程信息：</div>
            <div style="margin-top: 20px;">
                <el-input v-model="input" placeholder="课程名称："></el-input>
            </div>
            <div style="margin-top: 10px;">
                <el-input v-model="input" placeholder="报名批次：">

                </el-input></div>
            <div style="margin-top: 20px;">
                <el-button type="primary" @click="signUpSubmit" style="width: 100%;height:40px;">报名</el-button>
            </div>
        </el-dialog>

        <el-dialog class="yc-DialogVisibleA" title="恭喜你已报名成功！" :visible.sync="centerDialogVisibleA" width="30%" center>    <!--报名成功弹框-->
            <div style="width: 100%;height:1px;background: #999;"></div>
            <div style="margin-top: 33px;font-size: 14px;text-align: center;color:#999;">我们将秉承学员至上，用心服务</div>
            <div style="margin-top: 26px;text-align: center;">
                <el-button type="primary" @click="centerDialogVisibleA = false" style="width: 30%;height:40px;">去购买</el-button>
            </div>
        </el-dialog>                                                                                                <!--报名成功弹框结束-->
    </div>
</template>

<script>
    export default {
        name:'CourseWritten',
        data(){
            return {
                centerDialogVisible: false,
                centerDialogVisibleA:false,
                input:'',
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
            signUp(){
                this.centerDialogVisible=true;
            },
            signUpSubmit(){
                this.centerDialogVisible=false;
                setTimeout(()=>{
                    this.centerDialogVisibleA=true;
                },500);

            }
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
    .CourseWritten{width: 1200px;margin: 0 auto;}

    .CourseWritten ul:first-child{height: 160px;width:100%;display: flex;justify-content: flex-start;align-content: center;margin-top: 85px;}
    .CourseWritten ul:first-child>li{width:25%;height:160px;border-right: 1px solid #999;box-sizing: border-box;}
    .CourseWritten ul:first-child>li:last-child{border-right: none;}
    .CourseWritten ul:first-child>li:first-child:hover a{cursor:default;}
    .CourseWritten ul:first-child>li:nth-child(2):hover a{cursor:default;}
    .CourseWritten ul:first-child>li>a{display:block;width: 100%;height:100%;text-align: center;}
    .CourseWritten ul:first-child>li>a div{font-size: 45px;color:#999;margin-top: 30px;}
    .CourseWritten ul:first-child>li>a p{width: 100%;}
    .CourseWritten ul:first-child>li:hover a div{color:#4187e9;}
    .CourseWritten ul:first-child>li:hover a p{color:#4187e9;}
    .CourseWritten ul:first-child>li:nth-child(1)>a div{font-size: 50px;}
    .CourseWritten ul:first-child>li:nth-child(2)>a div{font-size: 35px;}
    .CourseWritten ul:first-child>li:nth-child(3)>a div{font-size: 45px;}
    .CourseWritten ul:first-child>li:nth-child(4)>a div{font-size: 40px;}
    .CourseWritten ul:first-child>li a p{margin-top:40px;font-size: 25px;color:#999;}

    .CourseWritten>div:nth-child(2){height:250px;width:100%;border-top:1px solid #999;border-bottom: 1px solid #999;box-sizing:border-box;
        margin-top: 50px;padding-top:70px;padding-bottom: 45px;overflow: hidden;}
    .CourseWritten>div:nth-child(2)>p{font-size: 14px;width: 100%;}
    .CourseWritten>div:nth-child(2)>p:nth-child(2){margin-top: 35px;}
    .CourseWritten>div:nth-child(2)>p:nth-child(3){margin-top: 10px;}

    .CourseWritten ul:nth-child(3){width: 100%;margin-top: 40px;}
    .CourseWritten ul:nth-child(3)>li{float: left;height:380px;width:378px;margin-right:30px;}
    .CourseWritten ul:nth-child(3)>li:nth-child(3n){margin-right: 0;}
    .CourseWritten ul:nth-child(3)>li>a{display: block;width:100%;height:100%;}
    .CourseWritten ul:nth-child(3)>li>a img{width:378px;height:230px;}
    .CourseWritten ul:nth-child(3)>li>a h1{margin-top: 30px;font-size: 18px;}
    .CourseWritten ul:nth-child(3)>li>a p{margin-top: 23px;font-size: 14px;height:40px;width: 100%;
        overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;}

</style>
<style>
    /*报名弹出修改*/
    .CourseWritten .el-dialog__header{background:#4187e9 !important;}
    .CourseWritten .el-dialog__title{color:#fff;}
    .CourseWritten .el-dialog__close{color:#fff;}
    /*报名成功弹出修改*/
    .CourseWritten .yc-DialogVisibleA .el-dialog__header{background:#fff !important;}
    .CourseWritten .yc-DialogVisibleA .el-dialog__title{color:#999;}
    .CourseWritten .yc-DialogVisibleA .el-dialog__close{color:#999;}
    .CourseWritten .yc-DialogVisibleA .el-dialog{border-radius: 10px;}
    .CourseWritten .yc-DialogVisibleA .el-dialog__header{border-radius: 10px;}


</style>





