<script setup lang="ts">
import DropDownMenu from "./DropdownMenu.vue";
import ButtonCircle from "./ButtonCircle.vue";
import { faTrash, faPlus, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
    <DropDownMenu>
        <template #trigger="{ toggleDropdown }">
            <ButtonCircle @click="toggleDropdown">
                <FontAwesomeIcon :icon="faPlus" />
            </ButtonCircle>
        </template>
        <template #content>
            <ButtonCircle>
                <FontAwesomeIcon :icon="faTrash" />
            </ButtonCircle>
            <ButtonCircle>
                <FontAwesomeIcon :icon="faPen" />
            </ButtonCircle>
        </template>
    </DropDownMenu>
</template>

<style scoped></style>
