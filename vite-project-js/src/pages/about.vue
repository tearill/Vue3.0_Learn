<template>
    <!-- <h1>About Page</h1> -->
    <!-- <Rate :value="score"/>
    <Rate :value="score" theme="red"/>
    <Rate :value="score" theme="green"/> -->
    <Rate :value="score" @rateChange="updateRate"/>
</template>

<script setup>
import {ref} from 'vue';
import Rate from '../components/Rate.vue';
let score = ref(3.5);

function updateRate(rate) {
    score.value = rate;
}
</script>

<style scoped>

</style>