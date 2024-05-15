<script setup lang="ts">

</script>

<template>
  <header class="header">
    <h1 class="logo">Logo</h1>
    <div><span>Profile</span></div>
  </header>
</template>

<style scoped>
  .logo {
    font-size: 1.5rem;
    font-family: 'Poppins', sans-serif;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: var(--background-foreground);
  }
</style>