<script setup lang="ts">
import { defineEmits } from "vue";

const emit = defineEmits<{
    (event: "changeRoute", newRoute: string): void;
}>();

const title = "Welcome to the Wasteland";
const subtitle = "War. War never changes.";

const features = [
    "Detailed Character Creation System",
    "Comprehensive Rules for Skills and Combat",
    "A Variety of Perks and Species to Choose From",
    "Engaging Quests and Experience Rewards",
    "Interactive Rulebook for Easy Reference",
];
</script>

<template>
    <div class="home">
        <header>
            <h1>{{ title }}</h1>
            <p class="subtitle">{{ subtitle }}</p>
        </header>
        <section class="description">
            <p>
                Die Vereinigten Staaten von Amerika gibt es nicht mehr. Sie wurden durch
                den Abschuss der Atomsprengköpfe der Welt zerstört. Die darauf folgende
                Apokalypse beendete sowohl den großen Krieg als auch die zivilisierte
                Welt. An ihrer Stelle entstand das Ödland, eine verstrahlte Landschaft,
                die von zerstörten Städten, verfallenden Zivilisationen und Gruppen
                verzweifelter Überlebender übersät ist. Sie wird von einer Vielzahl
                mutierter Kreaturen, schrecklicher Bestien und unsterblicher Ghule
                bewohnt. Die Strahlung der Detonationen breitete sich schnell aus.
                Alles, was nicht sofort getötet wurde, wurde verstrahlt und die
                wertvollsten Pflanzen- und Tierarten des Landes wurden ausgelöscht.
            </p>
            <p>
                Überlebende arbeiten daran, das Wenige zurückzugewinnen, das sie können,
                und zu retten, was sie nicht wieder aufbauen können. Die Zivilisation
                beginnt wieder Fuß zu fassen, und bestimmte Gebiete des Landes haben ein
                Maß an Stabilität erreicht, das man zumindest für die Reichen und
                Mächtigen als komfortabel bezeichnen könnte.
            </p>
            <p>
                Mit dem Wachstum dieser Gemeinschaften haben sich unterschiedliche
                Fraktionen abgespalten. Jede Fraktion versucht, ihren eigenen Weg zu
                gehen, und einige sind weitaus gefährlicher als andere. Die bei weitem
                gefährlichsten sind die Raider. Sie legen keinen Wert auf ein
                Menschenleben außer ihrem eigenen. Dennoch hat die Zivilisation trotz
                des Widerstands begonnen zu gedeihen. Handel, Wirtschaft und sogar
                Regierung sind in einigen Gebieten des Ödlands zurückgekehrt. Jede
                Gemeinschaft passt ihr eigenes Regierungssystem ihren Bedürfnissen
                entsprechend an. Händler reisen auf geschützten Routen und handeln in
                Städten im gesamten Ödland. Die Händler haben eine neue Währung in Form
                von Kronkorken(„Caps“) geschaffen.
            </p>
            <p>
                Das Leben im Ödland ist hart. Die Sonne brennt hart und die Strahlung ist intensiv. Sauberes Wasser und
                Nahrung sind Mangelware. Die meisten Überlebenden mussten sich an schmutziges Wasser und verstrahlte
                Nahrung gewöhnen. Allein zu überleben ist bestenfalls schwierig, aber das Leben in einer Gemeinschaft
                bringt seine eigenen Schwierigkeiten mit sich.
            </p>
        </section>

    </div>
</template>

<style scoped>
/* Specific styles for Home.vue can go here if needed */
</style>
