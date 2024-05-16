<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "ButtonCircle",
});
</script>

<template>
    <button class="button-circle">
        <slot></slot>
    </button>
</template>

<style scoped>
.button-circle {
    background-color: var(--background);
    color: var(--text-foreground);
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s;
}

.button-circle:hover {
    background-color: var(--background-hover);
}
</style>
