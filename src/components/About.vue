<script setup>
import { ref } from "vue";
import Layout from "../components/Layout.vue";
import Footer from "../components/footer.vue";
import SkillItem from "./SkillItem.vue";

const skills = ref([
  {
    name: "illustrator",
    percent: 80,
    visible: true,
    icon: "static/images/icon/icon-illustrator.png",
  },
  {
    name: "Photoshop",
    percent: 96,
    visible: true,
    icon: "static/images/icon/icon-photoshop.png",
  },
  {
    name: "HTML5/CSS3",
    percent: 99,
    visible: true,
    icon: "static/images/icon/icon-code.png",
  },
  { name: "Vue", percent: 87, visible: true, icon: "static/images/icon/icon-vue.png" },
  {
    name: "Figma",
    percent: 85,
    visible: true,
    icon: "static/images/icon/icon-figma.png",
  },
  {
    name: "Sketch",
    percent: 88,
    visible: true,
    icon: "static/images/icon/icon-sketch.png",
  },
]);
</script>

<template>
  <Layout />
  <section class="py-5">
    <div class="container">
      <div class="row mb-5 align-items-end">
        <div class="col-md-6" data-aos="fade-up">
          <h2>About Me</h2>
          <p class="mb-0">
            透過精心設計的使用者體驗和界面設計，我致力於突顯品牌的核心價值。
            擁有豐富的經驗和綜合能力，我不僅專注於創造具有美學價值和功能性的設計，還能夠有效地將設計理念轉化為實際成果。具備網頁切版和基礎前端開發技能，我能夠全面參與並推動從概念到實施的設計過程。
            以創意和技術的結合，我致力於為客戶打造出色的產品，提升其品牌形象和市場競爭力。期待透過我的專業知識和實踐經驗，為您的項目帶來價值和成功。
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 ml-auto order-2" data-aos="fade-up">
          <h3 class="h3 mb-4">Skills</h3>
          <ul class="list-unstyled">
            <SkillItem
              v-for="skill in skills"
              :key="skill.name"
              :skill="skill"
              :visible="skill.visible"
            />
          </ul>
        </div>

        <div class="col-md-7 mb-5 mb-md-0" data-aos="fade-up">
          <img
            
            src="../assets/images/chaya.png"
            alt="Image"
            class="img-fluid"
          />
          <p class="pt-3 w-75">
            <a
              href="https://www.cakeresume.com/s--vsuCLDgBa1FPXE37hrREAQ--/cha2024"
              class="readmore"
              >Download my CV</a
            >
          </p>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>
