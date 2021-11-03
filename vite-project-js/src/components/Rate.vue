<template>
    <div :style="fontStyle">
        <div class="rate" @mouseout="mouseOut">
            <span v-for="num in 5" :key="num" @mouseover="mouseOver(num)">☆</span>
            <span class="hollow" :style="fontWidth">
                <span v-for="num in 5" :key="num" @click="changeRate(num)" @mouseover="mouseOver(num)">★</span>
            </span>
        </div>
    </div>
</template>

<script setup>
import {defineProps, computed, ref, defineEmits} from 'vue';
let props = defineProps({
    value: Number,
    theme: {
        type: String,
        default: 'orange'
    }
});
let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value));

// 定义 emits
let emits = defineEmits('rateChange');
let width = ref(props.value);

function changeRate(rate) {

    // 向外发送事件
    emits('rateChange', rate);
}

function mouseOver(i) {
    width.value = i;
}

function mouseOut() {
    width.value = props.value;
}

const fontWidth = computed(() => `width:${width.value}em;`);

const themeObj = {
    black: '#00',
    white: '#fff',
    red: '#f5222d',
    orange: '#fa541c',
    yellow: '#fadb14',
    green: '#73d13d',
    blue: '#40a9ff'
};
const fontStyle = computed(()=> `color:${themeObj[props.theme]};`);
</script>

<style scoped>
.rate{
    position:relative;
    display: inline-block;
}
.rate > span.hollow {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;
}
</style>