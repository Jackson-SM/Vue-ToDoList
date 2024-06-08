<script lang="ts" setup>
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ButtonModal from "./components/ButtonModal.vue";
import CardTask from "./components/CardTask.vue";
import NavbarComponent from "./components/Navbar.vue";
import useTasks from "./composables/useTasks.ts";

const { tasks } = useTasks();
</script>

<template>
    <NavbarComponent />
    <main>
        <div class="top">
            <ButtonModal variant="primary"
                >Nova Tarefa
                <FontAwesomeIcon :icon="faPlus" />
            </ButtonModal>
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
