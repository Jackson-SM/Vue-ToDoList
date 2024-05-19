<script setup lang="ts">
import ButtonCustom from "./Button.vue";
import { provide, ref, defineProps } from "vue";
import FormTask from "./FormTaskModal.vue";
import { ButtonCustomProps } from "./types/ButtonCustomProps.ts";

const isActive = ref(false);
provide("isActive", isActive);

withDefaults(defineProps<ButtonCustomProps>(), {
    variant: "primary",
});
</script>

<template>
    <div>
        <ButtonCustom v-bind="$attrs" @click="isActive = !isActive">
            <slot></slot>
        </ButtonCustom>
        <FormTask />
    </div>
</template>

<style scoped></style>

<script lang="ts">
export default {
    inheritAttrs: false,
};
</script>
