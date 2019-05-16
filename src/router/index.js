import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import My from '@/components/about/My'          //我们
import TalkMe from '@/components/about/TalkMe'  //联系我们
import JoinUs from '@/components/about/JoinUs'  //诚聘英才
import JoinDetails from '@/components/about/JoinDetails'  //诚聘英才


// // 题库
import QbHome from '@/components/questionBank/QbHome'  //题库首页

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      
    },
    // 底部链接跳转 部分路由
    {
      path: '/my',
      name: 'my', 
      component: My, 
      redirect:'./talkMe',
      children: [
        { path: '/talkMe', name: 'talkMe', component: TalkMe },  //联系我们
        { path: '/joinUs', name: 'JoinUs', component: JoinUs },  //诚聘英才
        { path: '/joinDetails', name: 'joinDetails', component: JoinDetails },  //诚聘详情

      ]
    },
    // 题库路由
    {
      path: '/qbHome', name: 'qbHome', component: QbHome  //路由首页
    },
  ]
})
