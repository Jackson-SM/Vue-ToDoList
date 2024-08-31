<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref();

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};
</script>

<template>
    <div class="dropdown">
        <slot name="trigger" :toggleDropdown="toggleDropdown"></slot>
        <div class="dropdown-content" :class="{ is_open: isOpen }">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style scoped>
/* The container <div> - needed to position the dropdown content */
.dropdown {
    position: relative;
}

/* Dropdown Content (Hidden by Default) */

.dropdown-content {
    opacity: 0;
    pointer-events: none;

    position: absolute;

    padding: 1rem;

    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    background-color: var(--card);
    color: var(--text-foreground);
    border-radius: var(--radius);

    z-index: 1;

    transition: all ease 0.3s;

    display: flex;
    gap: 1rem;
}

.dropdown-content.is_open {
    pointer-events: auto;
    opacity: 1;
    animation: dropdown_animation 0.3s ease alternate forwards;
}

/* Links inside the dropdown */
.dropdown-content a {
    color: var(--card-foreground);
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
    background-color: var(--accent);
}
</style>
