<template>
    <div :class="['item', item.category.toLowerCase(), 'col-sm-6 col-md-4 col-lg-4 mb-4']">
        <router-link :to="item.link" class="item-wrap fancybox">
            <div class="work-info">
                <h3>{{ item.title }}</h3>
                <h5 v-if="item.description">{{ item.description }}</h5>
                <span>{{ item.category }}</span>
            </div>
            <img class="img-fluid" :src="item.imageUrl" />
        </router-link>
    </div>
    
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped>
/* 添加你需要的样式 */
</style>
