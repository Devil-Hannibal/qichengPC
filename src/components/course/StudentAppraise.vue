<template>
    <div class="StudentAppraise">
        <!--学员头-->
        <student-header :partent_to_width="partentwidth"></student-header>
        <!--公共头-->
        <my-header :titleBgColor="titleBgc" :titleWidth="TWidth"></my-header>
        <!--课程体系-->
        <div class="studentappraise-center">
            <div class="yc-appraise-content">
                <img src="../../../static/images/yc-teacherdata1.png" alt="">
                <img src="../../../static/images/yc-xiaoming.jpg" alt="">
                <ul>
                    <li>
                        <el-rate
                                v-model="appraiseValue"
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}">
                        </el-rate>
                        <div>110个评分</div>
                    </li>
                    <li>
                        <el-rate
                                v-model="toAppraise"
                                :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                        </el-rate>
                        <div>
                            <el-progress :percentage="progressValue" :show-text="false" ></el-progress>
                        </div>
                    </li>
                    <li>
                        <div class="Appraiselist" v-for="(item,index) in 3" :key="index">
                            <p>真不知道老师在说啥...真不知道老师在说啥...真不知道老师在说啥...
                                真不知道老师在说啥...真不知道老师在说啥...真不知道老师在说啥...真不知道老师在说啥...
                                真不知道老师在说啥...真不知道老师在说啥...
                            </p>
                            <div>
                                <p>草莓是我</p>
                                <el-rate
                                        v-model="appraiseValue"
                                        disabled
                                        show-score
                                        text-color="#ff9900"
                                        score-template="{value}">
                                </el-rate>
                                <p>三天前&nbsp;21:00</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <!--分页-->
                <div class="Pagination">
                    <el-pagination
                            background
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage1"
                            :page-size="100"
                            layout="prev, pager, next"
                            :total="1000" style="margin-bottom: 162px;">
                    </el-pagination>
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
        name:'StudentAppraise',
        data(){
            return {
                titleBgc:"#f7f9fe",  //头部颜色
                TWidth:1200,       //头部宽度
                partentwidth:1200,
                personal:true,
                course:false,
                Personalclass:'active',
                Courseclass:'',
                appraiseValue: 3.3,     //评价值
                toAppraise:null,      //评分值
                progressValue:90,   //进度条值

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
                this.progressValue=this.appraiseValue*20;

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
    .StudentAppraise{background: #f7f9fe;}
    .studentappraise-center{width:1200px;margin: 0 auto;}

    .yc-appraise-content{margin-top: 40px;/*padding-bottom:77px;*/margin-bottom: 120px;background: #fff;position: relative;}
    .yc-appraise-content>img:first-child{width:100%;height:114px;}
    .yc-appraise-content>img:nth-child(2){position: absolute;top:94px;left:500px;width:132px;height:132px;border: 4px solid #fff;}
    .yc-appraise-content>ul{padding: 220px 100px 80px 100px;}
    .yc-appraise-content>ul li:first-child{display: flex;justify-content: flex-start;}
    .yc-appraise-content>ul li:first-child>div:last-child{font-size: 14px;margin-left: 15px;}
    .yc-appraise-content>ul li:nth-child(2){margin-top: 25px;display: flex;justify-content: flex-start;}
    .yc-appraise-content>ul li:nth-child(2)>div:last-child{width:800px;margin-top: 7px;}
    .yc-appraise-content>ul li:nth-child(3){margin-top: 55px;}
    .Appraiselist{margin-bottom: 55px;}
    .Appraiselist>div{display: flex;justify-content: flex-start;align-items: center;}
    .Appraiselist>div>p{color:#999;}
    .Appraiselist>div>p:first-child{width:100px;text-align: left;}
    .Appraiselist>div>p:last-child{margin-left: 20px;}

    .Pagination{width:100%;height:100px;display: flex;justify-content:center;align-items: center;}
</style>
<style>
    .StudentAppraise .el-progress-bar__inner{background-color:#99a9bf;}
</style>


