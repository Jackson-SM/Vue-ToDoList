<script setup lang="ts">

</script>

<template>
  <button class="button"><slot></slot></button>
</template>

<style scoped>
  .button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    background-color: var(--background-foreground);
    color: var(--text);
    font-family: 'Poppins', sans-serif;
    cursor: pointer;

    transition: background-color 0.1s ease;
  }

  .button:hover {
    background-color: var(--background-hover);
  }
</style>