// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// 1. creare un array di oggetti di squadre di calcio avendo come chiavi: nome, punti fatti, e falli subiti.
const footballTeams = [
    {
        teamName: 'Juventus',
        point: 0,
        fouls: 0
    },
    {
        teamName: 'Milan',
        point: 0,
        fouls: 0
    },
    {
        teamName: 'Inter',
        point: 0,
        fouls: 0
    },
    {
        teamName: 'Roma',
        point: 0,
        fouls: 0
    },
]
console.log(footballTeams)

// 2. tramite la function getRndInteger, assegnare a points.value e fouls.value un numero casuale.
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// footballTeams[0].point = getRndInteger(0, 102);
for (let i = 0; i < footballTeams.length; i++) {
    const team = footballTeams[i]
    team.point = getRndInteger(0, 102)
    team.fouls = getRndInteger(0, 50)
}

console.log(footballTeams)

// 3. creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const newFootballTeam = [];
for (let i = 0; i < footballTeams.length; i++) {
    const team = footballTeams[i];
    const obj = {
        teamName: team.teamName,
        fouls: team.fouls
    }
    newFootballTeam.push(obj)
}
console.log(newFootballTeam)