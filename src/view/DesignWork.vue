<template>
    <section class="section_title">
        <div class="title_right">
            <img class="title_img" src="@/assets/image/titleImg/work01_title.png">
        </div>
        <div class="title-content">
            <p class="title text">DM, Banner Graphic Design</p>
            <p class="subtitle text">設計作品</p>
        </div>
        <div class="bottom">
            <div class="circle" @click="scrollToSkillSection"></div>
        </div>
    </section>

    <section class="section_main" id="main">
        <div class="page_design">
            <div class="row design_wrap">
                <div class="col img_item">
                    <img class="img" src="@/assets/image/titleImg/work02_title.png">
                </div>
                <div class="col">
                    <p class="title m-0">text title</p>
                    <p class="subTitle m-0">text title</p>
                    <p class="text m-0">texttexttexttext </p>
                </div>
            </div>
            <div class="row design_wrap">
                <div class="col">
                    <p class="title m-0">text title</p>
                    <p class="subTitle m-0">text title</p>
                    <p class="text m-0">texttexttexttext </p>
                </div>
                <div class="col img_item">
                    <img class="img" src="@/assets/image/titleImg/work02_title.png">
                </div>
            </div>
        </div>
    </section>
</template>
    
  
<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();
export default {
    name: "DesignWork",
    methods: {
        scrollToSkillSection() {
            const skillSection = document.getElementById("main");
            if (skillSection) {
                skillSection.scrollIntoView({
                    behavior: "smooth", // 使用平滑滾動效果
                    block: "start",     // 滾動到目標的頂部
                });
            }
        },
    },

};

</script>
  
<style lang="scss">
@import '../assets/scss/page.scss';

// 其他樣式設定...
</style>