<template>
    <div class="Course">
        <!--学员头-->
        <student-header :partent_to_width="partentwidth"></student-header>

        <div class="yc-course-content">
            <div class="yc-recording">
                <router-link to="">
                    录播记录<span class="iconfont iconarrow-2"></span>
                </router-link>
            </div>
            <ul class="yc-studyplan">
                <li><div>学习计划</div></li>
                <li><div>查看公告</div></li>
            </ul>

            <div class="yc-livebroadcast">
                <div class="yc-livebroadcast-left">
                    <ul>
                        <li><div>直播安排</div></li>
                        <li>
                            <p>2018年01月</p>
                            <div class="yc-livebroadcast-date">

                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li><div>公开</div></li>
                        <li>19：00</li>
                        <li>课程介绍</li>
                        <li>刑法21-刑法28</li>
                        <li>下载讲义</li>
                        <li>未开始</li>
                    </ul>
                    <ul>
                        <li>科目：刑法</li>
                        <li>讲师：吴越</li>
                        <li><img src="" alt=""></li>
                        <li @click="order">预约</li>
                        <li>进入直播</li>
                    </ul>
                    <ul class="yc-livebroadcastlist">
                        <li v-for="(item,index) in 3" :key="">
                            <div>LIVE</div>
                            <div>
                                <ul>
                                    <li>9:00</li>
                                    <li>八大导师为后盾，不惧法考</li>
                                </ul>
                                <ul>
                                    <li>科目：综合</li>
                                    <li>讲师：启成教育官方</li>
                                </ul>
                            </div>
                            <div>未看</div>
                            <div>回放</div>
                            <div class="yc-videonumber">
                                <p>1</p>
                                <p>2</p>
                                <p>3</p>
                                <p>4</p>
                                <p>5</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="yc-livebroadcast-right">
                    <div class="yc-checkin">
                        <h1>每日签到</h1>
                        <div>
                            <p>已连续签到<span>0</span>天</p>
                            <div class="iconfont iconjiangzhang"></div>
                            <h2>Lv1</h2>
                            <el-button type="primary" @click="checkin" style="width:100px;height:30px;margin-left: 50px;">签到</el-button>
                        </div>
                        <div>
                             <ul>
                                 <li class="yc-checkin-active">Lv1</li>
                                 <li>Lv2</li>
                                 <li>Lv3</li>
                                 <li>Lv4</li>
                                 <li>Lv5</li>
                             </ul>
                            <el-steps :active="active" align-center>
                                <el-step title="0天" icon="el-icon-location"></el-step>
                                <el-step title="3天" icon="el-icon-location"></el-step>
                                <el-step title="7天" icon="el-icon-location"></el-step>
                                <el-step title="15天" icon="el-icon-location"></el-step>
                                <el-step title="30天" icon="el-icon-location"></el-step>
                            </el-steps>

                        </div>
                    </div>
                    <ul class="yc-study-trajectory">
                        <li><div>学习轨迹</div></li>
                        <li>
                            <chart :options="orgOptions" :auto-resize="true" style="width:100%;height:100%;margin: 0 auto"></chart>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="book_city_title">
                <ul>
                    <li>全部课程</li>
                    <li></li>
                    <li>智能选课</li>
                </ul>
                <div>
                    <h1>教师：</h1>
                    <div>
                        <p>不限</p>
                        <p>数学</p>
                        <p>语文</p>
                        <p>外语</p>
                    </div>
                </div>
                <div>
                    <h1>课程：</h1>
                    <div>
                        <p>不限</p>
                        <p>数学</p>
                        <p>语文</p>
                        <p>外语</p>
                    </div>
                </div>
                <div>
                    <h1>班次：</h1>
                    <div>
                        <p>不限</p>
                        <p>数学</p>
                        <p>语文</p>
                        <p>外语</p>
                    </div>
                </div>
            </div>

            <div class="book_city_books">
                <div class="books_center">
                    <ul class="book_item qf" v-for="item in 7">
                        <li><img src="../../../static/images/yc_book2.png" alt=""></li>
                        <li>【配套讲解】华图公务员考试用书2019省考 公务员核心教材申论行测常 公务员核心教材申论行测常公务员核心教材申论行测常</li>
                        <li>
                            <div>
                                <div>
                                    <span>￥</span>
                                    <span>94</span>
                                    <span>.00</span>
                                </div>
                                <p>原价:<span><del>￥120.00</del></span></p>
                            </div>
                            <div class="iconfont icongouwuche"></div>
                        </li>
                    </ul>
                </div>
                <div class="Pagination">
                    <el-pagination
                            background
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage"
                            :page-size="100"
                            layout="prev, pager, next"
                            :total="1000" style="margin-bottom: 162px;">
                    </el-pagination>
                </div>
            </div>
        </div>
        <my-footer></my-footer>
        <!--报名弹窗-->
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
    </div>
</template>
<script>
    import Footer from "@/components/common/Footer"
    import StudentHeader from "@/components/common/StudentHeader"
    //import animate from "animate.css"
    export default {
        name:'Course',
        data(){
            return {
                partentwidth:1560, //给子组件传头部宽度

                active: 0,       //步骤条
                orgOptions : {},
                currentPage:2    //当前页
            }
        },
        components: {
            'my-footer':Footer,
            'student-header':StudentHeader,
        },
        mounted(){
            this.getData();
        },
        methods:{
            getData(){
                this.orgOptions = {          //学习轨迹
                    title : {
                        x : "center",
                    },
                    tooltip : {},
                    xAxis : {
                        data : ['12/04', '12/05', '12/06', '12/07', '12/08', '12/09', '12/10']
                    },
                    yAxis : {},
                    series : [
                        {
                            name : '成长值',
                            symbol: 'circle',
                            symbolSize: 10,
                            type : 'line',
                            smooth: true,
                            data : [3, 10, 20, 37, 50, 60,90],
                            itemStyle: {
                                normal: {
                                    color: '#fff',           // 拐点线条的颜色
                                    borderColor: '#7292f1', // 拐点边框颜色
                                }
                            },
                            lineStyle: {
                                normal: {
                                    color: '#7292f1',
                                }
                            }
                        },
                        {
                            name : '成长值',
                            type : 'bar',
                            data : [3, 10, 20, 37, 50, 60,90],
                            itemStyle: {
                                normal: {
                                    color: '#4187e9',
                                }
                            }
                        },
                    ]
                };
            },
            checkin() {
                //if (this.active++ > 2) this.active = 0;
                this.active=3;
            },
            order(){         //预约

            },
            handleCurrentChange(){    //当前页改变

            }
        }
    }
</script>
<style lang="less" scoped>
    .yc-qf:after{ content:"";display:block;clear:both}
    *{margin:0;padding:0;}
    .Course{background: #f7f9fe;}
    .yc-course-content{width:1560px;margin: 0 auto;}
    .yc-recording a{display:block;width:310px;height:50px;padding-left: 1250px;font-size: 18px;font-weight: bold;}
    .yc-recording a span{font-size: 15px;}
    .yc-studyplan{display: flex;justify-content: flex-start;align-items: center;
        height:50px;}
    .yc-studyplan li{height:100%;border:1px solid #e7ebee;box-sizing: border-box;background: #fff;}
    .yc-studyplan li:first-child{width:1055px;}
    .yc-studyplan li:last-child{width:490px;margin-left: 15px;}
    .yc-studyplan li div{height:22px;border-left: 6px solid #4187e9;font-size: 20px;font-weight: bold;margin-top: 15px;margin-left: 20px;padding-left:8px; }

    .yc-livebroadcast{margin-top: 17px;display: flex;justify-content: flex-start;}
    .yc-livebroadcast-left{width:1055px;height:485px;border:1px solid #e7ebee;background: #fff;
        box-sizing: border-box;}
    .yc-livebroadcast-left>ul:first-child{height:90px;display: flex;justify-content: flex-start;}
    .yc-livebroadcast-left>ul:first-child li:first-child div{height:22px;border-left: 6px solid #4187e9;
        font-size: 20px;font-weight: bold;margin-top: 33px;margin-left: 20px;padding-left:8px;}
    .yc-livebroadcast-left>ul:first-child li:last-child{margin-left:155px;display: flex;justify-content: flex-start;align-items: center;}
    .yc-livebroadcast-left>ul:first-child li:last-child p{height:90px;line-height: 90px;font-size:14px;}
    .yc-livebroadcast-left>ul:first-child li:last-child .yc-livebroadcast-date{margin-left:30px;width:660px;height:90px;}

    .yc-livebroadcast-left>ul:nth-child(2){height:55px;display: flex;justify-content: flex-start;align-items: center;}
    .yc-livebroadcast-left>ul:nth-child(2)>li{font-size:18px;width: 16.66%;text-align: center;}
    .yc-livebroadcast-left>ul:nth-child(2)>li:first-child div{font-size:18px;margin-left: 20px;width:68px;height:34px;line-height:34px;text-align:center;border: 1px solid #333;}
    .yc-livebroadcast-left>ul:nth-child(2)>li:nth-child(3){color:#4187e9;}
    .yc-livebroadcast-left>ul:nth-child(2)>li:nth-child(5):hover{cursor: pointer;color:#4187e9;}
    .yc-livebroadcast-left>ul:nth-child(3){width:1055px;height:40px;display: flex;justify-content: flex-start;align-items: center;position:relative;}
    .yc-livebroadcast-left>ul:nth-child(3)>li{font-size: 18px;}
    .yc-livebroadcast-left>ul:nth-child(3)>li:first-child{margin-left: 20px;}
    .yc-livebroadcast-left>ul:nth-child(3)>li:nth-child(2){margin-left: 115px;}
    .yc-livebroadcast-left>ul:nth-child(3)>li:nth-child(3){margin-left: 20px;}
    .yc-livebroadcast-left>ul:nth-child(3)>li:nth-child(3){width:40px;height:40px;background: #e7ebee;
        border-radius: 50%;}
    .yc-livebroadcast-left>ul:nth-child(3)>li:nth-child(3) img{width:40px;height:40px;}
    .yc-livebroadcast-left>ul:nth-child(3)>li:nth-child(4){position: absolute;right:230px;top:10px;}
    .yc-livebroadcast-left>ul:nth-child(3)>li:nth-child(5){position: absolute;right:62px;top:10px;}
    .yc-livebroadcast-left>ul:nth-child(3)>li:nth-child(4):hover,.yc-livebroadcast-left ul:nth-child(3) li:nth-child(5):hover{
    cursor: pointer;color:#4187e9;}

    .yc-livebroadcastlist{width:980px;height:240px;margin-top: 22px;}
    .yc-livebroadcastlist>li{margin-left: 20px; width:100%;height:80px;border-bottom: 1px solid #ddd;display: flex;justify-content: flex-start;align-items: center;}
    .yc-livebroadcastlist>li div:nth-child(1){color:#4187e9;border: 1px solid #4187e9;
        width: 50px;height:24px;box-sizing: border-box;text-align: center;line-height: 22px;}
    .yc-livebroadcastlist>li div:nth-child(2){margin-left: 10px;width:700px;}
    .yc-livebroadcastlist>li div:nth-child(2) ul{display: flex;justify-content: flex-start;align-items: center;}
    .yc-livebroadcastlist>li div:nth-child(2) ul:first-child li{font-size: 16px;}
    .yc-livebroadcastlist>li div:nth-child(2) ul:first-child li:last-child{margin-left: 10px;}
    .yc-livebroadcastlist>li div:nth-child(2) ul:last-child{margin-top: 5px;}
    .yc-livebroadcastlist>li div:nth-child(2) ul:last-child li{font-size: 14px;color:#ddd;}
    .yc-livebroadcastlist>li div:nth-child(2) ul:last-child li:last-child{font-size: 14px;color:#ddd;margin-left: 100px;}
    .yc-livebroadcastlist>li div:nth-child(4){margin-left: 20px;}
    .yc-livebroadcastlist>li div:nth-child(5){margin-left: 30px;}

    .yc-videonumber{display: flex;justify-content: flex-start;align-items: center;}
    .yc-videonumber p{width: 16px;height:22px;line-height:22px;text-align:center;margin-right: 5px;background: #f3c773;color:#fff;font-size:16px;}

    .yc-livebroadcast-right{width:490px;height:485px;margin-left: 15px;}
    .yc-livebroadcast-right .yc-checkin{padding: 10px 20px 5px 20px;background: #fff;
    box-sizing: border-box;border: 1px solid #e7ebee;}
    .yc-livebroadcast-right .yc-checkin>div:nth-child(2){height:44px;margin-left: 10px;display: flex;justify-content: flex-start;align-items: center;}
    .yc-livebroadcast-right .yc-checkin>h1{font-size:14px; }
    .yc-livebroadcast-right .yc-checkin>div:nth-child(2) p{font-size:14px;color:#999; }
    .yc-livebroadcast-right .yc-checkin>div:nth-child(2) p span{font-size:14px;color:#f3c773; }
    .yc-livebroadcast-right .yc-checkin>div:nth-child(2) div:nth-child(2){margin-left:97px;font-size: 20px;color:#f9dc88; font-weight: bold;}
    .yc-livebroadcast-right .yc-checkin>div:nth-child(2) h2{font-size:16px;color:#fda343;margin-left: 5px;}
    .yc-livebroadcast-right .yc-checkin>div:nth-child(3)>ul{height:30px;display: flex;justify-content: flex-start;align-items: center;}
    .yc-livebroadcast-right .yc-checkin>div:nth-child(3)>ul>li{width:20%;text-align: center;
        font-size:14px;color:#999;}

    .yc-livebroadcast-right .yc-study-trajectory{width:490px;height:299px;padding:20px;
        border: 1px solid #e7ebee;box-sizing: border-box;margin-top:15px; background: #fff;}
    .yc-livebroadcast-right>ul>li:first-child div{height:22px;border-left: 6px solid #4187e9;font-size: 20px;font-weight: bold;margin-top: 15px;padding-left:8px; }
    .yc-livebroadcast-right>ul>li:last-child{width: 100%;height:240px;}


    .book_city_title{width:1560px;height:300px;margin: 0 auto;border: 1px solid #d8e1e6;
        box-sizing: border-box;padding:0 20px;margin-top: 20px;background: #fff;}
    .book_city_title>ul{height:90px;width:1558px;display: flex;justify-content: flex-start;align-items: center;}
    .book_city_title>ul>li{font-size:20px; }
    .book_city_title>ul>li:first-child,.book_city_title>ul>li:last-child{border-radius: 5px;height:40px;
        line-height:40px;padding: 0 12px;}
    .book_city_title>ul li:first-child:hover{background: #4187e9;color:#fff;}
    .book_city_title>ul li:last-child:hover{background: #4187e9;color:#fff;}
    .book_city_title>ul li:first-child:hover{cursor: pointer;}
    .book_city_title>ul li:last-child:hover{cursor: pointer;}
    .book_city_title>ul li:nth-child(2){width: 2px;background: #333;height:23px;margin: 0 13px;}
    .book_city_title>div{height:60px;width:100%;border-bottom: 1px solid #d8e1e6;
        display: flex;justify-content: flex-start;align-items: center;}
    .book_city_title>div>div{display: flex;justify-content: flex-start;align-items: center;}
    .book_city_title>div h1{font-size: 16px;}
    .book_city_title>div>div p{font-size: 16px;padding:10px;height:22px;line-height:22px;
        margin-right:10px;border-radius: 5px;}
    .book_city_title>div>div p:hover{background: #4187e9;color:#fff;cursor: pointer;}


    .book_city_books{width:1560px;margin: 0 auto;margin-top: 20px;background: #fff;}
    .book_city_books .books_center{width:1200px;margin: 0 auto;min-height:1050px;}
    .book_item{float:left;width:287px;height:454px;border-radius: 8px;background: #f7f9fe;margin-top: 20px;margin-right: 17px;}
    .book_city_books .books_center>ul:nth-child(4n){margin-right:0; }
    .book_city_books .books_center>ul>li:first-child{width:287px;height:287px;}
    .book_city_books .books_center>ul>li:first-child img{display:block;width:287px;height:287px;}
    .book_city_books .books_center>ul>li:nth-child(2){width:253px;height:51px;text-align:left;margin:17px;
        font-size: 14px;overflow:hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;line-height:25px;}
    .book_city_books .books_center>ul>li:nth-child(3){display: flex;justify-content: flex-start;align-items:flex-start;height:82px;}
    .book_city_books .books_center>ul>li:nth-child(3)>div:first-child{margin-left: 17px;}
    .book_city_books .books_center>ul>li:nth-child(3) div:first-child>div>span{color:red;}
    .book_city_books .books_center>ul>li:nth-child(3) div:first-child>div>span:first-child{font-size:22.5px;text-align: left;}
    .book_city_books .books_center>ul>li:nth-child(3) div:first-child>div>span:nth-child(2){font-size:30px;}
    .book_city_books .books_center>ul>li:nth-child(3) div:first-child>div>span:nth-child(3){font-size:20px;}
    .book_city_books .books_center>ul>li:nth-child(3) div:last-child{font-size: 35px;margin-left: 120px;margin-top: 15px;}
    .book_city_books .books_center>ul>li:nth-child(3) div:last-child:hover{color:#4187e9;cursor: pointer;}
    .book_city_books .books_center>ul>li:nth-child(3) div:first-child>p{height:50px;margin-left: 3px;}

    .Pagination{height:100px;display: flex;justify-content:center;}
</style>
<!--

-->



