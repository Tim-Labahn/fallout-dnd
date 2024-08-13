<script setup lang="ts">
interface Perk {
    name: string;
    ranks: number;
    requirements?: {
        STR?: number;
        PER?: number;
        END?: number;
        CHA?: number;
        INT?: number;
        AGI?: number;
        LCK?: number;
        LVL?: number;
        Race?: string;
    };
    description: string;
}

const perks: Perk[] = [
    {
        name: "Action Boy/Girl",
        ranks: 1,
        description:
            "Wenn du AP nutzt um eine zusätliche aktion auszuführen, Sind deine Skill test nicht erschwert.",
    },
    {
        name: "Adamantium Skeleton",
        ranks: 3,
        requirements: { END: 70, LVL: 1 },
        description:
            "Wenn du schaden erleidest, steigt die numer and kriithscen würfen die es braucht um dich kritisch zu treffen. Für jedes Level Braucht es einen kritischen wurf Mehr, zum beispiel Bei Rank 3 Braucht es 4 Würfe mit 5 oder 6 um dich kritisch zu treffen.",
    },
    {
        name: "Adrenalin Rush",
        ranks: 1,
        requirements: { STR: 70 },
        description:
            "Wenn deine HP under deine Maximalen HP sinken, steigt dein STR score für alle STR tests auf 100",
    },
    {
        name: "Animal Friend",
        ranks: 2,

        requirements: { CHA: 60, LVL: 1 },
        description:
            "Auf level 1, wann immer eine creature dich angreift die vom type Insect, Eidechse oder Säugetier ist, Würfle Einen W6: wenn der wurf 4 oder weniger ist, greift die Kreatur dich nicht an. Kann aber andere angreifen. Auf level 2, kannst du einen wurf auf CHA + Survial nachen mit einer schwierigkeit von 2. Bei einem Erfolg sieht dich die creatur als Friedlich an, und wird JEDEN angreifen der dich angreift. Jedes mal wenn du diesen Perk einsetzt, erhöht sich die Vorraussetzung Level um 5.",
    },
    {
        name: "Aquaboy/Aquagirl",
        ranks: 2,
        requirements: { END: 50, LVL: 1 },
        description:
            "Wasser ist dein freund. Bei Rank 1, erleidest du keinen radiation damge mehr durch das schwimmen durch Wasser, und du kanst dine luft doppelt so lange halten wie normal. Bei Rank 2, haben gegner schwierigkeiten dich zu sehen wenn du unter wasser bist. Rank 2 Level Requirment ist 4+",
    },
    {
        name: "Armorer",
        ranks: 4,

        requirements: { STR: 50, INT: 60 },
        description:
            "Du kanst rüstung mit verbeserungs mods verbessern. Jeder rank dieses Perks scheltet ein level an Mods Frei. Bei Rank 1 kanst du Mod level 1, etc.",
    },
    {
        name: "Awareness",
        ranks: 1,

        requirements: { PER: 70 },
        description:
            "Wenn du die kleine Aktion Zielen, verwendest erhält beim nächsten angriff, dein höchster wurf Piercing.",
    },
    {
        name: "Barbarian",
        ranks: 1,
        requirements: { STR: 70, LVL: 4, Race: "Human" },
        description:
            "Deine Physische DR Steigt anhand Deines STR Wertes. STR 80-90 = +10 Physical DR, STR 90-100 = +15 Physical DR, STR 100+ = +20 Physical DR",
    },
    {
        name: "Basher",
        ranks: 1,
        requirements: { STR: 60 },
        description:
            "Wenn du einen nahkampf angriff mit einer einhand machst erhält dein angriff zusätlich den Vicious Effekt",
    },
    {
        name: "Große Liga",
        ranks: 1,
        requirements: { STR: 80 },
        description:
            "Wenn du einen nahkampf angriff mit einer zweihand waffe machst erhält dein angriff zusätlich den Vicious Effekt",
    },
    {
        name: "Black Widow/Lady Killer",
        ranks: 1,
        requirements: { CHA: 60 },
        description:
            "Wenn du einen CHA Test nutzt bei einer person des anderen geschlechtes kanst du einen W20 Zu deinen gunsten nutzen. Ebenfalls Sind Alle angriffe gegen dass andere geschlecht um einen W6 Stärker.",
    },
    {
        name: "Blacksmith",
        ranks: 3,
        requirements: { STR: 60, LVL: 2 },
        description:
            "Du kanst Waffen mit verbeserungs mods verbessern. Jeder rank dieses Perks scheltet ein level an Mods Frei. Bei Rank 1 kanst du Mod level 1, etc. Jedes mal wenn du diesen perk Lernst erhöht sich die Level vorraussetzung um 4.",
    },
    {
        name: "Bessere Krits",
        ranks: 1,
        requirements: { LCK: 90 },
        description:
            "Jedesmal wenn du einen angriff ausführst kannst du einen Glückspunkt verbrauchen und im gegenzug ist dein angriff kritisch.",
    },
    {
        name: "Blitz",
        ranks: 2,
        requirements: { AGI: 90, LVL: 1 },
        description:
            "Rank 1: Wenn du inerhalb eines Zuges dich zu einem gegner bewegst und ihr mit nahkampf angreifst, kanst du einen W20 zu deinen gunsten nutzen. Rank 2: Zusätlich fügst du einen W6 mehr schaden an, Die Level vorraussetzung steig bei Rank 2 um 3.",
    },
    {
        name: "Bloody Mess",
        ranks: 1,
        requirements: { LCK: 60 },
        description:
            "Wenn du einen kritischen treffer machst erleided das ziel einen weiteren treffer an einer zufälligen stelle.",
    },
    {
        name: "Can Do!",
        ranks: 1,
        requirements: { LCK: 50 },
        description:
            "Wenn du beim durchsuchen eines behälters essen findest, Findest du ein random Essens gegenstand.",
    },
    {
        name: "Cap Collector",
        ranks: 1,
        requirements: { CHA: 50 },
        description:
            "Wenn du handelst kanst du dank deiner guten verhandlungen denn preis um 10% steigen oder sinken lassen.",
    },
    {
        name: "Cautious Nature",
        ranks: 1,
        requirements: { PER: 50 },
        description:
            "Wann immer du für einen skill test AP ausgibt um einen W20 bonus zu kaufen, kanst du diesen neu würfeln.",
    },
    {
        name: "Center Mass",
        ranks: 1,
        requirements: { AGI: 70 },
        description:
            "Das du beim zielen den bauch auswählst, trifft dieser schuss. Ebenfalls kanst du einen W20 zu deinen gunsten beim zielen nutzen.",
    },
    {
        name: "Chem Resistant",
        ranks: 2,
        requirements: { END: 70, LVL: 1 },
        description:
            "Rank 1: Wenn du eine droge nutzt, würfle mit einem W6 weniger beim testen ob du süchtig wirst. Rank 2: Du Kannst nicht mehr abhänig werden. Rank 2 vorraussetzung: END 70, Level 5+",
    },
    {
        name: "Chemist",
        ranks: 1,
        requirements: { INT: 70 },
        description:
            "Chems die du hergestellt hastm halten doppelt so lange an, ebenfals schaltest du alle Drogen recepte frei.",
    },
    {
        name: "Commando",
        ranks: 2,
        requirements: { END: 80, LVL: 2 },
        description:
            "Wenn du einen Fernangriff machst, mit einer waffe die Feuerrate 3 oder höher macht diese waffe pro rank einen W6 mehr. Bei Rank 2: Ist die Letze vorraussetung 5+",
    },
    {
        name: "Comprehentsion",
        ranks: 1,
        requirements: { INT: 60 },
        description:
            "Wenn du ein magzin für einen Bonus liest, kannst du einen W6 Würfeln und solltest du eine 5 oder 6 würfeln, erhälst du den Effekt doppelt.",
    },
    {
        name: "Daring Nature",
        ranks: 1,
        requirements: { LCK: 70 },
        description:
            "Solltest du AP ausgeben um einen W20 für deinen angriff zu kaufen. Kannst du diesen Ap An den GM geben. dafür Kannst du diesen W20 neu würfeln.",
    },
    {
        name: "Daring Nature",
        ranks: 1,
        requirements: { LCK: 70 },
        description:
            "Solltest du AP ausgeben um einen W20 für deinen angriff zu kaufen. Kannst du diesen Ap An den GM geben. dafür Kannst du diesen W20 neu würfeln.",
    },
    {
        name: "Demolition Expert",
        ranks: 1,
        requirements: { PER: 60, LCK: 60 },
        description:
            "Wenn du einen angriff mit einer waffe vom typ Explosion machst, Erhält der angriff den VICIOUS Damage effekt. Ebenfals schaltest du Sprengstoff rezepte frei.",
    },
    {
        name: "Dodger",
        ranks: 1,
        requirements: { AGI: 60, LVL: 4 },
        description:
            "Wenn du die Hauptaktion Ausweichen verwendest, kanst du einen W20 zu deinen gunsten nutzen",
    },
    {
        name: "Dogmeat",
        ranks: 1,
        requirements: { CHA: 50 },
        description:
            "Du bist in dieser von tod überkommenen welt nicht allein, du hast einen Hund. Dein Hund kümmert sich um sich selbst was essen und trinken angeht. Sollte dein hund sterben, findest du mit sicherheit schnell einen neuen streuner. Oder wenn dein hund dich zu sehr nervt kanst du nach seinem Tod auch diesen perk umtauschen.",
    },
    {
        name: "Entomologist",
        ranks: 1,
        requirements: { INT: 70 },
        description:
            "Bei einem angrif gegen ein NPC vom typ Insekt, erhällt dein angriff Piercing +1.",
    },
    {
        name: "Fast Metabolism",
        ranks: 3,
        requirements: { END: 60, LVL: 1, Race: "Not a Robot" },
        description:
            "Wenn du 10 oder mehr HP auf andere wege als Rasten regenerierst, heilst du Pro rank in diesem Perk 5 zusätliche HP.",
    },
    {
        name: "Faster Healing",
        ranks: 1,
        requirements: {
            END: 60,
            Race: " Not a Robot",
        },
        description:
            "Wenn du ein END + Survival test machst um deine verletzungen zu heilen, kanst du einen W20 zu deinen gunsten nutzen.",
    },
    {
        name: "Finesse",
        ranks: 1,
        requirements: { AGI: 90 },
        description:
            "Einmal pro Kampf, Kannst du Alle genutzen W6 neu werfen ohne Glückspunkte zu verbrauchen.",
    },
    {
        name: "Fortune Finder",
        ranks: 3,
        requirements: { LCK: 50, LVL: 2 },
        description:
            "Wenn du einen wurf machst um zu schauen wie viel geld du findest, findest du je nach rank mehr. Rank 1: du finfest 2W4 mehr geld, Rank 2: du finfest 5W4 mehr geld, Rank 1: du finfest 8W4 mehr geld,",
    },
    {
        name: "Ghost",
        ranks: 1,
        requirements: { PER: 50, AGI: 60 },
        description:
            "Wenn du einen wurf auf AGI + Sneak machst, kannst du einen W20 zu deinen gunsten nutzen.",
    },
    {
        name: "Grim Reaper",
        ranks: 1,
        requirements: { LCK: 80 },
        description:
            "Wenn du mit einem angriff einen oder mehrere gegner Tötest, und du mit einem W6 eine 5 oder höher wirfst, füge zwei AP zum gruppen AP pool.",
    },
    {
        name: "Gun Fu",
        ranks: 3,
        requirements: { AGI: 100, LVL: 1 },
        description:
            "Rank 1: Wenn du einen gegner aus der ferne triffst kannst du 1 AP verbrauchen um einen weiteren gegner an einer zufälligen stelle zu treffen. Dieser erleided den selben schaden wie der erste. Rank 2: Auf Rank 2 Kanst du bis zu 2 AP einsetzen um stat dessen zwei weitere gegner zu treffen. Rank 3: Du kannst bis zu 3 AP verwenden um 3 Gegner zu treffen. Mit jedem perk level steigt das benötigte level um 5.",
    },
    {
        name: "Gun Nut",
        ranks: 3,
        requirements: { INT: 60, LVL: 2 },
        description:
            "Rank 1: Du kanst waffen mit einfachen mods verbessern. Rank 2: du kanst waffen mit fortgeschritten mods verbessern. Rank 3: Du kanst waffen maximal verbessern.",
    },
    {
        name: "Gunslinger",
        ranks: 2,
        requirements: { AGI: 70, LVL: 2 },
        description:
            "Wenn du einen angriff mit einer einhand waffe machst die eine feuerrate von 2 oder weniger hat, erhöt sich der waffen schaden um +1 pro rank. Zusätlich kanst du pro runde den location würfel neu rollen. Rank 2 ist erst bei Level 6 frei schaltbar",
    },
    {
        name: "Hacker",
        ranks: 1,
        requirements: { INT: 80 },
        description:
            "Die schwierigkeit ein terminal zu knacken sinkt um 1. Schwache Terminals brauchen keine probe mehr.",
    },
    {
        name: "Healer",
        ranks: 3,
        requirements: { INT: 70, LVL: 1 },
        description:
            "Wenn du HP wieder herstellst erhöhe die Hp die du heilst um 10 für jeden Rank dieses perks. Für jeden Rank steigt die level vorraussetzung um 5",
    },
    {
        name: "Heave Ho!",
        ranks: 1,
        requirements: { STR: 80 },
        description:
            "Wenn du eine wurf waffe nutz kannst du mithilfe dieses perks, Jene waffe weiter werfen.",
    },
    {
        name: "Hunter",
        ranks: 1,
        requirements: { END: 60 },
        description:
            "Wenn du einen angriff auf ein npc machst der weder Saugetier, Eidechse oder Insect ist, erhällt dein angriff den Vicious Effekt.",
    },
    {
        name: "Infiltrator",
        ranks: 1,
        requirements: { PER: 80 },
        description:
            "Wenn du ein schloss knacken willst kanst du einen W20 zu deinen gunsten nutzen.",
    },
    {
        name: "Iron Fist",
        ranks: 2,
        requirements: { STR: 60, LVL: 1 },
        description:
            "Rank 1: Unbewaffnete angriffe fügen einen W6 Mehr schaden zu. Rank 2: Deine Angriffe erhalten ebenfalls den Vicious effekt, Rank 2 kann erst ab level 6 Genutzt werden.",
    },
    {
        name: "Junktown Jerky Vendor",
        ranks: 1,
        requirements: "STR 60, Level 1+",
        description:
            "Die Schwierigkeit eines CHA + Barter Wurfes ist um 1 einfacher.",
    },
    {
        name: "Laser Commander",
        ranks: 2,
        requirements: "PER 80, Level 2+",
        description:
            "Wenn du einen angriff mit einer Fernkampf waffe vom typ Energy, kanst du pro rank 1W6 mehr nutzen. Der Zweite Rank benötigt Level 6.",
    },
    {
        name: "Lead Belly",
        ranks: 2,
        requirements: "END 60, Level 1+",
        description:
            "Rank 1: Beim verspeisen von radioaktivem essen und trinken kanst du einen W6 neu werfen. Rank 2: Du bist Immune gegen radioaktive strahlung durch nahrung. Rank 2 benötigt Level 5.",
    },
    {
        name: "Live Giver",
        ranks: 5,
        requirements: "Level 5+",
        description:
            "Erhöht deine HP Pro rank um 20, mit jedem rank steigt der level anforderungen um 5.",
    },
    {
        name: "Master Thief",
        ranks: 1,
        requirements: "PER 8, AGI 9",
        description:
            "Wenn du diebstahl versuchst, fällt es dem gegner schwerer dich zu bemerken.",
    },
];
</script>

<template>
    <div class="perks">
        <h1>Perks</h1>
        <ul class="perks-list">
            <li v-for="perk in perks" :key="perk.name" class="perk-item">
                <h2>{{ perk.name }}</h2>
                <p><strong>Ranks:</strong> {{ perk.ranks }}</p>
                <template v-if="perk.requirements">
                    <p><strong>Requirements:</strong> {{ perk.requirements }}</p>
                </template>
                <p><strong>Description:</strong> {{ perk.description }}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped>
/* Scoped styles for Perks.vue */
.perks {
    padding: 1rem;
    background-color: #f4f4f4;
    /* Light background for perks section */
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

.perks-list {
    list-style-type: none;
    /* Remove bullets */
    padding: 0;
    /* Remove padding */
    margin: 0;
    /* Remove margin */
}

.perk-item {
    margin-bottom: 1.5rem;
    padding: 1rem;
    border: 1px solid #ddd;
    /* Light border around each perk */
    border-radius: 8px;
    background-color: #fff;
    /* White background for each perk item */
}

.perk-item h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #444;
    /* Slightly darker text for names */
}

.perk-item p {
    margin: 0.5rem 0;
    color: #555;
    /* Slightly darker text for descriptions */
}

.perk-item strong {
    font-weight: bold;
}
</style>
