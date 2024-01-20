import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../view/HomePage.vue'
import WorkPage from '../view/WorkPage01.vue'
import HudPage from '../view/WorkPage02.vue' 
import DesignWork from '../view/DesignWork.vue'
import AnimalRedesign from '../view/RedesignPage.vue'
import '../assets/scss/page.scss';
// 2. 
const routes = [
  { path: '/', name: 'HomePage', component: HomePage},
  { path: '/workpage', name: 'WorkPage', component: WorkPage},
  { path: '/hudpage', name: 'HudPage', component: HudPage},
  { path: '/designpage', name: 'DesignWork', component: DesignWork},
  { path: '/redesignpage', name: 'AnimalRedesign', component: AnimalRedesign}
]

// 3. 
const router = createRouter({
  history: createWebHashHistory(),  // 这里采用的是 hash 模式
  routes                            // 上面声明的路由规则
})

// 4. 
export default router
