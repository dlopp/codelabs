<template>
  <div class="wrapper">
    <header class="header">
      <h1 class="headline">Todo App for Web</h1>
    </header>
    <section class="main">
      <ul>
        <li v-for="(todo, index) in todoList" :key="todo.id" class="card">
          <p>{{ todo.title }}</p>
          <button @click.prevent="completeTodo(todo.id, index)">完了</button>
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
import { Context } from "@nuxt/types"

interface Data {
  title: string;
  todoList: {
    id: number;
    title: string;
  }[];
}

export default Vue.extend({
  async asyncData(context :Context) {
    const { app } = context
    const todoList = await app.$axios.$get("http://localhost:8080/todolist");
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
    async addTodo() {
      const todo = await this.$axios.$post("http://localhost:8080/todolist", {
        title: this.title,
      });
      this.todoList.push(todo)
      this.title = "";
    },
    async completeTodo(id: number, index: number) {
      this.$axios.$delete(`http://localhost:8080/todolist/${id}`);
      this.todoList.splice(index, 1)
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