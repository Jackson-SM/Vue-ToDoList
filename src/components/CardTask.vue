<script setup lang="ts">
import ButtonCircle from "./ButtonCircle.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import BadgeComponent from "./Badge.vue";
import { TaskProps } from "./types/TaskProps.ts";

const props = defineProps<{
    task: TaskProps;
}>();

const { title, description, tags } = props.task;
</script>

<template>
    <div class="card">
        <header>
            <h3 class="title">{{ title }}</h3>
            <ButtonCircle>
                <FontAwesomeIcon :icon="faPlus" />
            </ButtonCircle>
        </header>
        <div class="content">
            <p class="description">{{ description }}</p>
        </div>
        <div class="badges">
            <BadgeComponent v-for="tag in tags" :key="tag">{{ tag }}</BadgeComponent>
        </div>
    </div>
</template>

<style scoped>
.card {
    padding: 1rem;
    border-radius: 0.25rem;
    background-color: var(--card);
    font-family: "Poppins", sans-serif;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    height: 150px;

    display: flex;
    flex-direction: column;
    gap: 10px;
}

.card:hover {
    background-color: var(--card-hover);
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title {
    font-size: 1.1rem;
    color: var(--text-foreground);
}

.description {
    font-size: 0.9rem;
    color: var(--text-foreground);
}

.badges {
    display: flex;
    gap: 0.5rem;
}
</style>
