// src/composables/useTasks.ts
import { reactive } from "vue";
import { TaskProps } from "../components/types/TaskProps.ts";

const tasks = reactive<TaskProps[]>([]);

const createNewTask = (newTask: Omit<TaskProps, "id">) => {
    const id = tasks.length + 1;
    tasks.push({ ...newTask, id });
};

export default function useTasks() {
    return { tasks, createNewTask };
}
