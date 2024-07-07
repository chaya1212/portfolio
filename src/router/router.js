import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // 根据实际路径调整
import Portfolio from '../components/PortfolioPage.vue'
import PortfolioIntro from '../components/PortfolioIntro.vue';
import About from '../components/About.vue';
import Services from '../components/Services.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/portfolio/:id',
    name: 'PortfolioIntro',
    component: PortfolioIntro,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  }
];

const router = createRouter({
  history: createWebHashHistory('portfolio'),
  routes,
});

export default router;
