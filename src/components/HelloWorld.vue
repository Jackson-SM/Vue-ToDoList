<script setup lang="ts">
import {defineProps, ref} from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{count}}</button>
</template>