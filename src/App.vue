<script lang="ts" setup>
import ButtonCustom from "./components/Button.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CardTask from "./components/CardTask.vue";
import NavbarComponent from "./components/Navbar.vue";
import { ref } from "vue";
import { TaskProps } from "./components/types/TaskProps.ts";

const tasks = ref<TaskProps[]>([
    {
        id: 1,
        title: "Geometry",
        description: "studying geometry for the test.",
        tags: ["studies", "math"],
    },
    {
        id: 2,
        title: "GoLang",
        description: "doing some projets using golang and vuejs.",
        tags: ["programming", "golang"],
    },
    {
        id: 3,
        title: "Python",
        description: "doing some projets using python and vuejs.",
        tags: ["programming", "python"],
    },
]);
</script>

<template>
    <NavbarComponent />
    <main>
        <div class="top">
            <ButtonCustom primary
                >Nova Tarefa
                <FontAwesomeIcon :icon="faPlus" />
            </ButtonCustom>
        </div>
        <section class="card-section">
            <h2>Tasks</h2>
            <div class="card-container">
                <CardTask v-for="task in tasks" :key="task.id" :task="task" />
            </div>
        </section>
    </main>
</template>

<style scoped>
.top {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem;
}

.card-section {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    padding: 2rem;
}

.card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    padding: 1rem;
}
</style>
