
<template>
    <section class="section_title pt-0">
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand ps-3 text-light" href="#">2024 PORTFOLIO</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link text-light mx-2" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light mx-2" href="#">Work</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light mx-2" href="#">Grapic</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="img-center position-relative w-100 h-100">
            <div class="wrap_ArticleTitle">
                <div class="mask_img radius_title work02"></div>
                <div class="title-content text-start text-dark p-5">
                    <p class="subtitle m-0">HUD 三秒設計原則</p>
                    <p class="text ms-2">2023 設計心理學 研讀分享</p>
                </div>
            </div>
        </div>
    </section>
    <section class="section_main" id="main">
        <div class="main_title p-5 text-start">
            <p class="subtitle text-lightGreen mb-0">人機界面的設計方法</p>
            <p class="text mb-0">當使用者必須在極短時間內完成一次操作時，相較與美觀的介面，我們更應該注重於直觀的資訊。</p>
        </div>

        <div class="m-3 mb-5 row justify-content-center align-items-center work_wrap">
            <div class="col-md-3 col-sm-6 banner px-0">
                <div class="mask_img radius_RB word02_card01"></div>
            </div>
            <div class="col-8 text-start px-5">
                <div class="card-body">
                    <p class=" text-neonGreen item-title" style="font-weight: 600;">
                        WATCHOS
                    </p>
                    <span
                        class="my-1 text text-light">在快速的運動與無法使用手機的狀況，是常見的whatchOS使用背景，小尺寸的畫面中，將所有資訊都強制顯示在畫面中，預先知道使用者的需求而提供訊息，才能達到畫面被設計的目的。</span>
                </div>
            </div>
        </div>
        <div class="m-3 mb-5 row justify-content-center align-items-center work_wrap">
            <div class="col-8 text-start px-5">
                <div class="card-body">
                    <p class=" text-neonGreen item-title" style="font-weight: 600;">
                        HUD
                    </p>
                    <span class="my-1 text text-light">研究指出，駕駛途中，駕a駛人煞車反應時間（觸發、感知、判斷、鬆開油門、煞車、開始有效煞車），約為1.6秒。
                        時速40公里，煞停距離需要17.6公尺 時速50公里需要22.4公尺 ; 時速60公里需要27.2公尺。
                        因此，駕駛狀態下，操作一次的交互行為（按下、滑開）不得超過2秒，當然，1秒是最佳時間。</span>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 banner px-0">
                <div class="mask_img radius_LB word02_card02"></div>
            </div>
        </div>


        <div class="main_title p-5 text-start">
            <p class="subtitle text-lightGreen mb-0">三秒設計原則</p>
            <p class="text mb-0">
                綜上所述，下面我要介紹三秒設計原則，是我整理了許多文獻資料並統整成自己的結論，這個設計法則我認為通用於任何設計，因為一個好的畫面，80％來自頁面流程與重點層次的排列，20%才是迷人的美觀。</p>
        </div>
        <div class="m-3 mb-5 row justify-content-center align-items-center work_wrap">
            <div class="col-md-3 col-sm-6 banner px-0">
                <div class="mask_img radius_RB"></div>
            </div>
            <div class="col-8 text-start px-5">
                <div class="card-body">
                    <p class=" text-neonGreen item-title" style="font-weight: 600;">
                        第一秒
                    </p>
                    <p class="text-neonGreen item-title" style="font-weight: 600;">
                        視覺與理解
                    </p>
                    <span
                        class="my-1 text text-light">使用者必須在1秒的時間內，掃視完畫面。通過重點的大小與顏色的區別，在螢幕中必須在時間內被使用者注意到，同時他在螢幕的位置也必須根據使用裝置來進行區別，例如watchOS應該至於中間，而汽車載體的中控版則必須放在離駕駛最近的高級熱點區域。</span>
                </div>
            </div>
        </div>
        <div class="m-3 mb-5 row justify-content-center align-items-center work_wrap">
            <div class="col-8 text-start px-5">
                <div class="card-body">
                    <p class=" text-neonGreen item-title" style="font-weight: 600;">
                        第二秒
                    </p>
                    <p class="text-neonGreen item-title" style="font-weight: 600;">
                        行為
                    </p>
                    <span
                        class="my-1 text text-light">使用者進行交互行為的時間，同樣也不得超過2秒，因此交互的內容嚴禁過多的步驟，例如連點、滑動、常按，建議是以精準的點擊為主，且這時候觸碰範圍要大於手指觸摸（12mm
                        x 12mm）大小，減少出錯。</span>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 banner px-0">
                <div class="mask_img radius_LB"></div>
            </div>
        </div>
        <div class="m-3 mb-5 row justify-content-center align-items-center work_wrap">
            <div class="col-md-3 col-sm-6 banner px-0">
                <div class="mask_img radius_RB"></div>
            </div>
            <div class="col-8 text-start px-5">
                <div class="card-body">
                    <p class=" text-neonGreen item-title" style="font-weight: 600;">
                        第三秒
                    </p>
                    <p class="text-neonGreen item-title" style="font-weight: 600;">
                        反饋
                    </p>
                    <span
                        class="my-1 text text-light">即便交互設計要省去多餘的裝飾與動畫，但點擊後的反饋則不能少，反饋包含簡易動畫、聲音提示等，必須簡單易懂，在一秒內完成反饋，告訴使用者已完成該任務，嚷一次流程達到三秒內結束。</span>
                </div>
            </div>
        </div>
        <div class="main_title p-5 text-start">
            <p class="subtitle text-lightGreen mb-0">總結</p>
            <p class="text mb-0">
                而三秒設計原則，我認為也能帶入手機應用程式的介面設計，多數人在做設計時，通常是拿到需求後，就開始設計畫面。實係上，釐清需求的重要程度往往是佔據設計流程的80%，舉個殘酷的案例，台灣銀行與Line
                Bank的主畫面差異，是否就強烈地影響到使用，這邊說的是資訊呈現而非美觀。Line
                Bank用最直觀的方式將金額呈現在手機螢幕的重點處，同時轉帳的按鈕位置，設置在慣用手的熱點區域，相對將所有資訊統一列出的台灣銀行比起來，這個畫面在學習的時間成本大幅下降許多。

                再一次，UIUX設計師的我們都應該嘗試跳脫出美觀這個框架，如何達到好的流程與操作循環，才是設計思維的一部分。</p>
        </div>

    </section>
</template>
    
  
<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

// ..
AOS.init();
export default {
    name: "HudPage",
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
  
<style lang="scss">@import '../assets/scss/page.scss';

// 其他樣式設定...</style>