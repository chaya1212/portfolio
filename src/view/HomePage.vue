<template>
  <section id="home" class="home pt-0">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand ps-3 text-light" href="#">2024 PORTFOLIO</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <img style="transform: scale(2);" src="@/assets/image/list.svg">
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link text-light mx-2" @click="scrollToSection('about')" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light mx-2" @click="scrollToSection('work')" href="#">Work</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light mx-2" @click="scrollToSection('graphic')" href="#">Graphic</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="img-center position-relative w-100 h-100">
      <span class="home-title">Hi I’m Chaya</span>
      <img class="my_img" src="@/assets/image/me.png">
      <div class="ellipse_item">
        <div class="ellipse">
          <div class="circle"></div>
        </div>
        <div class="ellipse"></div>
        <div class="ellipse">
        </div>
      </div>
      <img class="star_yellow position-absolute" src="@/assets/image/star_1.svg">
      <img class="star_green position-absolute" src="@/assets/image/star_2.svg">
    </div>
  </section>

  <sectiom id="about" class="about">
    <div class="card_wrap bg_neon text-start ">
      <sapn class="subtitle text-dark font_syncopate">About me</sapn>
      <p class="text text-dark text_item px-2">擅長遊戲化體驗的UIUX設計師，能活用Vue3/SCSS/bootstrap切版，已完成多項產品的重構與設計。

        並透過遊戲化導入會員系統，提升網站會員的轉換率與留存率。</p>
    </div>
  </sectiom>
  <section id="skill" class="skill_section">
    <div class="text-start card_wrap">
      <sapn class="subtitle text-lightGreen font_syncopate">Skill</sapn>
      <div class="pt-5 m-3 row justify-content-evenly text-center" data-aos="zoom-in">
        <div class="block col-lg-3 col-md-6 col-sm-6">
          <img class="col-img" src="@/assets/image/icon_ui.svg">
          <p class="title">UI design</p>
          <span class="text">GA/hotjar analysis/User Journey Map/Product Case Analysis</span>
        </div>
        <div class="block col-lg-3 col-md-6 col-sm-6">
          <img class="col-img" src="@/assets/image/icon_ux.svg">
          <p class="title">UX research</p>
          <span class="text">Sketch/Figma/Adobe XD/Adobe AI/Adobe PS</span>
        </div>
        <div class="block col-lg-3 col-md-6 col-sm-6">
          <img class="col-img" src="@/assets/image/icon_code.svg">
          <p class="title">Coding</p>
          <span class="text">HTML/CSS/JS/Vue/Git</span>
        </div>
      </div>
    </div>
  </section>

  <section id="work" class="work_section ">
    <div class="text-start card_wrap">
      <sapn class="subtitle text-lightGreen font_syncopate">Work</sapn>
      <router-link :to="{ name: 'WorkPage' }" @click="scrollToTop">
        <div class="m-3 mb-5 row justify-content-center align-items-center work_wrap">
          <div class="col-md-3 col-sm-6 banner px-0">
            <div class="mask_img radius_RB work01"></div>
          </div>
          <div class="col-sm-12 col-md-6 text-start px-md-5 py-3">
            <div class="card-body d-flex">
              <h5 class="badge tag_UX text-dark">UX research</h5>
              <p class="mb-0 text-neonGreen item-title" style="font-weight: 600;">
                日常用品心理學
              </p>
              <span class="my-1 text text-light">設計，關注物品是如何運轉、如何操作、以及物體與技術之間的互動</span>
            </div>
          </div>
        </div>
      </router-link>
      <router-link :to="{ name: 'HudPage' }">
        <div class="m-3 mb-5 row justify-content-center align-items-center work_wrap flex-reserveBlock">
          <div class="col-sm-12 col-md-6 text-start px-md-5 py-3">
            <div class="card-body d-flex">
              <h5 class="badge tag_UX text-dark">UX research</h5>
              <p class="mb-0 text-neonGreen item-title" style="font-weight: 600;">
                HUD 三秒設計原則
              </p>
              <span class="my-1 text text-light">相較與美觀的介面，我們更應該注重於直觀的資訊。</span>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 banner px-0">
            <div class="mask_img radius_LB work02"></div>
          </div>
        </div>
      </router-link>
      <router-link :to="{ name: 'AnimalRedesign' }">
        <div class="m-3 mb-5 row justify-content-center align-items-center work_wrap">
          <div class="col-md-3 col-sm-6 banner px-0">
            <div class="mask_img radius_RB redesign01"></div>
          </div>
          <div class="col-sm-12 col-md-6 text-start px-md-5 py-3">
            <div class="card-body d-flex">
              <h5 class="badge tag_UI text-dark">UI design</h5>
              <p class="mb-0 text-neonGreen item-title" style="font-weight: 600;">
                REDESIGN 全國動物收容系統
              </p>
              <span class="my-1 text text-light">REDESIGN 資料層級研究

              </span>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </section>
  <section id="graphic" class="my_section graphic_section">
    <div class="text-start card_wrap">
      <sapn class="subtitle text-lightGreen font_syncopate">Graphic</sapn>
      <div class="container aos-init aos-animate" data-aos="zoom-in">
        <div class="content__gallery">
          <div v-for="(image, index) in images" :key="index" :class="'grid-photo item-' + (index + 1)"
            @click="showEnlargedImage(image)">
            <img class="grid_img" :src="image" alt="Grid Image">
          </div>
        </div>
      </div>
    </div>
  </section>
  <div v-if="enlargedImage" class="enlarged-image-overlay" @click="closeEnlargedImage">
    <div class="enlarged-image-container">
      <img :src="enlargedImage" alt="Enlarged Image">
    </div>
  </div>
</template>
  
<script>
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

export default {
  name: "HomePage",
  data() {
    return {
      images: [
        require('@/assets/image/graphic/page02.png'),
        require('@/assets/image/graphic/page-01.png'),
        require('@/assets/image/graphic/page-03.png'),
        require('@/assets/image/graphic/page-04.png'),
        // 添加更多圖片路徑
      ],
      enlargedImage: null
    };
  },
  methods: {
    scrollToSection(sectionId) {
      var targetElement = document.getElementById(sectionId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    },
    showEnlargedImage(imageSrc) {
      this.enlargedImage = imageSrc;
    },
    closeEnlargedImage() {
      this.enlargedImage = null;
    }
  }
};
</script>

<style lang="scss">
@import '../assets/scss/page.scss';

// 其他樣式設定...
/* 你的其他樣式 */
.enlarged-image-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.enlarged-image-container {
  max-width: 80%;
  max-height: 80%;
}

.enlarged-image-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

</style>