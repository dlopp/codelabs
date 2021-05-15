<template>
  <div class="wrapper">
    <header class="header">
      <div class="container">
        <h1 class="headline">Todo App for Web</h1>
      </div>
    </header>
    <section class="main">
      <ul>
        <li v-for="(todo, index) in todoList" :key="todo.id" class="card">
          <p class="todo">{{ todo.title }}</p>
          <button class="done" @click.prevent="completeTodo(todo.id, index)">完了</button>
        </li>
      </ul>
      <form @submit.prevent="addTodo" class="form">
        <input type="text" class="input" v-model="title" />
        <button type="submit" class="button">Todo 登録</button>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Context } from "@nuxt/types";

interface Data {
  title: string;
  todoList: {
    id: number;
    title: string;
  }[];
}

export default Vue.extend({
  async asyncData(context: Context) {
    const { app } = context;
    const todoList = await app.$axios.$get("/todolist");
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
      const res = await this.$axios.$post("/todolist", {
        title: this.title,
      });
      
      this.todoList.push(res);
      this.title = "";
    },
    async completeTodo(id: number, index: number) {
      try {
        await this.$axios.$delete(`/todolist/${id}`); 
        this.todoList.splice(index, 1);
      } catch(err) {
        alert('エラーが発生しました。')
      }
    },
  },
});
</script>

<style>
:root {
  --main-color: #93c5fd;
  --hover-color: #23c5fd;
}


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

.main {
  margin: 10px auto;
  max-width: 36rem; 
}

.container {
  max-width: 36rem;
  margin: 0 auto;
}

/* headerのstyle */
.header {
  height: 96px;
  width: 100%;
  background-color: var(--main-color);
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
  align-items: center;
}

/* 入力フォームのstyle */
.form {
  display: flex;
  padding: 0 20px;
  position: absolute;
  bottom: 20px;
}

.input {
  border-radius: 5px;
  font-size: 20px;
  padding-left: 10px;
  width: 400px;
  margin-right: 10px;
}

.button {
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  background: var(--main-color);
  color: white;
  border: none;
}

.button:hover {
  background-color: var(--hover-color);
}

.todo {
  font-size: 1.5rem;
  margin-top: 5px;
}

.done {
  padding: 5px 10px;
  font-weight: bold;
  border-radius: 4px;
  color: white;
  background-color: var(--main-color);
  border: none;
  cursor: pointer;
}

.done:hover {
  background-color: var(--hover-color);
}

</style>