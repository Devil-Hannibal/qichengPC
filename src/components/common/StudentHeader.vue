<template>
    <div class="StudentHeader">
        <div class="yc-studentheader-center" :style="StudentHeaderStyle">
            <p>资询热线：0591-88315053(9:00-22:00)</p>
            <ul>
                <li>学员：我很好</li>
                <li><img src="../../../static/images/yc-xiaoming.jpg" alt=""></li>
                <li><span class="iconfont iconarrow-2"></span></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name:'StudentHeader',
        data(){
            return {
                StudentHeaderStyle:'width:1200px;' //父组件中的partentwidth给子组件传头部宽度 例：partentwidth:1200
            }
        },
        props:{
            partent_to_width:Number,
        },
        mounted(){
            this.getData();
        },
        methods:{
            getData(){
                this.StudentHeaderStyle=`width:${this.partent_to_width}px`
            },
        }
    }
</script>
<style lang="less" scoped>
    .yc-qf:after{ content:"";display:block;clear:both}
    *{margin:0;padding:0;}
    .StudentHeader{width:100%;height:60px;background: #fff;-webkit-box-shadow: 0 3px 5px #e7ebee;z-index: 999;}
    .yc-studentheader-center{height:60px;margin: 0 auto;
        display: flex;justify-content:space-between;align-items: center;}
    .yc-studentheader-center>p{font-size: 20px;}
    .yc-studentheader-center>ul{display: flex;justify-content:flex-start;align-items: center;}
    .yc-studentheader-center>ul>li:nth-child(2) img{margin-left: 10px;width:46px;height:46px;
    border-radius: 50%;}
    .yc-studentheader-center>ul>li:nth-child(2):hover{cursor: pointer;}
    .yc-studentheader-center>ul>li:nth-child(3){margin-left: 17px;}
</style>





