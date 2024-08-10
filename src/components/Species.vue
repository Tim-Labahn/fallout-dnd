<script setup lang="ts">
interface Species {
    name: string;
    maxStats: {
        S: number;  // Stärke
        P: number;  // Geschicklichkeit
        E: number;  // Ausdauer
        C: number;  // Charisma
        I: number;  // Intelligenz
        A: number;  // Agilität
        L: number;  // Glück
    };
    description: string;
    buff?: Record<string, string>;
    debuff?: Record<string, string>;
}

const species: Species[] = [
    {
        name: "Human",
        maxStats: { S: 100, P: 100, E: 100, C: 100, I: 100, A: 100, L: 100 },
        description:
            "Keine besonderen Eigenschaften oder Schwächen, aber große Vielseitigkeit.",
    },
    {
        name: "Ghoul",
        maxStats: { S: 150, P: 100, E: 100, C: 50, I: 100, A: 100, L: 100 },
        description:
            "Ghouls haben erhöhte Strahlenresistenz und können automatisch heilen, wenn sie einen erfolgreichen Wurf auf Konstitution machen. Sie verfallen in Rage, wenn die Lebenspunkte unter 20% fallen und können menschliche Leichen essen, um Gesundheit wiederherzustellen.",
        buff: {
            Heilung:
                "Heilt automatisch nach einem Kampf bei einem erfolgreichen Wurf auf Konstitution.",
            "Rads Immunität": "Immun gegen Strahlung.",
        },
        debuff: {
            Rage: "Verfällt in Rage, wenn die Lebenspunkte unter 20% fallen (erhöhte Stärke und Ausdauer, aber verringerte Intelligenz und Charisma. Außerdem übernimmt der GM vorübergehend die Kontrolle über den Charakter).",
            Schwäche: "Hühner.",
        },
    },
    {
        name: "Dog",
        maxStats: { S: 60, P: 80, E: 70, C: 50, I: 30, A: 40, L: 40 },
        description:
            "Hunde haben einen eigenen Charakterbogen mit speziellen Attributen und Fähigkeiten. Sie können normalerweise keine Waffen nutzen, außer mit spezieller Ausrüstung.",
        buff: {
            Klein:
                "Kann sich leichter verstecken und hat Vorteile bei Heimlichkeitswürfen. Kann ebenfalls durch kleine Öffnungen hindurch.",
        },
        debuff: {
            "Keine spezifischen Schwächen":
                "Eingeschränkte Fähigkeit zur Nutzung von Ausrüstung.",
        },
    },
    {
        name: "Robot",
        maxStats: { S: 100, P: 80, E: 120, C: 50, I: 150, A: 100, L: 100 },
        description:
            "Roboter haben eine dicke Haut, die ihnen hilft, 20% weniger Schaden durch physische Angriffe zu erleiden. Sie erleiden jedoch doppelten Schaden durch elektrische Angriffe.",
        buff: {
            "Dicke Haut": "Erleidet 20% weniger Schaden durch physische Angriffe.",
        },
        debuff: {
            Elektrizität: "Erleidet doppelten Schaden durch elektrische Angriffe.",
        },
    },
];

function formatMaxStats(stats: { S: number; P: number; E: number; C: number; I: number; A: number; L: number }): string {
    return `Stärke: ${stats.S}, Geschicklichkeit: ${stats.P}, Ausdauer: ${stats.E}, Charisma: ${stats.C}, Intelligenz: ${stats.I}, Agilität: ${stats.A}, Glück: ${stats.L}`;
}
</script>

<template>
    <div class="species">
        <h1>Species</h1>
        <ul class="species-list">
            <li v-for="speciesItem in species" :key="speciesItem.name" class="species-item">
                <h2>{{ speciesItem.name }}</h2>
                <p>
                    <strong>Max Stats:</strong>
                    {{ formatMaxStats(speciesItem.maxStats) }}
                </p>
                <p><strong>Description:</strong> {{ speciesItem.description }}</p>

                <!-- Buffs Section -->
                <template v-if="speciesItem.buff && Object.keys(speciesItem.buff).length > 0">
                    <p>
                        <strong>Buffs:</strong>
                    <ul>
                        <li v-for="(value, key) in speciesItem.buff" :key="key">
                            {{ key }}: {{ value }}
                        </li>
                    </ul>
                    </p>
                </template>

                <!-- Debuffs Section -->
                <template v-if="speciesItem.debuff && Object.keys(speciesItem.debuff).length > 0">
                    <p>
                        <strong>Debuffs:</strong>
                    <ul>
                        <li v-for="(value, key) in speciesItem.debuff" :key="key">
                            {{ key }}: {{ value }}
                        </li>
                    </ul>
                    </p>
                </template>
            </li>
        </ul>
    </div>
</template>

<style scoped>
/* Scoped styles for Species.vue */
.species {
    padding: 1rem;
    background-color: #f4f4f4;
    /* Light background for species section */
    border-radius: 8px;
    /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    /* Soft shadow for better depth */
}

h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #333;
    /* Darker text for better readability */
}

.species-list {
    list-style-type: none;
    /* Remove bullets */
    padding: 0;
    /* Remove padding */
    margin: 0;
    /* Remove margin */
}

.species-item {
    margin-bottom: 1.5rem;
    padding: 1rem;
    border: 1px solid #ddd;
    /* Light border around each species */
    border-radius: 8px;
    background-color: #fff;
    /* White background for each species item */
}

.species-item h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #444;
    /* Slightly darker text for names */
}

.species-item p {
    margin: 0.5rem 0;
    color: #555;
    /* Slightly darker text for descriptions */
}

.species-item strong {
    font-weight: bold;
}

.species-item ul {
    list-style-type: disc;
    /* Default bullet points for lists */
    margin-left: 20px;
    /* Indent for list items */
}
</style>
