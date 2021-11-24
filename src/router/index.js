import Vue from 'vue'
import Router from 'vue-router'
import pageIndex from '@/components/pages/pageIndex'
import pageWorks from '@/components/pages/pageWorks'
import pageAbout from '@/components/pages/pageAbout'
import pageExperiment from '@/components/pages/pageExperiment'
import pageResearch from '@/components/pages/pageResearch'
import pageProject from '@/components/pages/pageProject'
import pageProjectEdit from '@/components/pages/pageProjectEdit'
import pageThesis from '@/components/pages/pageThesis'
import pageArts from '@/components/pages/pageArts'
import pageNft from '@/components/pages/pageNft'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: pageWorks
    }, {
      path: '/about',
      name: 'about',
      component: pageAbout
    }, {
      path: '/nft',
      name: 'nft',
      component: pageNft
    }, 
    {
      path: '/research',
      name: 'research',
      component: pageResearch
    },
     {
      path: '/experiment',
      name: 'experiment',
      component: pageExperiment
    }, {
      path: '/work',
      name: 'work',
      component: pageWorks
    }, {
      path: '/arts',
      name: 'arts',
      component: pageArts
    }, {
      path: '/manage',
      name: 'project_edit',
      component: pageProjectEdit
    }, {
      path: '/thesis',
      name: 'thesis',
      component: pageThesis
    }, {
      path: '/project/:id',
      name: 'project',
      component: pageProject
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition)
        } else {
          resolve({ x: 0, y: 0 })
        }
      }, 500)
    })

  }
})
