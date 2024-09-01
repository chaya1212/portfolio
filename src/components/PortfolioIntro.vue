<template>
  <Layout />
  <section :class="['section', 'py-5', item.sectionClass]">
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
            <img :src="item.imageUrl" alt="Image" class="img-fluid" />
          </div>
          <div class="col-md-3 ml-auto" data-aos="fade-up" data-aos-delay="100">
            <div class="sticky-content">
              <h3 class="h3">{{ item.title }}</h3>
              <p class="mb-4">
                <span class="text-muted">{{ item.category }}</span>
              </p>

              <h4 class="h4 mb-3">What I did</h4>
              <ul class="list-unstyled list-line mb-5">
                <li>{{ item.textDid01 }}</li>
                <li>{{ item.textDid02 }}</li>
                <li>{{ item.textDid03 }}</li>
                <li>{{ item.textDid04 }}</li>
              </ul>

              <!-- 根据 showLink 属性决定是否显示 "Visit Website" 链接 -->
              <p v-if="item.showLink">
                <a :href="item.link" class="readmore">Visit Demo</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section :class="['bottom_section', 'container', item.sectionClass]">
    <div class="row">
      <div class="col-4 img_show" v-for="(img, index) in item.customImages" :key="index">
        <img :src="img" alt="Custom Image" class="img-fluid" @click="openModal(img)" />
      </div>
    </div>
  </section>

  <!-- 模态框 -->
  <div v-if="isModalOpen" class="modal" @click.self="closeModal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <img :src="modalImage" alt="Modal Image" class="img-fluid" />
    </div>
  </div>

  <Footer />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import Layout from "../components/Layout.vue";
import Footer from "../components/footer.vue";

const route = useRoute();
const item = ref({});
const isModalOpen = ref(false);
const modalImage = ref("");

const openModal = (img) => {
  modalImage.value = img;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const portfolioItems = [
  {
    id: 1,
    category: "Web",
    title: "Avatar:頭像生成器",
    imageUrl: "static/images/web/avatar_mockup.png",
    textDid01: "專案時程管理",
    textDid02: "UI設計",
    textDid03: "切版",
    textDid04: "",
    link: "https://chaya1212.github.io/avatar/#/",
    showLink: true, // 控制是否显示链接
    sectionClass: "section-1",
    customImages: [
      "static/images/Design/design_01.png",
      "static/images/Design/design_02.png",
      "static/images/Design/design_03.png",
    ],
  },
  {
    id: 2,
    category: "Web",
    title: "企業形象官網：綠果方洲",
    imageUrl: "static/images/web/green_mockup.png",
    textDid01: "UI設計",
    textDid02: "切版",
    textDid03: "前端功能",
    textDid04: "",
    link:
      "https://source-good-creator-studio-com-9866d448cab1bd109f7cf457ce4a2a58.gitlab.io/",
    showLink: true, // 控制是否显示链接
    sectionClass: "section-2",
  },
  {
    id: 3,
    category: "Motion",
    title: "官網動態形象影片",
    textDid01: "視覺設計",
    textDid02: "動態設計",
    imageUrl: "static/images/Motion/img-motion01.png",
    link: "https://lurl.cc/NoMzC",
    showLink: true, // 控制是否显示链接
    sectionClass: "section-3",
  },
  {
    id: 4,
    category: "Design",
    title: "DM設計：幼兒體適能",
    textDid01: "視覺設計",
    imageUrl: "static/images/Design/design_01.png",
    link: "",
    showLink: false, // 控制是否显示链接
    sectionClass: "section-4",
  },
  {
    id: 5,
    category: "Design",
    title: "名片設計：小春日和",
    textDid01: "視覺設計",
    textDid02: "排版印刷",
    imageUrl: "static/images/Design/design_04.png",
    link: "/portfolio/5",
    showLink: false, // 控制是否显示链接
    sectionClass: "section-5",
  },
  {
    id: 6,
    category: "Design",
    title: "看板設計：錦春日式料理",
    textDid01: "視覺設計",
    textDid02: "排版印刷",
    imageUrl: "static/images/Design/design_03.png",
    link: "/portfolio/6",
    showLink: false, // 控制是否显示链接
    sectionClass: "section-6",
  },
  {
    id: 7,
    category: "Design",
    title: "菜單型錄：小春日和",
    textDid01: "視覺設計",
    textDid02: "排版印刷",
    imageUrl: "static/images/Design/design_02.png",
    link: "/portfolio/7",
    showLink: false, // 控制是否显示链接
    sectionClass: "section-7",
  },
  {
    id: 8,
    category: "Design",
    title: "品牌推廣：海報",
    textDid01: "視覺設計",
    textDid02: "Mockup示意圖",
    textDid03: "產品包裝設計",
    imageUrl: "static/images/Design/design_05.png",
    link: "/portfolio/7",
    showLink: false, // 控制是否显示链接
    sectionClass: "section-8",
  },
  {
    id: 9,
    category: "Design",
    title: "活動海報：小春日和",
    textDid01: "視覺設計",
    imageUrl: "static/images/Design/design_06.png",
    link: "/portfolio/7",
    showLink: false, // 控制是否显示链接
    sectionClass: "section-9",
  },
  {
    id: 10,
    category: "Design",
    title: "活動海報：小春日和",
    textDid01: "視覺設計",
    imageUrl: "static/images/Design/design_07.png",
    link: "/portfolio/7",
    showLink: false, // 控制是否显示链接
    sectionClass: "section-10",
  },
  {
    id: 11,
    category: "Design",
    title: "品牌VI:醫療公關公司",
    textDid01: "視覺設計",
    imageUrl: "static/images/Design/design_08.jpg",
    link: "/portfolio/7",
    showLink: false, // 控制是否显示链接
    sectionClass: "section-11",
  },
  {
    id: 12,
    category: "Web",
    title: "企業形象官網：醫療公關公司",
    textDid01: "視覺設計",
    imageUrl: "static/images/web/option_03.png",
    link: "https://apro-test77.cosmo-demo.com.tw/index.php",
    showLink: true, // 控制是否显示链接
    sectionClass: "section-12",
  },
];

// 根据路由参数设置当前显示的项目信息
onMounted(() => {
  const itemId = Number(route.params.id);
  item.value = portfolioItems.find((item) => item.id === itemId);
});
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: relative;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  animation: animatetop 0.4s;
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

.close {
  position: absolute;
  top: 10px;
  right: 25px;
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>
