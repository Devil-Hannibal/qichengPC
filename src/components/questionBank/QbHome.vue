<template>
    <div class="qbHome">
        <!-- 头部 -->
        <my-header :titleBgColor="titleBgc" :titleWidth="TWidth"></my-header>
        <!-- 头部END -->
        <!-- 内容区域 -->
        <div class="qbHome_container">
            <aside>
                <!-- tab切换 -->
                <div class="tabNav">
                    <ul>
                        <li>经济</li>
                        <li>法规</li>
                        <li>管理</li>
                        <li>建筑实务</li>
                        <li>机电实务</li>
                        <li>公路实物</li>
                        <li>市政实物</li>
                        <li>通信实物</li>
                        <li>水利实物</li>
                     </ul>
                </div>
                <!-- tab切换END -->
            </aside>    
            <main></main>   
        </div>
        <!-- 内容区域END -->


        <!-- 通用尾部 -->
        <my-footer></my-footer>
        <!-- 通用尾部END -->

    </div>
</template>

<script>

import Header from './../common/Header'
import Footer from './../common/Footer'

export default {
    name:'qbHome',
    components:{
        'my-header':Header,
        'my-footer':Footer,
    },
    data(){
        return{
            titleBgc:'#f1f5f9',  //头部的背景颜色
            TWidth:1555,  ///头部的宽度
        }
    },
    

    
}
</script>

<style lang="less" scoped>
.qbHome{
    width: 100%;
    background-color: #f1f5f9;
    .qbHome_container{
        width: 1555px;
        margin: 0 auto;
        height: 1000px;
        display: flex;
        justify-content: space-between;
         // 左侧内容
        aside{
            width: 1000px;
            // tab切换
            .tabNav{
                background-color: #fafbfc;
                padding: 20px 18px;
                ul{
                    display: flex;
                    justify-content: space-between;
                    li{
                        font-size: 18px;
                        height: 40px;
                        line-height: 40px;
                        background-color: #fafbfc;
                        border-radius: 5px;
                        padding: 0 25px;
                        color: #999999;
                    }
                }
            }
        }
        //右侧内容
        main{
            
        }
       
    }
}

</style>


