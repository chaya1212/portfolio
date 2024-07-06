<script setup>
import Layout from "../components/Layout.vue";
import { ref } from 'vue';
import ServiceItem from './ServiceItem.vue';
import Footer from "../components/footer.vue";

const services = ref([
    {
        icon: '/static/images/icon/icon-UIUX.png',
        title: '網頁設計',
        description: '出色的網頁設計不僅僅關乎外觀，更深刻地理解和滿足使用者心理，提升易用性和互動性，以有效地展現和傳達品牌的核心價值和用戶體驗。',
        list: [
            'UX使用者研究',
            'UI頁面設計與模組化UI',
            'Vue組件設計',
            'GA/Hotjar使用者行為分析'
        ]
    },
    {
        icon: '/static/images/icon/icon-graphic.png',
        title: '視覺設計',
        description: '優秀的視覺設計不僅是美觀的外表，更是對品牌、產品或服務的有效表達和傳達價值的重要工具。',
        list: [
            '平面印刷',
            'AI生成模型養成',
            '插畫設計',
        ]
    },
    {
        icon: '/static/images/icon/icon-motion.png',
        title: '動畫影片',
        description: '以生動的視覺敘事和流暢的動作，深入觀眾心靈，有效地傳達故事情感和品牌訊息。',
        list: [
            'MG動畫製作',
            '影片錄製｜剪輯',
        ]
    },
    {
        icon: '/static/images/icon/icon-photo.png',
        title: '影像處理',
        description: '影像處理的精髓在於技術與內容的完美融合，以深度理解和精細處理影像，有效展現和傳達信息、情感或品牌形象。影',
        list: [
            '人像攝影',
            '活動攝影',
            '寵物攝影',
            '商品攝影',
        ]
    }
]);

</script>
<template>
    <Layout />
    <section class="py-5">

        <div class="container">
            <div class="row mb-4 align-items-center">
                <div class="col-md-6" data-aos="fade-up">

                    <h2>My Services</h2>
                    <p></p>

                </div>

            </div>
        </div>

        <div class="site-section pb-0 services">
            <div class="container">
                <div class="row">
                    <ServiceItem v-for="(service, index) in services" :key="index" :icon="service.icon"
                        :title="service.title" :description="service.description" :list="service.list"
                        :delay="index % 2 === 0 ? '' : '100'" />
                </div>
            </div>
        </div>


    </section>
    <Footer />

</template>