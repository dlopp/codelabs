<template>
  <div class="wrapper">
    <header class="header">
      <h1 class="headline">Todo App for Web</h1>
    </header>
    <section class="main">
      <ul>
        <li v-for="todo in todoList" :key="todo.id" class="card">
          <p>{{ todo.title }}</p>
          <button @click.prevent="completeTodo(todo.id)">完了</button>
        </li>
      </ul>
    </section>
    <form @submit.prevent="addTodo" class="form">
      <input type="text" class="input" v-model="title" />
      <button type="submit" class="button">Todo 登録</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface Data {
  title: string;
  todoList: {
    id: number;
    title: string;
  }[];
}

export default Vue.extend({
  async asyncData({ $axios }) {
    const todoList = await $axios.$get("http://localhost:8080/todolist");
    return {
      todoList,
    };
  },
  data(): Data {
    return {
      title: "",
      todoList: [],
    };
  },
  methods: {
    async getTodoList() {
      const todoList = await this.$axios.$get("http://localhost:8080/todolist");
      this.todoList = todoList;
    },
    async addTodo() {
      await this.$axios.$post("http://localhost:8080/todolist", {
        title: this.title,
      });
      this.title = "";
      await this.getTodoList();
    },
    async completeTodo(id: number) {
      await this.$axios.$delete(`http://localhost:8080/todolist/${id}`);
      await this.getTodoList();
    },
  },
});
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

/* Todo App の Style */
.wrapper {
  min-height: 100vh;
  position: relative;
}

/* headerのstyle */
.header {
  height: 96px;
  width: 100%;
  background-color: #93c5fd;
}

.headline {
  font-size: 30px;
  line-height: 96px;
  margin-left: 20px;
  font-weight: 700;
  color: white;
}

/* todoリストのstyle */
.card {
  display: flex;
  justify-content: space-between;
}

/* 入力フォームのstyle */
.form {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  position: absolute;
  bottom: 20px;
}

.input {
  width: 80%;
  margin: 0 auto;
  border-radius: 5px;
  font-size: 20px;
  padding-left: 10px;
}

.button {
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  background: #93c5fd;
  color: white;
  border: none;
}
</style>