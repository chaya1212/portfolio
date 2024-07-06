<template>
    <section class="section site-portfolio py-5">
        <div class="container">
            <div class="row mb-5 align-items-center">
                <div class="col-md-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-up">
                    <h2>Hey, I'm chaya</h2>
                    <p class="mb-0">UIUX | Photography | Graphics</p>
                </div>
                <div class="col-md-12 col-lg-6 text-start text-lg-end" data-aos="fade-up" data-aos-delay="100">
                    <div id="filters" class="filters">
                        <a href="#" class="filter-link" @click.prevent="filterItems('All')">All</a>
                        <a href="#" class="filter-link" @click.prevent="filterItems('Web')">Web</a>
                        <a href="#" class="filter-link" @click.prevent="filterItems('Design')">Design</a>
                        <a href="#" class="filter-link" @click.prevent="filterItems('Motion')">Motion</a>
                        <a href="#" class="filter-link" @click.prevent="filterItems('Photography')">Photography</a>
                    </div>
                </div>
            </div>
            <div id="portfolio-grid" class="row no-gutter" data-aos="fade-up" data-aos-delay="200">
                <PortfolioItem v-for="item in filteredItems" :key="item.id" :item="item" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import PortfolioItem from './PortfolioItem.vue';

const portfolioItems = ref([
    {
        id: 1,
        category: 'Web',
        title: 'Avatar:頭像生成器',
        description: '專案時程管理｜UI設計｜切版',
        imageUrl: '/static/images/web/avatar_mockup.png',
        link: '/portfolio/1',
    },
    {
        id: 2,
        category: 'Web',
        title: '企業形象官網：綠果方洲',
        description: 'UI設計｜切版｜前端特效',
        imageUrl: '/static/images/web/green_mockup.png',
        link: '/portfolio/2',
    },
    {
        id: 3,
        category: 'Motion',
        title: '官網動態形象影片',
        description: '',
        imageUrl: '/static/images/Motion/img-motion01.png',
        link: '/portfolio/3',
        
    },
    {
        id: 4,
        category: 'Design',
        title: 'DM設計：幼兒體適能',
        description: '',
        imageUrl: '/static/images/Design/design_01.png',
        link: '/portfolio/4',
        
    },
    {
        id: 5,
        category: 'Design',
        title: '名片設計：小春日和',
        description: '',
        imageUrl: '/static/images/Design/design_04.png',
        link: '/portfolio/5',
    },
    {
        id: 6,
        category: 'Design',
        title: '看板設計：錦春日式料理',
        description: '',
        imageUrl: '/static/images/Design/design_03.png',
        link: '/portfolio/6',
        
    },
    {
        id: 7,
        category: 'Design',
        title: '菜單型錄：小春日和',
        description: '',
        imageUrl: '/static/images/Design/design_02.png',
        link: '/portfolio/7',
    },
    {
        id: 8,
        category: 'Design',
        title: '品牌推廣：海報',
        description: '',
        imageUrl: '/static/images/Design/design_05.png',
        link: '/portfolio/8',
    },

]);

const currentFilter = ref('All');

const filteredItems = computed(() => {
    if (currentFilter.value === 'All') {
        return portfolioItems.value;
    }
    return portfolioItems.value.filter(item => item.category === currentFilter.value);
});

const filterItems = (category) => {
    currentFilter.value = category;
};
</script>

<style scoped>
/* 添加你需要的样式 */
</style>
