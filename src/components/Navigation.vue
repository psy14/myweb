<script setup lang="ts">

</script>

<template>
  <div class="main">
    <div class="menu">
        <RouterLink to="/airecognize">AI識別</RouterLink>
        <RouterLink to="/autobetting">自動游戲</RouterLink>
        <RouterLink to="/game">游戲開發</RouterLink>
        <RouterLink to="contact">聯係方式</RouterLink>
    </div>
  </div>
</template>

<style scoped>
  .main {
    margin: 30px auto;
  }
  .menu {
    display: flex;
    justify-content: space-around;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
  }
</style>
