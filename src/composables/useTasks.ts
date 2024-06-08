// src/composables/useTasks.ts
import { reactive } from "vue";
import { TaskProps } from "../components/types/TaskProps.ts";

const tasks = reactive<TaskProps[]>([
    {
        id: 1,
        title: "Task 1",
        description: "Description of Task 1",
        tags: ["tag1", "tag2"],
    },
]);

const createNewTask = (newTask: Omit<TaskProps, "id">) => {
    const id = tasks.length + 1;
    tasks.push({ ...newTask, id });
};

const deleteTask = (id: number) => {
    const index = tasks.findIndex((task) => task.id === id);
    console.log(id);
    tasks.splice(index, 1);
};

const updateTask = (id: number, updatedTask: Omit<TaskProps, "id">) => {
    const index = tasks.findIndex((task) => task.id === id);
    console.log(updatedTask);
    tasks[index] = { ...tasks[index], ...updatedTask };
};

export default function useTasks() {
    return { tasks, createNewTask, deleteTask, updateTask };
}
