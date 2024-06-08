<script setup lang="ts">
import DropDownMenu from "./DropdownMenu.vue";
import ButtonCircle from "./ButtonCircle.vue";
import { faTrash, faPlus, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import useTasks from "../composables/useTasks.ts";
import { provide, ref } from "vue";
import FormTaskModal from "./FormTaskModal.vue";

const { deleteTask, tasks } = useTasks();

const props = defineProps<{
    id: number;
}>();

const { id } = props;

const isActive = ref(false);
provide("isActive", isActive);

const task = tasks.find((task) => task.id === id);
</script>

<template>
    <DropDownMenu>
        <template #trigger="{ toggleDropdown }">
            <ButtonCircle @click="toggleDropdown">
                <FontAwesomeIcon :icon="faPlus" />
            </ButtonCircle>
        </template>
        <template #content>
            <ButtonCircle @click="deleteTask(id)">
                <FontAwesomeIcon :icon="faTrash" />
            </ButtonCircle>
            <div class="modal_edit">
                <ButtonCircle @click="isActive = !isActive">
                    <FontAwesomeIcon :icon="faPen" />
                </ButtonCircle>
                <FormTaskModal :task="task" />
            </div>
        </template>
    </DropDownMenu>
</template>

<style scoped>
.modal_edit {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
}
</style>
