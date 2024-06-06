<script setup lang="ts">
import Modal from "./Modal.vue";
import InputComponent from "./Input.vue";
import ButtonCustom from "./Button.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import BadgeComponent from "./Badge.vue";
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
                <div class="input_field_tags">
                    <InputComponent type="text" name="tags" v-model="tagInput" placeholder="Tag" />
                    <ButtonCustom @click="addTag(tagInput)" type="button">
                        <FontAwesomeIcon :icon="faPlus" />
                    </ButtonCustom>
                </div>
                <div class="field_tags">
                    <BadgeComponent v-for="(tag, index) in tags" v-bind:key="tag" @click="removeTag(index)"
                        >{{ tag }}
                    </BadgeComponent>
                </div>
                <ButtonCustom primary
                    >Add task
                    <FontAwesomeIcon :icon="faPlus" />
                </ButtonCustom>
                <p v-if="error.hasError">{{ error.message }}</p>
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

.title-form {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: normal;

    background: linear-gradient(45deg, var(--secondary) 10%, var(--primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.input_field_tags {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.field_tags {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}
</style>

<script lang="ts">
import useTasks from "../composables/useTasks.ts";

const { createNewTask } = useTasks();

type ErrorFormType = { hasError: boolean; message: string };

export default {
    name: "FormTaskModal",
    components: {
        FontAwesomeIcon,
        ButtonCustom,
        InputComponent,
        Modal,
    },
    data() {
        return {
            title: "",
            description: "",
            tags: [] as string[],
            tagInput: "",
            error: { hasError: false, message: "" } as ErrorFormType,
        };
    },
    methods: {
        submitForm() {
            if (this.title.length < 2 || this.description.length < 5) {
                this.error = {
                    hasError: true,
                    message: "Title or description must have at least 2 and 5 characters, respectively",
                };
                return;
            }
            createNewTask({
                title: this.title,
                description: this.description,
                tags: this.tags,
            });
        },
        addTag(tag: string) {
            const tagExists = this.tags.find((t) => t === tag);
            if (tagExists) {
                this.error = {
                    hasError: true,
                    message: "Tag already exists",
                };

                return;
            }

            if (tag.length < 3) {
                this.error = {
                    hasError: true,
                    message: "Tag must have at least 3 characters",
                };
                return;
            }

            this.tags.push(tag);
        },
        removeTag(index: number) {
            this.tags.splice(index, 1);
        },
    },
};
</script>
