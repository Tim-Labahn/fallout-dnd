<template>
    <div class="calculator">
        <h1>Calculator</h1>
        <form @submit.prevent="calculate">
            <div>
                <label for="ko">Konstitution (Ko):</label>
                <input type="number" v-model.number="ko" id="ko" min="10" max="100" required>
            </div>
            <div>
                <label for="be">Beweglichkeit (Be):</label>
                <input type="number" v-model.number="be" id="be" min="10" max="100" required>
            </div>
            <div>
                <label for="level">Level:</label>
                <input type="number" v-model.number="level" id="level" min="1" max="99" required>
            </div>
            <button type="submit">Calculate</button>
        </form>
        <div v-if="lp !== null || ap !== null">
            <h2>Results</h2>
            <p>Lebenspunkte (LP): {{ lp }}</p>
            <p>Aktionspunkte (AP): {{ ap }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const ko = ref<number | null>(null);
const be = ref<number | null>(null);
const level = ref<number | null>(null);
const lp = ref<number | null>(null);
const ap = ref<number | null>(null);

const calculate = () => {
    if (ko.value !== null && be.value !== null && level.value !== null) {
        lp.value = 80 + (ko.value / 2) + ((level.value - 1) * (ko.value / 10));
        ap.value = 65 + (be.value / 2);
    }
};
</script>

<style scoped>
.calculator {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background-color: white;
    border: 1px solid black;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

h1 {
    text-align: center;
}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

label {
    font-weight: bold;
}

input {
    padding: 8px;
    font-size: 16px;
    border: 1px solid black;
    border-radius: 4px;
}

button {
    padding: 10px;
    background-color: rgb(78, 128, 179);
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: rgb(60, 110, 150);
}

.results {
    margin-top: 20px;
}
</style>