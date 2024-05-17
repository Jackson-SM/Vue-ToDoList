<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "BadgeComponent",
});
</script>

<template>
    <span class="badge">
        <slot></slot>
    </span>
</template>

<style scoped>
.badge {
    font-size: 0.7rem;
    border-radius: 10px;
    background: transparent;
    border: 1px solid var(--border);
    padding: 0.2rem 0.6rem;
}
</style>
