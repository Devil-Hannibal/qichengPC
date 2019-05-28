<template>
    <div class="Shoppings">
        <!--公共头-->
        <my-header :titleBgColor="titleBgc" :titleWidth="TWidth"></my-header>
        <!--购物车列表-->
        <div class="yc-ShoppingCart-table">
            <div class="yc-table-select">
                <p>全部课程&nbsp;8</p>
            </div>
            <el-table :data="shoppingData" style="width: 100%;margin-bottom: 20px;">
                <el-table-column prop="course" label="全选" type="selection" width="100" align="center"></el-table-column>
                <el-table-column label="商品信息" align="center">
                    <template slot-scope="scope">
                        <img :src="scope.row.shoppingImg" alt="" style="width:99px;height:99px;border: 1px solid #d2d2d2;background: #999;">
                        <p style="margin-left:10px;">{{scope.row.name}}</p>
                    </template>
                </el-table-column>
                <el-table-column prop="date" label="有效期" width="120" align="center"></el-table-column>
                <el-table-column prop="univalent" label="单价(元)" width="120" align="center"></el-table-column>
                <el-table-column label="数量" width="120" align="center">
                    <template slot-scope="scope">
                        <el-input-number size="mini" v-model="scope.row.num"></el-input-number>
                    </template>
                </el-table-column>
                <el-table-column prop="Subtotal" label="小计(元)" width="120" align="center"></el-table-column>
                <el-table-column prop="download" label="操作" width="120" align="center">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <h1 style="position: absolute;top:15px;left:60px;font-size: 14px;">全选</h1>
            
            <ul class="yc-go-buy">
                <li>
                    <el-checkbox v-model="buyAllChecked"></el-checkbox>
                </li>
                <li>全选</li>
                <li>删除</li>
                <li>清空购物车</li>

                <li>共有<span>5</span>件商品</li>
                <li>总计：<span>￥6600.00</span></li>
                <li>去付款</li>
            </ul>
        </div>
        <!--公共底-->
        <my-footer></my-footer>
    </div>
</template>

<script>
    import Header from "@/components/common/Header"
    import Footer from "@/components/common/Footer"
    export default {
        name:'Shoppings',
        data(){
            return {
                titleBgc:"#f1f5f9",  //头部颜色
                TWidth:1200,           //头部宽度
                buyAllChecked:false,        //去付款全选

                shoppingData: [
                {
                    shoppingImg:'../../../static/images/yc-course.png',
                    name: '一建-VIP菁英内训班-法规-单科 (包含直播)',
                    date: '2018-01-20',
                    univalent: "1000.00",
                    number:1,
                    Subtotal:"1000.00",
                    num:1
                },
                {
                    shoppingImg:'../../../static/images/yc-course.png',
                    name: '一建-VIP菁英内训班-法规-单科 (包含直播)',
                    date: '2018-01-20',
                    univalent: "1000.00",
                    number:1,
                    Subtotal:"1000.00",
                    num:1
                },
                {
                    shoppingImg:'../../../static/images/yc-course.png',
                    name: '一建-VIP菁英内训班-法规-单科 (包含直播)',
                    date: '2018-01-20',
                    univalent: "1000.00",
                    number:1,
                    Subtotal:"1000.00",
                    num:1
                },
                {
                    shoppingImg:'../../../static/images/yc-course.png',
                    name: '一建-VIP菁英内训班-法规-单科 (包含直播)',
                    date: '2018-01-20',
                    univalent: "1000.00",
                    number:1,
                    Subtotal:"1000.00",
                    num:1
                },

                ],



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
            handleClick(res){
                console.log(res);
            }
        }
    }
</script>

<style lang="less" scoped>
    .yc-qf:after{ content:"";display:block;clear:both}
    *{margin:0;padding:0;}
    .Shoppings{background: #f1f5f9;}
    .yc-ShoppingCart-table{width:1200px;margin: 0 auto;position: relative;margin-top: 39px;}
    .yc-table-select{display: flex;justify-content: flex-start;position: absolute;left:0;top:-39px;z-index: 666;}
    .yc-table-select p{height:40px;line-height:40px;margin-right:80px;color:#999;font-size: 20px;
        border-bottom: 1px solid #d2d2d2;box-sizing: border-box;color:#4187e9;}

    .yc-go-buy{width:1200px;margin: 0 auto;height:70px;border: 1px solid #d2d2d2;
        display: flex;justify-content:flex-start;align-items: center;position: relative;}
    .yc-go-buy li{font-size: 14px;margin-left: 18px;}
    .yc-go-buy li:nth-child(2){margin-left: 10px;}
    .yc-go-buy li:nth-child(5){margin-left: 480px;}
    .yc-go-buy li:nth-child(5) span{font-size: 16px;color:#e84284;}
    .yc-go-buy li:nth-child(6) span{font-size: 20px;color:#e84284;}
    .yc-go-buy li:nth-child(7){height:68px;width: 240px;line-height:68px;text-align:center;
        background: #efefef;position: absolute;top:1px;right:1px;font-size: 24px;color:#e84284;}
</style>
<style>
    .Shoppings .el-table{background:none !important;}
    .Shoppings .el-table td,.Shoppings .el-table th.is-leaf{border-color: #d2d2d2;}
    .Shoppings .el-table tr{background: none !important;}
    .Shoppings .el-table__body{border-top: 1px solid #d2d2d2 !important;
        border-top: 1px solid #d2d2d2 !important;
        box-sizing: border-box !important;}
    .Shoppings .el-table__header{
        border-top: 1px solid #d2d2d2 !important;box-sizing: border-box !important;}
    .Shoppings .is-leaf{background: #eeeeee !important;}
    .Shoppings .is-leaf .cell{color:#333;font-size: 14px;}
    .Shoppings .cell{display: flex !important;justify-content: center !important;align-content: center !important;}     /*每一列内容*/
    .Shoppings .el-table__row .is-center:nth-child(2) .cell{display: flex !important;align-content: center !important;justify-content: flex-start !important;}/*第二列内容*/

</style>





