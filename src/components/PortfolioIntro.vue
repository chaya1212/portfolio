<template>
    <Layout />
    <section class="section py-5">
        <div class="container">
            <div class="row mb-4 align-items-center">
                <div class="col-md-6" data-aos="fade-up">
                    <h2>Portfolio</h2>
                    <p>作品內容</p>
                </div>
            </div>
        </div>

        <div class="site-section pb-0">
            <div class="container">
                <div class="row align-items-stretch">
                    <div class="col-md-8" data-aos="fade-up">
                        <img :src="item.imageUrl" alt="Image" class="img-fluid">
                    </div>
                    <div class="col-md-3 ml-auto" data-aos="fade-up" data-aos-delay="100">
                        <div class="sticky-content">
                            <h3 class="h3">{{ item.title }}</h3>
                            <p class="mb-4"><span class="text-muted">{{ item.category }}</span></p>



                            <h4 class="h4 mb-3">What I did</h4>
                            <ul class="list-unstyled list-line mb-5">
                                <li>{{item.textDid01}}</li>
                                <li>{{ item.textDid02 }}</li>
                                <li>{{ item.textDid03 }}</li>
                                <li>{{ item.textDid04 }}</li>
                            </ul>

                            <!-- 根据 showLink 属性决定是否显示 "Visit Website" 链接 -->
                            <p v-if="item.showLink"><a :href="item.link" class="readmore">Visit Demo</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Layout from "../components/Layout.vue";
import Footer from "../components/footer.vue";

const route = useRoute();
const item = ref({});

const portfolioItems = [
    {
        id: 1,
        category: 'Web',
        title: 'Avatar:頭像生成器',
        imageUrl: 'static/images/web/avatar_mockup.png',
        textDid01:'專案時程管理',
        textDid02:'UI設計',
        textDid03:'切版',
        textDid04:'',
        link: 'https://chaya1212.github.io/avatar/#/',
        showLink: true, // 控制是否显示链接
    },
    {
        id: 2,
        category: 'Web',
        title: '企業形象官網：綠果方洲',
        imageUrl: 'static/images/web/green_mockup.png',
        textDid01: 'UI設計',
        textDid02: '切版',
        textDid03: '前端功能',
        textDid04: '',
        link: 'https://source-good-creator-studio-com-9866d448cab1bd109f7cf457ce4a2a58.gitlab.io/',
        showLink: true, // 控制是否显示链接
    },
    {
        id: 3,
        category: 'Motion',
        title: '官網動態形象影片',
        textDid01: '視覺設計',
        textDid02: '動態設計',
        imageUrl: 'static/images/Motion/img-motion01.png',
        link: 'https://lurl.cc/NoMzC',
        showLink: true, // 控制是否显示链接
        
       
    },
    {
        id: 4,
        category: 'Design',
        title: 'DM設計：幼兒體適能',
        textDid01: '視覺設計',
        imageUrl: 'static/images/Design/design_01.png',
        link: '',
        showLink: false, // 控制是否显示链接
    },
    {
        id: 5,
        category: 'Design',
        title: '名片設計：小春日和',
        textDid01: '視覺設計',
        textDid02: '排版印刷',
        imageUrl: 'static/images/Design/design_04.png',
        link: '/portfolio/5',
        showLink: false, // 控制是否显示链接
        
    },
    {
        id: 6,
        category: 'Design',
        title: '看板設計：錦春日式料理',
        textDid01: '視覺設計',
        textDid02: '排版印刷',
        imageUrl: 'static/images/Design/design_03.png',
        link: '/portfolio/6',
        showLink: false, // 控制是否显示链接
    },
    {
        id: 7,
        category: 'Design',
        title: '菜單型錄：小春日和',
        textDid01: '視覺設計',
        textDid02: '排版印刷',
        imageUrl: 'static/images/Design/design_02.png',
        link: '/portfolio/7',
        showLink: false, // 控制是否显示链接
    },
    {
        id: 8,
        category: 'Design',
        title: '品牌推廣：海報',
        textDid01: '視覺設計',
        textDid02: 'Mockup示意圖',
        textDid03: '產品包裝設計',
        imageUrl: 'static/images/Design/design_05.png',
        link: '/portfolio/7',
        showLink: false, // 控制是否显示链接
    },
    
];

// 根据路由参数设置当前显示的项目信息
onMounted(() => {
    const itemId = Number(route.params.id);
    item.value = portfolioItems.find(item => item.id === itemId);
});
</script>
