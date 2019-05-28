<template>
    <div class="CoursePlaybackRecord">
        <!--学员头-->
        <student-header :partent_to_width="partentwidth"></student-header>
        <!--公共头-->
        <my-header :titleBgColor="titleBgc" :titleWidth="TWidth"></my-header>

        <!--报考教师资格证的条件-->
        <div class="yc-record-center">
            <h1>录播观看记录</h1>
            <div>学员至上，用心服务<span class="iconfont iconxiangxiajiantoushixin"></span></div>
            <div>
                <ul class="yc-livebroadcastlist" :style="livebroadcastlistHeight">
                    <li v-for="(item,index) in 10" :key="">
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
                        <div>2018年03月01日 晚上9:00</div>
                        <div>下载讲义</div>
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
            <div @click="checkmore">
                查看更多<span :class="upOrDown"></span>
            </div>


        </div>
        <!--公共底-->
        <my-footer></my-footer>
    </div>
</template>

<script>
    import StudentHeader from "@/components/common/StudentHeader"
    import Header from "@/components/common/Header"
    import Footer from "@/components/common/Footer"
    //import animate from "animate.css"
    export default {
        name:'CoursePlaybackRecord',
        data(){
            return {
                partentwidth:1200,     //学员头宽度
                titleBgc: "#f1f5f9", //公共头背景颜色
                TWidth:1200,    //公共头宽度
                titleBgc:"#f7f9fe",  //头部颜色
                TWidth:1200,       //头部宽度
                livebroadcastlistHeight:'',
                ifhidden:false,
                upOrDown:'iconfont iconarrow-2'
            }
        },
        components:{
            'student-header':StudentHeader,
            "my-header": Header,
            "my-footer": Footer
        },
        mounted(){
            this.getData();
        },
        methods:{
            getData(){


            },
            checkmore(){
                if(this.ifhidden==false){
                    this.livebroadcastlistHeight=`height:800px`;
                    this.upOrDown=`iconfont iconarrow-up`;
                    this.ifhidden=true;
                }else{
                    this.livebroadcastlistHeight=`height:400px`;
                    this.upOrDown=`iconfont iconarrow-2`;
                    this.ifhidden=false;
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .yc-qf:after{ content:"";display:block;clear:both}
    *{margin:0;padding:0;}
    .CoursePlaybackRecord{background: #f7f9fe;}
    .yc-record-center{width:1200px;margin: 0 auto;background: #fff;text-align: center;
        padding-bottom: 40px;position: relative;min-height:736px;}
    .yc-record-center>h1{height:24px;font-weight: normal;font-size:24px;padding-top: 60px;margin: 0 auto;}
    .yc-record-center>div:nth-child(2){position: absolute;left:-20px;top:122px;width:215px;height:65px;text-align: center;line-height: 50px;
        background: url("../../../static/images/yc-environment.png") no-repeat;font-size:18px;color:#fff; }
    .yc-record-center>div:nth-child(2) span{font-size:13px;color:#fff;margin-left:15px; }
    .yc-record-center>div:nth-child(3){width: 1128px;padding:36px;margin-top: 120px;border-top: 1px solid #ddd;border-bottom: 1px solid #ddd;box-sizing: border-box;}

    .yc-livebroadcastlist{width:100%;height:400px;overflow: hidden;}
    .yc-livebroadcastlist>li{margin-left: 20px; width:100%;height:80px;display: flex;justify-content: flex-start;align-items: center;}
    .yc-livebroadcastlist>li>div:nth-child(1){color:#4187e9;border: 1px solid #4187e9;
        width: 50px;height:24px;box-sizing: border-box;text-align: center;line-height: 22px;}
    .yc-livebroadcastlist>li>div:nth-child(2){margin-left: 10px;width:420px;}
    .yc-livebroadcastlist>li>div:nth-child(2) ul{display: flex;justify-content: flex-start;align-items: center;}
    .yc-livebroadcastlist>li>div:nth-child(2) ul:first-child li{font-size: 16px;}
    .yc-livebroadcastlist>li>div:nth-child(2) ul:first-child li:last-child{margin-left: 10px;}
    .yc-livebroadcastlist>li>div:nth-child(2) ul:last-child{margin-top: 5px;}
    .yc-livebroadcastlist>li>div:nth-child(2) ul:last-child li{font-size: 14px;color:#d2d2d2;}
    .yc-livebroadcastlist>li>div:nth-child(2) ul:last-child li:last-child{font-size: 14px;color:#d2d2d2;margin-left: 100px;}
    .yc-livebroadcastlist>li>div:nth-child(3){color:#d2d2d2;width:240px;}
    .yc-livebroadcastlist>li>div:nth-child(4){color:#d2d2d2;}
    .yc-livebroadcastlist>li>div:nth-child(5){margin-left: 60px;}
    .yc-livebroadcastlist>li>div:nth-child(6){margin-left: 60px;}
    .yc-videonumber{display: flex;justify-content: flex-start;align-items: center;}
    .yc-videonumber p{width: 16px;height:22px;line-height:22px;text-align:center;margin-right: 5px;background: #f3c773;color:#fff;font-size:16px;}

    .yc-record-center>div:nth-child(4){width:70px;color:#4187e9;
        margin: 0 auto;margin-top: 36px;border-bottom: 1px solid #fff;}
    .yc-record-center>div:nth-child(4):hover{border-bottom: 1px solid #4187e9;cursor: pointer;}
</style>



