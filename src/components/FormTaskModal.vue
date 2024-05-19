<script setup lang="ts">
import Modal from "./Modal.vue";
import InputComponent from "./Input.vue";
import ButtonCustom from "./Button.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
</script>

<template>
    <Modal>
        <div class="form-container">
            <h2 class="title-form">Create new Task</h2>
            <form action="/" @submit.capture="submitForm" @submit.prevent>
                <InputComponent type="text" name="title" v-model="title" placeholder="Title" />
                <textarea
                    name="description"
                    v-model="description"
                    placeholder="Description"
                    class="textarea"
                    rows="10"
                    cols="20"
                />
                <select class="select" multiple name="tags" id="tags" v-model="tags">
                    <option value="studies">Studies</option>
                    <option value="programming">Programming</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                </select>
                <ButtonCustom primary
                    >Add task
                    <FontAwesomeIcon :icon="faPlus" />
                </ButtonCustom>
            </form>
        </div>
    </Modal>
</template>

<style scoped>
.form-container {
    background: var(--background);
    padding: 1rem;
    width: 25rem;
    border-radius: 1rem;
}

.form-container form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    gap: 1rem;
}

.textarea {
    padding: 0.5rem;
    border: 1px solid var(--border);
    border-radius: 5px;
    width: 100%;
    font-family: "Poppins", sans-serif;

    background: transparent;
    color: var(--text);
    resize: none;
}

.textarea:focus {
    outline: none;
    border: 1px solid var(--primary);
}

.select {
    padding: 0.5rem;
    border: 1px solid var(--border);
    border-radius: 5px;
    width: 100%;
    font-family: "Poppins", sans-serif;

    background: transparent;
    color: var(--text);
}

.select:focus {
    outline: none;
    border: 1px solid var(--primary);
}

.title-form {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: normal;

    background: linear-gradient(45deg, var(--secondary) 10%, var(--primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>

<script lang="ts">
import useTasks from "../composables/useTasks.ts";

const { createNewTask } = useTasks();

export default {
    name: "FormTaskModal",
    components: {
        FontAwesomeIcon,
        ButtonCustom,
        InputComponent,
        Modal,
    },
    data() {
        return { title: "", description: "", tags: [] };
    },
    methods: {
        submitForm() {
            createNewTask({
                title: this.title,
                description: this.description,
                tags: this.tags,
            });
        },
    },
};
</script>
