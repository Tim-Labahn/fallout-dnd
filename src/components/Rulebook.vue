<template>
    <div class="rulebook-container">
        <h1>Fallout Pen-and-Paper RPG Regelwerk</h1>

        <section>
            <h2>Charakter Erstellung</h2>

            <h3>Attribute (S.P.E.C.I.A.L)</h3>
            <p><strong>Jeder Charakter hat sechs Attribute, die durch das S.P.E.C.I.A.L-System dargestellt
                    werden:</strong></p>
            <ul>
                <li><strong>Strength (ST)</strong></li>
                <li><strong>Perception (PE)</strong></li>
                <li><strong>Endurance (EN)</strong></li>
                <li><strong>Charisma (CH)</strong></li>
                <li><strong>Intelligence (IN)</strong></li>
                <li><strong>Agility (AG)</strong></li>
            </ul>
            <p><strong>Zu Beginn des Spiels hat jeder Spieler 250 Punkte, die er auf die sechs Attribute verteilen
                    kann.</strong> Kein Attribut darf dabei höher als 100 oder niedriger als 10 sein.</p>

            <h3>Fertigkeiten (Skills)</h3>
            <p><strong>Es gibt verschiedene Fertigkeiten, die durch die Attribute beeinflusst werden. Jeder Charakter
                    wählt drei "Skill"-Fertigkeiten, die einen Bonus von +10 erhalten.</strong></p>

            <h3>Werte</h3>
            <ul>
                <li><strong>LP (Lebenspunkte) = 80 + (Ko/2) + [(level-1) * (Ko/10)]</strong></li>
                <li><strong>AP (Aktionspunkte) = 65 + (Be/2)</strong></li>
            </ul>
        </section>

        <section>
            <h2>Spielablauf</h2>
            <h3>Würfelsystem</h3>
            <p><strong>Das Spiel verwendet ein W100-System, auch bekannt als Prozentsystem.</strong> Das Ergebnis wird
                dann mit dem Fertigkeitswert des Charakters verglichen.</p>

            <h3>Erfolgs- und Misserfolgsmechanik</h3>
            <ul>
                <li><strong>Erfolg:</strong> Ein Wurf ist erfolgreich, wenn das Ergebnis des W100-Wurfs gleich oder
                    kleiner als der Fertigkeitswert des Charakters ist.</li>
                <li><strong>Misserfolg:</strong> Ein Wurf ist nicht erfolgreich, wenn das Ergebnis des W100-Wurfs größer
                    als der Fertigkeitswert des Charakters ist.</li>
            </ul>

            <h3>Kritische Erfolge und Misserfolge</h3>
            <ul>
                <li><strong>Kritischer Erfolg:</strong> Ein Wurf, der unter 5% des Fertigkeitswertes liegt, gilt als
                    kritischer Erfolg.</li>
                <li><strong>Kritischer Misserfolg:</strong> Ein Wurf von 96-100 gilt als kritischer Misserfolg.</li>
            </ul>

            <h3>Knappe Erfolge und Misserfolge</h3>
            <ul>
                <li><strong>Knapper Erfolg:</strong> Ein Wurf, der innerhalb von 5% unterhalb des Fertigkeitswertes
                    liegt.</li>
                <li><strong>Knapper Misserfolg:</strong> Ein Wurf, der innerhalb von 5% oberhalb des Fertigkeitswertes
                    liegt.</li>
            </ul>

            <h3>Aktionen und Würfe</h3>
            <p><strong>Hier sind einige Beispiele:</strong></p>
            <h4>Schlösser knacken (Lockpick)</h4>
            <p>Wurf: Der Spieler würfelt W100 und vergleicht das Ergebnis mit seinem Lockpick-Wert.</p>
            <h4>Schleichen (Sneak)</h4>
            <p>Wurf: Der Spieler würfelt W100 und vergleicht das Ergebnis mit seinem Sneak-Wert.</p>
        </section>

        <section>
            <h2>Kampfablauf</h2>
            <h3>Initiative</h3>
            <p><strong>Zu Beginn des Kampfes würfeln alle Beteiligten 1W10 + Agility-Wert.</strong> Der höchste Wert
                handelt zuerst, gefolgt von den anderen in absteigender Reihenfolge.</p>

            <h3>Angriff und Schaden</h3>
            <ul>
                <li><strong>Angriff:</strong> Ein Angriff erfolgt durch einen Wurf auf die entsprechende
                    Waffenfertigkeit.</li>
                <li><strong>Schaden:</strong> Der Schaden wird durch die Waffe bestimmt, z.B. eine 10mm-Pistole
                    verursacht 1W10 Schaden.</li>
            </ul>
        </section>

        <section>
            <h2>Ausrüstung und Währung</h2>
            <h3>Caps</h3>
            <p><strong>Die Währung im Spiel sind Bottle Caps.</strong> Spieler können Caps finden oder verdienen und
                damit Ausrüstung, Munition, Medikamente, etc. kaufen.</p>

            <h3>Ausrüstung</h3>
            <ul>
                <li><strong>Grundausrüstung:</strong> Schlagstock (W6*2), Stimpack (+30LP), Vault-Suit (RP+5, CH+1)</li>
            </ul>
        </section>

        <section>
            <h2>Erfahrungspunkte und Levelaufstieg</h2>
            <h3>Erfahrungspunktevergabe</h3>
            <ul>
                <li><strong>Quests:</strong>
                    <ul>
                        <li>Kleine Quests: 50-100 XP</li>
                        <li>Mittlere Quests: 150-300 XP</li>
                        <li>Große Quests: 400-600 XP</li>
                        <li>Epische Quests: 700-1000 XP</li>
                    </ul>
                </li>
                <li><strong>Kampf:</strong>
                    <ul>
                        <li>Schwache Gegner: 10-20 XP pro Gegner</li>
                        <li>Durchschnittliche Gegner: 30-50 XP pro Gegner</li>
                        <li>Starke Gegner: 60-100 XP pro Gegner</li>
                        <li>Boss-Gegner: 150-300 XP pro Gegner</li>
                    </ul>
                </li>
                <li><strong>Besondere Leistungen:</strong>
                    <ul>
                        <li>Erfolgreiches Knacken eines schwierigen Schlosses: 20-50 XP</li>
                        <li>Überwältigende soziale Interaktion: 30-70 XP</li>
                    </ul>
                </li>
            </ul>

            <h3>Levelaufstieg</h3>
            <p><strong>Der Levelaufstieg erfolgt, wenn ein Charakter eine bestimmte Anzahl von Erfahrungspunkten
                    erreicht.</strong> Das folgende System kann verwendet werden:</p>
            <ul>
                <li>Level 1: Start mit 0 XP</li>
                <li>Level 2: Erreichen bei 500 XP</li>
                <li>Level 3: Erreichen bei 1200 XP</li>
                <li>Level 4: Erreichen bei 2100 XP</li>
                <li>Level 5: Erreichen bei 3200 XP</li>
                <li>Level 6: Erreichen bei 4500 XP</li>
                <li>Level 7: Erreichen bei 6000 XP</li>
                <li>Level 8: Erreichen bei 7700 XP</li>
                <li>Level 9: Erreichen bei 9600 XP</li>
                <li>Level 10: Erreichen bei 11700 XP</li>
            </ul>
            <p>Bei jedem Levelaufstieg erhält der Charakter:</p>
            <ul>
                <li>+10 Punkte zum Verteilen auf Fertigkeiten (Skills).</li>
                <li>1 neuen Perk alle 5 Level (d.h., auf Level 5, 10, 15).</li>
            </ul>
        </section>

        <section>
            <h2>Rassen</h2>
            <h3>Mensch</h3>
            <ul>
                <li><strong>Max Stats:</strong> Alle Werte zwischen 10 und 100.</li>
                <li><strong>Perks:</strong> Kann alle Perks haben.</li>
                <li><strong>Besondere Eigenschaften:</strong> Keine besonderen Eigenschaften oder Schwächen, aber große
                    Vielseitigkeit.</li>
            </ul>

            <h3>Ghoul</h3>
            <ul>
                <li><strong>Max Stats:</strong> Stärke 150, Charisma 50, Andere Werte 100</li>
                <li><strong>Heilung:</strong> Heilt automatisch nach einem Kampf bei einem erfolgreichen Wurf auf
                    Konstitution.</li>
                <li><strong>Rage:</strong> Verfällt in Rage, wenn die Lebenspunkte unter 20% fallen.</li>
                <li><strong>Kannibalismus:</strong> Kann menschliche Leichen essen, um LP wiederherzustellen.</li>
            </ul>

            <h3>Supermutant</h3>
            <ul>
                <li><strong>Max Stats:</strong> Stärke 200, Intelligenz 60, Andere Werte 100</li>
                <li><strong>Besondere Eigenschaften:</strong> Hohe Resistenz gegen Strahlung und chemische Angriffe.
                </li>
                <li><strong>Schwächen:</strong> Erhöhte Verwundbarkeit gegenüber hochenergetischen Waffen.</li>
            </ul>
        </section>

        <section>
            <h2>Perks</h2>
            <ul>
                <li><strong>Sniper:</strong> Bonus von +15 auf Schusswaffen.</li>
                <li><strong>Heiler:</strong> Steigert die Heilung von Stimpack um 20%.</li>
                <li><strong>Führer:</strong> Erhöht das Charisma um 10 Punkte und bietet den Vorteil von Begleitern.
                </li>
                <li><strong>Schlosser:</strong> Bessere Fähigkeiten beim Knacken von Schlössern, +20 Fertigkeitsbonus.
                </li>
                <li><strong>Sprengstoffexperte:</strong> Reduziert die Fehlerrate beim Umgang mit Sprengstoffen um 10%.
                </li>
            </ul>
        </section>

        <section>
            <h2>Sonstiges</h2>
            <h3>Erstellung eines Vault-Dwellers</h3>
            <p><strong>Vault-Dweller sind Charaktere, die aus einem Vault herauskommen und sich in der Ödlandwelt
                    zurechtfinden müssen.</strong> Sie beginnen mit zusätzlichen Punkten in den Attributen Stärke und
                Endurance.</p>

            <h3>Fallout-Universum</h3>
            <p><strong>Das Fallout-Universum ist post-apokalyptisch und umfasst eine Vielzahl von Fraktionen, Feinden
                    und Schauplätzen.</strong> Die Welt ist reich an Geschichte und Kultur, die während des Spiels
                erkundet werden kann.</p>
        </section>
    </div>
</template>

<style>
.rulebook-container {
    font-family: 'Verdana', sans-serif;
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    color: #2c3e50;
    font-size: 2.5em;
    margin-bottom: 20px;
}

section {
    margin-bottom: 30px;
}

h2 {
    background-color: #3498db;
    color: white;
    padding: 10px;
    border-radius: 5px;
    font-size: 1.8em;
}

h3 {
    color: #34495e;
    margin-top: 10px;
    font-size: 1.3em;
}

ul {
    list-style-type: disc;
    margin-left: 20px;
}

ul ul {
    list-style-type: circle;
}

p {
    line-height: 1.6;
    margin-bottom: 15px;
}
</style>