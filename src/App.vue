<script setup lang="ts">
import { ref } from 'vue';
import Home from "./components/Home.vue";
import Rulebook from "./components/Rulebook.vue";
import Species from "./components/Species.vue";
import Perks from "./components/Perks.vue";
import Calculator from "./components/Calculator.vue";

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
      <button @click="changeRoute('Home')">Homse</button>
      <button @click="changeRoute('Rulebook')">Rulebook</button>
      <button @click="changeRoute('Species')">Species</button>
      <button @click="changeRoute('Perks')">Perks</button>
      <button @click="changeRoute('Calculator')">Calculator</button>
    </nav>

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
    </div>
  </div>
</template>
