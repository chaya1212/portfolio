<template>
    <li class="mb-3" v-if="visible">
        <div class="d-flex mb-1">
            <div class="icon">
                <img class="skill_icon" :src="skill.icon" alt="Skill Icon">
            </div>
            <div class="d-flex justify-content-between w-100">
                <strong>{{ skill.name }}</strong>
                <span class="ml-auto ps-3">{{ skill.percent }}%</span>
            </div>
        </div>
        <div class="progress custom-progress">
            <div class="progress-bar" role="progressbar" :style="{ width: skill.percent + '%' }"
                :aria-valuenow="skill.percent" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </li>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    skill: {
        type: Object,
        required: true,
    },
    visible: {
        type: Boolean,
        default: true,
    },
});
</script>

<style scoped>
.icon {
    margin-right: 8px;
    /* 調整 icon 與文本之間的距離 */
}

.skill_icon {
    width: 24px;
    /* 根據需要調整圖示寬度 */
    height: auto;
    /* 根據需要調整圖示高度 */
}

/* 根據需要添加其他樣式 */
</style>
