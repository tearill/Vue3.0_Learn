<template>
    <div>
        <input type="text" v-model="title" @keydown.enter="addTodo">
        <ul v-if="todos.length">
            <li v-for="(todo, index) in todos" :key="'todo_' + index">
                <input type="checkbox" v-model="todo.done">
                <span :class="{ done: todo.done }">{{ todo.title }}</span>
            </li>
        </ul>
        <div v-else>
            暂无数据
        </div>
        <div>
            全选<input type="checkbox" v-model="allDone"/>
            <span> {{ done }} / {{ all }}</span>
        </div>

        <span>{{ x }} - {{ y }}</span>
    </div>
</template>

<script setup>
import {ref, computed} from 'vue';
import {useMouse} from '../utils/mouse';
let { title, todos, addTodo, clear, done, all, allDone } = useTodos();
let {x, y} = useMouse();
function useTodos() {
    let title = ref('');
    let todos = ref([{ title: 'learn Vue3', done: false }]);
    
    function addTodo() {
        todos.value.push({
            title: title.value,
            done: false
        });
        title.value = '';
    }
    
    function clear() {
        todos.value = todos.value.filter(todo => !todo.done);
    }
    const done = computed(() => todos.value.filter(todo => todo.done).length);
    const all = computed(() => todos.value.length);
    let allDone = computed({
        get: function() {
            return done.value.value === all.value;
        },
        set: function(value) {
            todos.value.forEach(todo => {
                todo.done = value;
            });
        }
    });

    return {
        title,
        todos,
        addTodo,
        clear,
        done,
        all,
        allDone
    };
}
</script>

<style scoped>
h1 {
    color: red;
}
</style>