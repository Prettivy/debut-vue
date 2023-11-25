<script setup>
import TodoForm from '../todo/TodoForm.vue'
import TodoList from '../todo/TodoList.vue'
</script>

<template>
    <div class="todo-app">
        <h1>To Do List</h1>
        <todo-form></todo-form>
        <todo-list></todo-list>
    </div>
</template>

<style scoped>
.todo-app {
    margin: auto;
  padding: 5vh;
  min-height: 50vh;
  width: 30vw;
  background-color: #f7f9fc;
}
</style>