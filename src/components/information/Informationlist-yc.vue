<template>
    <div class="Informatiuonlist">
        <div class="yc-infor-list">
            <router-link class="yc-qf" v-for="(item,index) in 7" :to="'/infornation/infor/details?zid='+index" :key="index">
                <ul>
                    <li>我是考试资讯我是考试资讯我是考试</li>
                    <li>日期：2018.10.11</li>
                </ul>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Informatiuonlist ',
        data(){
            return {


            }
        },
        mounted(){
            //this.getData();
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

    .Informatiuonlist{}
    .yc-infor-list{width:1200px;margin: 0 auto;margin-top: 20px;}
    .yc-infor-list>a{display:block;float:left;height:120px;width:590px;border: 2px solid #999;box-sizing: border-box;
        display: flex;justify-content:space-between;align-items: center;margin-right:18px;margin-top: 20px;}
    .yc-infor-list>a:nth-child(even){margin-right: 0;}
    .yc-infor-list>a:hover{cursor: pointer;border: 2px solid #4187e9;}
    .yc-infor-list>a>ul:nth-child(1){margin-left: 29px;width:400px;}
    .yc-infor-list>a>ul:nth-child(1)>li:first-child{font-weight: bold;}
    .yc-infor-list>a>ul:nth-child(1)>li:last-child{color:#999;}
    .yc-infor-list>a:hover ul:nth-child(1)>li:first-child{color:#4187e9;}
    .yc-infor-list>a>ul:nth-child(2){height:116px;margin: 0 46px;display: flex;justify-content: flex-start;align-items: center;}
    .yc-infor-list>a>ul:nth-child(2)>li{background:#999;height:12px;width:12px;border-radius: 50%;}
    .yc-infor-list>a>ul:nth-child(2)>li:nth-child(2){height:18px;width:18px;margin: 0 5px;}
    .yc-infor-list>a:hover ul:nth-child(2)>li{background:#4187e9;}


</style>





