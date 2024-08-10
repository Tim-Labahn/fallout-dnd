<script setup lang="ts">
import { ref } from 'vue';
import Home from "./components/Home.vue";
import Rulebook from "./components/Rulebook.vue";
import Species from "./components/Species.vue";
import Perks from "./components/Perks.vue";
import Calculator from "./components/Calculator.vue";
import CharacterSheet from './components/CharacterSheet.vue';

// Initializing route
const route = ref("Home");

// Function to change the route
const changeRoute = (newRoute: string) => {
  route.value = newRoute;
};
</script>

<template>
  <div class="app-container">
    <div class="nav">
      <nav>
        <button @click="changeRoute('Home')">Home</button>
        <button @click="changeRoute('Rulebook')">Rulebook</button>
        <button @click="changeRoute('Species')">Species</button>
        <button @click="changeRoute('Perks')">Perks</button>
        <button @click="changeRoute('Calculator')">Calculator</button>
        <button @click="changeRoute('CharacterSheet')">Character Sheet</button>
      </nav>
    </div>

    <div class="content">
      <div v-if="route === 'Home'">
        <Home />
      </div>
      <div v-if="route === 'Rulebook'">
        <Rulebook />
      </div>
      <div v-if="route === 'Species'">
        <Species />
      </div>
      <div v-if="route === 'Perks'">
        <Perks />
      </div>
      <div v-if="route === 'Calculator'">
        <Calculator />
      </div>
      <div v-if="route === 'CharacterSheet'">
        <CharacterSheet />

      </div>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* Ensure full height */
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 15px;
  background-color: rgb(245, 233, 113);
  /* Yellow shade for navbar */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  /* Subtle shadow for depth */
  z-index: 1000;
  border-bottom: 2px solid black;
  /* Black border at the bottom of the navbar */
}

.content {
  display: flex;
  align-items: start;
  justify-content: center;
  background-color: rgb(253, 244, 203);
  overflow: auto;
}
</style>
