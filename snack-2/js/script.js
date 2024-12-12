// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const teams = [
    { 
        name: "Juventus", 
        points: 0,
        fouls: 0,
    },
    { 
        name: "Manchester City", 
        points: 0,
        fouls: 0,
    },
    { 
        name: "Borussia Dortmund", 
        points: 0,
        fouls: 0,
    },
    { 
        name: "Athletico Madrid", 
        points: 0,
        fouls: 0,
    }
]
console.log(teams);

//per dopo: usare per i punti: Math.floor(Math.random() * 90),
//per i falli Math.floor(Math.random() * 20)
