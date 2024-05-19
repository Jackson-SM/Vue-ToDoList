<script setup lang="ts">
import ButtonCustom from "./Button.vue";
import DropDownMenu from "./DropdownMenu.vue";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
</script>

<template>
    <DropDownMenu>
        <template #trigger="{ toggleDropdown }">
            <button @click="toggleDropdown">Options</button>
        </template>
        <template #content>
            <div>
                <ButtonCustom variant="destructive">
                    Delete
                    <FontAwesomeIcon :icon="faTrashCan" />
                </ButtonCustom>
            </div>
        </template>
    </DropDownMenu>
</template>

<style scoped></style>
