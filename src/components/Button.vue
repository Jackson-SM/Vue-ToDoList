<script lang="ts" setup>
const props = defineProps<{
    variant?: "primary" | "destructive";
}>();
</script>

<template>
    <button :class="props.variant" class="button">
        <slot></slot>
    </button>
</template>

<style scoped>
.button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    background-color: var(--background-foreground);
    color: var(--text);
    font-family: "Poppins", sans-serif;
    cursor: pointer;

    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

    margin: 10px;

    transition: background-color 0.15s ease;
}

.button:hover {
    background-color: var(--background-hover);
}

.button.primary {
    background-color: var(--primary);
}

.button.primary:hover {
    background-color: var(--primary-hover);
}

.button.destructive {
    background-color: var(--destructive);
}

.button.destructive:hover {
    background-color: var(--destructive-hover);
}
</style>

<script lang="ts">
export default {
    name: "ButtonCustom",
};
</script>
