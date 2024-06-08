<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
    <input
        class="input"
        :value="props.modelValue"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
</template>

<style scoped>
.input {
    padding: 0.5rem;
    border: 1px solid var(--border);
    border-radius: 5px;
    width: 100%;
    font-family: "Poppins", sans-serif;

    background: transparent;
    color: var(--text);
}

.input:focus {
    outline: none;
    border: 1px solid var(--primary);
}
</style>

<script lang="ts">
export default {
    name: "InputComponent",
};
</script>
