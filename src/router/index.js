import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import My from '@/components/about/My'          //我们
import TalkMe from '@/components/about/TalkMe'  //联系我们

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/my',
          name: 'my', 
          component: My, 
          redirect:'./talkMe',
          children: [
            { path: '/talkMe', name: 'talkMe', component: TalkMe }  //联系我们
          ]
        }
      ]
    }
  ]
})
