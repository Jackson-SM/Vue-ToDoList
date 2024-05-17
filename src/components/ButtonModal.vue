<script setup lang="ts">
import ButtonCustom from "./Button.vue";
import { provide, ref } from "vue";
import FormTask from "./FormTaskModal.vue";

const isActive = ref(false);
provide("isActive", isActive);
</script>

<template>
    <div>
        <ButtonCustom @click="isActive = !isActive">
            <slot></slot>
        </ButtonCustom>
        <FormTask />
    </div>
</template>

<style scoped></style>
