<script setup lang="ts">
const species = [
    'Human: Versatile and adaptable.',
    'Ghoul: Increased resistance to radiation.',
    'Super Mutant: Enhanced strength and durability.',
    'Scribe: Knowledgeable and tech-savvy.',
    'Synth: Advanced combat capabilities.'
];
</script>

<template>
    <div class="species">
        <h1>Species</h1>
        <ul>
            <li v-for="speciesItem in species" :key="speciesItem">{{ speciesItem }}</li>
        </ul>
    </div>
</template>

<style scoped>
/* Scoped styles for Species.vue */
</style>
