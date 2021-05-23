<template>
  <div class="wrapper">
    <header class="header">
      <div class="container">
        <h1 class="headline">Todo App for Web</h1>
      </div>
    </header>
    <section class="main">
      <ul>
        <li class="card">
          <p class="todo">todo1です</p>
          <button class="done">
            完了
          </button>
        </li>
        <li class="card">
          <p class="todo">todo2です</p>
          <button class="done">
            完了
          </button>
        </li>
      </ul>
      <form class="form">
        <input type="text" class="input" />
        <button type="submit" class="button">Todo 登録</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  
}
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