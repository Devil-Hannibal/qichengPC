<template>
    <div class="Note">
        <!--公共头-->
        <my-header :titleBgColor="titleBgc" :titleWidth="TWidth"></my-header>
        <!--注意事项-->
        <div class="yc-note-content">
            <ul class="yc-note-head">
                <li>
                    <h1>考试注意事项</h1>
                    <h2>Examination attention</h2>
                </li>
                <li>
                    <p><router-link to="" @click="Written">笔试</router-link></p>
                    <p><router-link to="" @click="Interview">面试</router-link></p>
                </li>
            </ul>

            <div class="yc-note-table">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="course" label="科目" width="180" align="center"></el-table-column>
                    <el-table-column prop="date" label="考试时间" width="180" align="center"></el-table-column>
                    <el-table-column prop="book" label="参考用书" align="center"></el-table-column>
                    <el-table-column prop="download" label="大纲下载" width="180" align="center">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" plain type="primary" size="small">下载入口</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column prop="shape" label="形式" width="180" align="center"></el-table-column>
                </el-table>
            </div>



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
        name:'Note',
        data(){
            return {
                titleBgc:"#f7f9fe",  //头部颜色
                TWidth:1200,           //头部宽度
                TabBoolean:true,      //笔试or面试的切换

                tableData: [{
                    course: '英语六级',
                    date: '2018.01.20',
                    book: '英语六级大纲',
                    shape:'闭卷 听力'
                },{
                    course: '英语六级',
                    date: '2018.01.20',
                    book: '英语六级大纲',
                    shape:'闭卷 听力'
                },{
                    course: '英语六级',
                    date: '2018.01.20',
                    book: '英语六级大纲',
                    shape:'闭卷 听力'
                },{
                    course: '英语六级',
                    date: '2018.01.20',
                    book: '英语六级大纲',
                    shape:'闭卷 听力'
                },{
                    course: '英语六级',
                    date: '2018.01.20',
                    book: '英语六级大纲',
                    shape:'闭卷 听力'
                }]
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
            handleClick(row) {

            }
        }
    }
</script>

<style lang="less" scoped>
    .yc-qf:after{ content:"";display:block;clear:both}
    .Note{background: #f7f9fe;}
    .yc-note-content{width:1200px;margin: 0 auto;}
    .yc-note-head{height:87px;display: flex;justify-content: space-between;align-content: center;background: #fff;}
    .yc-note-head li:first-child{margin-left: 40px;}
    .yc-note-head li:first-child h1{font-size:24px;font-weight: normal; margin-top: 25px;}
    .yc-note-head li:first-child h2{font-size:14px;font-weight: normal; margin-top: 10px;color:#999;}
    .yc-note-head li:last-child{display: flex;justify-content:flex-start;margin-top: 35px;margin-right: 40px;}
    .yc-note-head li:last-child p a{display:block;color:#999;font-size: 14px;}
    .yc-note-head li:last-child p:last-child{margin-left:15px; }
    .yc-note-head li:last-child p a:hover{color:#4187e9;cursor: pointer;}

    .yc-note-table{margin-top: 10px;margin-bottom: 60px;}
</style>
<style>
    .Note .is-leaf .cell{font-size: 16px !important;color:#333;font-weight: normal;}
</style>


