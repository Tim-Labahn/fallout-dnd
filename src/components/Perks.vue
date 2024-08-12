<script setup lang="ts">
const perks = [
    'Strong Back: Carry more weight.',
    'Sneak: Move quietly and remain undetected.',
    'Scrounger: Find more ammunition.',
    'Quick Hands: Reload faster.',
    'Comprehension: Gain more skill points from books.'
];
</script>

<template>
    <div class="perks">
        <p>You got me, this is still in work xD</p>
        <h1>Perks</h1>
        <ul>
            <li v-for="perk in perks" :key="perk">{{ perk }}</li>
        </ul>
    </div>
</template>

<style scoped>
/* Scoped styles for Perks.vue */
</style>
