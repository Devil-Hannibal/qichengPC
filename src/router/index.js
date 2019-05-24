import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import My from '@/components/about/My'          //我们
import TalkMe from '@/components/about/TalkMe'  //联系我们
import JoinUs from '@/components/about/JoinUs'  //诚聘英才
import JoinDetails from '@/components/about/JoinDetails'  //诚聘英才


// // 题库
import QbHome from '@/components/questionBank/QbHome'  //题库首页

Vue.use(Router);

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
    {   //book路由
      path: '/book',
      name: 'book',
      component: () => import("@/components/book/Book-yc")
    },
    {   //book详情路由
      path: '/book/bookdetails',
      name: 'bookdetails',
      component: () => import("@/components/book/BookDetails-yc")
    },
    {   //资讯主模块路由
      path: '/information',
      name: 'information',
      component: () => import("@/components/information/Information-yc"),
      children: [
          {
              path: '/infornation',
              name: 'infor',
              component: () => import("@/components/information/Informationlist-yc")
          },
          {
              path: '/infornation/infor',
              name: 'infor',
              component: () => import("@/components/information/Informationlist-yc")
          },
      ]

    },
    {   //考试资讯详情路由
      path: '/infornation/infor/details',
      name: 'details',
      component: () => import("@/components/information/InformationDetails-yc")
    },
    {   //教师报考条件路由
      path: '/teachernroll',
      name: 'teachernroll',
      component: () => import("@/components/information/TeacherEnroll-yc")
    },
    {   //资讯页课程体系路由
      path: '/curriculumsystem',
      name: 'curriculumsystem',
      redirect:'/curriculumsystem/courseWritten',
      component: () => import("@/components/information/CurriculumSystem-yc/index"),
      children:[
          {                    //资讯页课程体系 笔试路由
              path: '/curriculumsystem/courseWritten',
              name: 'courseWritten',
              component: () => import("@/components/information/CurriculumSystem-yc/CourseWritten-yc"),
          },
          {                     //资讯页课程体系 面试路由
              path: '/curriculumsystem/courseInterview',
              name: 'courseInterview',
              component: () => import("@/components/information/CurriculumSystem-yc/CourseInterview-yc"),
          },

      ]
    },
    {   //注意事项路由
      path: '/note',
      name: 'note',
      component: () => import("@/components/information/Note-yc")
    },
    {   //导航页路由
      path: '/navpage',
      name: 'navpage',
      component: () => import("@/components/other/NavPage-yc")
    },
    {   //学校环境路由
      path: '/environment',
      name: 'environment',
      component: () => import("@/components/other/SchoolEnvironment-yc")
    },
    {   //购物车路由
      path: '/shopping',
      name: 'shopping',
      component: () => import("@/components/other/ShoppingCart-yc")
    },
  ]
})
