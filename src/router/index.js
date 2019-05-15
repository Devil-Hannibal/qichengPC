import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import My from '@/components/about/My'          //我们
import TalkMe from '@/components/about/TalkMe'  //联系我们
import JoinUs from '@/components/about/JoinUs'  //诚聘英才

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      
    },
    {
      path: '/my',
      name: 'my', 
      component: My, 
      redirect:'./talkMe',
      children: [
        { path: '/talkMe', name: 'talkMe', component: TalkMe },  //联系我们
        { path: '/joinUs', name: 'JoinUs', component: JoinUs }  //诚聘英才

      ]
    }
  ]
})
