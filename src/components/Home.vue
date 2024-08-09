<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits<{
    (event: 'changeRoute', newRoute: string): void;
}>();

const title = 'Welcome to the Fallout Pen-and-Paper RPG';
const subtitle = 'Your Gateway to Post-Apocalyptic Adventures';
const description = `Dive into the world of Fallout with our comprehensive Pen-and-Paper RPG rulebook. Explore the wasteland, battle foes, and build your character with the S.P.E.C.I.A.L system. Whether you're a seasoned player or new to the game, find everything you need to start your adventure right here.`;
const features = [
    'Detailedddddddddd Character Creation System',
    'Comprehensive Rules for Skills and Combat',
    'A Variety of Perks and Species to Choose From',
    'Engaging Quests and Experience Rewards',
    'Interactive Rulebook for Easy Reference'
];
</script>

<template>
    <div class="home">
        <header>
            <h1>{{ title }}</h1>
            <p class="subtitle">{{ subtitle }}</p>
        </header>
        <section class="description">
            <p>{{ description }}</p>
        </section>
        <section class="features">
            <h2>Key Features</h2>
            <ul>
                <li v-for="feature in features" :key="feature">{{ feature }}</li>
            </ul>
        </section>
        <section class="cta">
            <h2>Get Started</h2>
            <p>Ready to embark on your journey? Check out the sections below to explore more.</p>
            <button @click="emit('changeRoute', 'Rulebook')">Explore the Rulebook</button>
            <button @click="emit('changeRoute', 'Perks')">View Perks</button>
            <button @click="emit('changeRoute', 'Species')">Explore Species</button>
        </section>
    </div>
</template>

<style scoped>
/* Specific styles for Home.vue can go here if needed */
</style>
