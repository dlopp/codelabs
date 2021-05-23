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

</style>