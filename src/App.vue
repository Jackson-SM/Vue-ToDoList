<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Button from "./components/Button.vue";
</script>

<template>
    <Navbar />
  <main>
    <Button>New Task</Button>
    <section>
      <h2>Tasks</h2>
      <div>
        <div><h1>Card1</h1></div>
        <div><h1>Card2</h1></div>
        <div><h1>Card3</h1></div>
        <div><h1>Card4</h1></div>
      </div>
    </section>
  </main>
</template>

<style scoped>
</style>
