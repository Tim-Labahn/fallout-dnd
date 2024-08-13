<template>
    <div class="calculator">
        <h1>Calculator</h1>

        <div class="calculator-container">
            <!-- Lebenspunkte (LP) und Aktionspunkte (AP) Rechner -->
            <div class="calculator-box">
                <h2>LP & AP Calculator</h2>
                <form @submit.prevent="calculateLpAp">
                    <div>
                        <label for="ko">Konstitution (Ko):</label>
                        <input type="number" v-model.number="ko" id="ko" min="10" max="100" required />
                    </div>
                    <div>
                        <label for="be">Beweglichkeit (Be):</label>
                        <input type="number" v-model.number="be" id="be" min="10" max="100" required />
                    </div>
                    <div>
                        <label for="wa">Wahrnehmung (Wa):</label>
                        <input type="number" v-model.number="wa" id="wa" min="10" max="100" required />
                    </div>
                    <div>
                        <label for="level">Level:</label>
                        <input type="number" v-model.number="level" id="level" min="1" max="100" required />
                    </div>
                    <button type="submit">Calculate LP & AP</button>
                </form>
                <div class="results" v-if="lp !== null || ap !== null">
                    <h3>Results</h3>
                    <p v-if="lp !== null">Lebenspunkte (LP): {{ Math.ceil(lp) }}</p>
                    <p v-if="ap !== null">Aktionspunkte (AP): {{ Math.ceil(ap) }}</p>
                </div>
            </div>

            <!-- XP zum nächsten Level Rechner -->
            <div class="calculator-box">
                <h2>XP to Next Level Calculator</h2>
                <form @submit.prevent="calculateXpToNextLevel">
                    <div>
                        <label for="levelXp">Next Level:</label>
                        <input type="number" v-model.number="levelXp" id="levelXp" min="1" max="100" required />
                    </div>
                    <button type="submit">Calculate XP to Next Level</button>
                </form>
                <div class="results" v-if="xpToNextLevel !== null">
                    <h3>Results</h3>
                    <p>XP needed to reach the next level: {{ xpToNextLevel }}</p>
                </div>
            </div>

            <!-- DR calculator -->
            <div class="calculator-box">
                <h2>Damage Resistant Calculator</h2>
                <form @submit.prevent="calculateDamageResistant">
                    <div>
                        <label for="dmg">Schaden:</label>
                        <input type="number" v-model.number="dmg" id="dmg" min="1" max="100" required />
                    </div>
                    <div>
                        <label for="dr">Resistant:</label>
                        <input type="number" v-model.number="dr" id="dr" min="1" max="100" required />
                    </div>

                    <button type="submit">Calculate LP & AP</button>
                </form>
                <div class="results" v-if="goneThroughDamage !== null">
                    <h3>Results</h3>
                    <p>Damge that has gone through: {{ goneThroughDamage }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const dmg = ref<number>(0);
const dr = ref<number>(0);
const wa = ref<number | null>(null);
const ko = ref<number | null>(null);
const be = ref<number | null>(null);
const level = ref<number | null>(null);
const lp = ref<number | null>(null);
const ap = ref<number | null>(null);

const goneThroughDamage = ref<number | null>(null)
const levelXp = ref<number | null>(null);
const xpToNextLevel = ref<number | null>(null);

const calculateLpAp = () => {
    if (
        wa.value !== null &&
        ko.value !== null &&
        be.value !== null &&
        level.value !== null
    ) {
        lp.value = Math.ceil(
            80 + ko.value / 2 + (level.value - 1) * (ko.value / 10)
        );
        ap.value = wa.value + be.value;
    }
};

const calculateXpToNextLevel = () => {
    if (levelXp.value !== null) {
        const currentLevel = levelXp.value;
        const nextLevel = currentLevel + 1;

        if (nextLevel > 100) {
            xpToNextLevel.value = 0;
        } else {
            xpToNextLevel.value = (currentLevel * (currentLevel - 1) / 2) * 100
        }
    }
};

const calculateDamageResistant = () => {
    if (dmg !== null && dr !== null) {
        // Prozentuale Schadensresistenz berechnen
        const damageResistant = dmg.value * (dr.value / 100);

        // Tatsächlicher Schaden, der durchgeht
        const damageDone = dmg.value - damageResistant;

        goneThroughDamage.value = Math.ceil(damageDone);
    }
    // Falls dmg oder dr null ist, gib null zurück
};
</script>

<style scoped>
.calculator {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    text-align: center;
}

.calculator-container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.calculator-box {
    flex: 1;
    min-width: 0;
    /* Ensure boxes are the same size */
    padding: 20px;
    background-color: white;
    border: 1px solid black;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
}

h2 {
    font-size: 1.5em;
    margin-bottom: 20px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
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
    overflow-y: auto;
    /* Allow scrolling within results */
}
</style>
