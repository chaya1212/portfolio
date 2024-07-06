<template>
    <div :class="['col-12 col-sm-6 col-md-6 col-lg-6 mb-5']" data-aos="fade-up" :data-aos-delay="delay">
        <img :src="icon" alt="Icon" class="icon" />
        <h4 class="h4 mb-2">{{ title }}</h4>
        <p>{{ description }}</p>
        <ul class="list-unstyled list-line">
            <li v-for="(item, index) in list" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    icon: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    list: {
        type: Array,
        required: true
    },
    delay: {
        type: String,
        default: ''
    }
});
</script>

<style scoped>
.icon {
    width: 50px;
    height: 50px;
    margin-bottom: 1rem;
}
</style>