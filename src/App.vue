<script setup lang="ts">
import { ref } from 'vue';
import Home from "./components/Home.vue";
import Rulebook from "./components/Rulebook.vue";
import Perks from "./components/Perks.vue";
import Species from "./components/Species.vue";

// Initializing route
const route = ref("Home");

// Function to change the route
const changeRoute = (newRoute: string) => {
  route.value = newRoute;
};
</script>

<template>
  <div class="app-container">
    <nav>
      <button @click="changeRoute('Home')">Home</button>
      <button @click="changeRoute('Rulebook')">Rulebook</button>
      <button @click="changeRoute('Perks')">Perks</button>
      <button @click="changeRoute('Species')">Species</button>
    </nav>

    <div class="content">
      <Home v-if="route === 'Home'" @changeRoute="changeRoute" />
      <Rulebook v-if="route === 'Rulebook'" />
      <Perks v-if="route === 'Perks'" />
      <Species v-if="route === 'Species'" />
    </div>
  </div>
</template>

<style src="./style.css"></style>
