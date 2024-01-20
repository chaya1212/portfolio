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
                <div class="mask_img radius_title redesign01"></div>
                <div class="title-content text-start text-dark p-5">
                    <p class="subtitle m-0">REDESIGN</p>
                    <p class="subtitle m-0">全國動物收容系統</p>
                    <p class="text ms-2">REDESIGN 資料層級研究</p>
                </div>
            </div>
        </div>
    </section>
    <section class="section_main" id="main">
        <div class="main_title p-5 text-start">
            <p class="subtitle text-lightGreen mb-0">優化項目：領養資訊卡內容與樣式</p>
            <p class="text mb-0">本次優化為個人side project，Redesign並不僅是換皮遊戲，我們要重新站在使用者的立場，反覆思考並來回定義網站的資訊，重新規劃符合易用性、易讀性的系統。</p>
        </div>
        <div class="main_title p-5 text-start">
            <p class="subtitle text-lightGreen mb-0">釐清背景</p>
            <p class="text mb-0">站在使用者的立場上，我們要重新思考網站的背景與原因。</p>
        </div>

        <div class="container question_wrap">
            <div class="row">
                <div class="col info_item p-3">
                    <p class="col-text">寵物類型</p>
                    <p class="text">喜好的動物種類不同</p>
                </div>
                <div class="col info_item p-3">
                    <p class="col-text">寵物的照片</p>
                    <p class="text">臉緣、眼緣才產生有緣。
                        外型是多數領養者選擇的標準</p>
                </div>
                <div class="col info_item p-3">
                    <p class="col-text">可否被領養</p>
                    <p class="text">若是重大生病的動物，無法被立即領養（但會被刊登）</p>
                </div>
                <div class="col info_item p-3">
                    <p class="col-text">性別與年紀</p>
                    <p class="text">有時家裡已經有其他寵物，需考慮性別與年齡之磨合</p>
                </div>
            </div>
            <div class="row">
                <div class="col info_item p-3">
                    <p class="col-text">領養條件</p>
                    <p class="text">傷殘與疾病的寵物需要大量時間與金錢，需審核經濟條件</p>
                </div>
                <div class="col info_item p-3">
                    <p class="col-text">是否節育</p>
                    <p class="text">節育為後續飼養的成本之一</p>
                </div>
                <div class="col info_item p-3">
                    <p class="col-text">親人？親貓？</p>
                    <p class="text">考慮到單貓與多貓家庭，領養者的期望會有所不同</p>
                </div>
                <div class="col info_item p-3">
                    <p class="col-text">所在地區</p>
                    <p class="text">地域差異，通勤跑領養流程等等問題</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 現況分析 -->
    <section class="section_main">
        <div class="main_title p-5 text-start">
            <p class="subtitle text-lightGreen mb-0">現況分析</p>
            <p class="text mb-0">現階段畫面所提供的資料，我們將重點歸納成三個部分，主要重點為畫面上一看最明顯的區域，再來是次要重點，最後才是一般資訊。</p>
        </div>
        <div class="situation_wrap container">
            <div class="row">
                <div class="col-6">
                    <img class="col-img"  src="@/assets/image/animal/index_before.png">
                </div>
                <div class="col-5 text-start">
                    <div class="item-title text_orange text_bold">資訊重點與使用者期待不符</div>
                    <span>從使用者的旅途來看，最期望看到的是圖片以及可否領養。</span>
                    <div>
                        <div class="card ">
                            <p class="pe-4 col-text">主要重點</p>
                            <ul class="mb-0 text-start ps-2 text">
                                <li>寵物照片</li>
                                <li>編號（透過Hover凸顯資訊）</li>
                            </ul>
                        </div>
                        <div class="card ">
                            <p class="pe-4 col-text">次級重點</p>
                            <ul class="mb-0 text-start ps-2 text">
                                <li>寵物種類（不同顏色顯示）</li>
                            </ul>
                        </div>
                        <div class="card ">
                            <p class="pe-4 col-text">文本資訊</p>
                            <ul class="mb-0 text-start ps-2 text">
                                <li>性別、區域、實際地點</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row my-5">
                <div class="col-6">
                    <img class="col-img"  src="@/assets/image/animal/info_before.png">
                </div>
                <div class="col-5 text-start">
                    <div class="item-title text_orange text_bold">畫面沒有重點</div>
                    <span>所有資訊內，應該是重點的資訊被混夾在所有的資訊內。</span>
                    <div>
                        <div class="card ">
                            <p class="pe-4 col-text">主要重點</p>
                            <ul class="mb-0 text-start ps-2 text">
                                <li>寵物照片</li>
                                <li>是否可領養（文本提醒）</li>
                            </ul>
                        </div>
                        <div class="card ">
                            <p class="pe-4 col-text">次級重點</p>
                            <ul class="mb-0 text-start ps-2 text">
                                <li>x</li>
                            </ul>
                        </div>
                        <div class="card ">
                            <p class="pe-4 col-text">文本資訊</p>
                            <ul class="mb-0 text-start ps-2 text">
                                <li>右邊區塊資訊</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 優化 -->
    <section class="section_main">
        <div class="main_title p-5 text-start">
            <p class="subtitle text-lightGreen mb-0">優化</p>
            <p class="text mb-0">除了畫面的視覺吸引力之外，本次優化更著重在資訊整理與歸納。</p>
        </div>
        <div class="situation_wrap container">
            <div class="row">
                <div class="col-6">
                    <img class="col-img"  src="@/assets/image/animal/index_after.png">
                </div>
                <div class="col-5 text-start">
                    <div class="item-title text_orange text_bold">簡化重點</div>
                    <span>使用者會在這層進行寵物的外觀篩選，這時候避免過多資訊影響閱讀（且也不會被閱讀），適當地在內曾保留資訊，讓使用者在頁面互動。</span>
                    <div>
                        <div class="card ">
                            <p class="pe-4 col-text">主要重點</p>
                            <ul class="mb-0 text-start ps-2 text">
                                <li>寵物照片</li>
                                <li>可否領養（以TAG顯示）</li>
                            </ul>
                        </div>
                        <div class="card ">
                            <p class="pe-4 col-text">次級重點</p>
                            <ul class="mb-0 text-start ps-2 text">
                                <li>品種、年紀、地區</li>
                            </ul>
                        </div>
                        <div class="card ">
                            <p class="pe-4 col-text">文本資訊</p>
                            <ul class="mb-0 text-start ps-2 text">
                                <li>編號</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row my-5">
                <div class="col-6">
                    <img class="col-img"  src="@/assets/image/animal/info_after.png">
                </div>
                <div class="col-5 text-start">
                    <div class="item-title text_orange text_bold">資訊層級歸納</div>
                    <span>歸納必須資訊，做整理與分層，相較於純文字呈現資訊，可以更快加速使用者去理解。</span>
                    <div>
                        <div class="card ">
                            <p class="pe-4 col-text">主要重點</p>
                            <ul class="mb-0 text-start ps-2 text">
                                <li>寵物照片（可一次多張圖片輪播）</li>
                            </ul>
                        </div>
                        <div class="card ">
                            <p class="pe-4 col-text">次級重點</p>
                            <ul class="mb-0 text-start ps-2 text">
                                <li>健康狀況：Check樣式，更好閱讀</li>
                                <li>領養須知：有底色的TAG，醒目提醒</li>
                            </ul>
                        </div>
                        <div class="card ">
                            <p class="pe-4 col-text">文本資訊</p>
                            <ul class="mb-0 text-start ps-2 text">
                                <li>品種、年紀、位置</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="main_title p-5 text-start">
            <p class="subtitle text-lightGreen mb-0">結論</p>
            <p class="text mb-0">優化時會發現，當我們在進行設計時，會希望把全部資訊都給使用者看到，達到資訊透明公開的效果，但實際上反思，自己身為使用者時，只想看到哪些內容呢？不斷的立場思考來去迭代優化，或許最一開始都是資訊的頁面，經過多次優化後，將會更清晰。在公司的專案執行項目也應當是如此，設計無法一次到位，通通都來自週而復始的討論與重構。</p>
        </div>
    </section>
</template>
    
  
<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();
export default {
    name: "RedesignPage",
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