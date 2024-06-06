<script setup lang="ts">
import BadgeComponent from "./Badge.vue";
import DropdownOptionsTask from "./DropdownOptionsTask.vue";
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
            <DropdownOptionsTask />
        </header>
        <div class="content">
            <p class="description">{{ description }}</p>
        </div>
        <div class="badges">
            <BadgeComponent v-for="tag in tags" :key="tag">{{ tag.toUpperCase() }}</BadgeComponent>
        </div>
    </div>
</template>

<style scoped>
.card {
    padding: 1rem;
    background-color: var(--card);
    font-family: "Poppins", sans-serif;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    height: 400px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;

    background:
        linear-gradient(var(--card), var(--card)) padding-box,
        linear-gradient(-40deg, var(--primary), var(--secondary), transparent 40%) border-box;
    border: 1px solid transparent;
    border-radius: 5px;

    transition: box-shadow 0.3s;
}

.card:hover {
    box-shadow: var(--muted-primary) 1px 0 15px;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title {
    font-size: 1.7rem;
    color: var(--text-foreground);

    background: linear-gradient(45deg, var(--secondary) 30%, var(--primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.description {
    font-size: 0.75rem;
    color: var(--text-foreground);
}

.badges {
    align-self: end;
    display: flex;
    align-items: end;
    gap: 0.5rem;
}
</style>
