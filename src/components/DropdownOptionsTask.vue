<script setup lang="ts">
import DropDownMenu from "./DropdownMenu.vue";
import ButtonCircle from "./ButtonCircle.vue";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
    <DropDownMenu>
        <template #trigger="{ toggleDropdown }">
            <button @click="toggleDropdown">Options</button>
        </template>
        <template #content>
            <div>
                <ButtonCircle>
                    <FontAwesomeIcon :icon="faTrash" />
                </ButtonCircle>
            </div>
        </template>
    </DropDownMenu>
</template>

<style scoped></style>
