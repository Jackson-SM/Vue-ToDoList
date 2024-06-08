<script setup lang="ts">
import { defineComponent, inject } from "vue";

const isActive = inject("isActive");

defineComponent({
    name: "ModalComponent",
});
</script>

<template>
    <div class="modal" :class="{ active: isActive }" @click.self="isActive = !isActive">
        <slot></slot>
    </div>
</template>

<style scoped>
.modal {
    display: none;
}

.modal.active {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
</style>
