// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const racingBikes = [
    {
        brand: "Lobito",
        model: "RV10",
        weight: 8.9,
    },
    {
        brand: "Van Rysel",
        model: "RCR PRO",
        weight: 6.75,
    },
    {
        brand: "Cannondale",
        model: "Synapse",
        weight: 8,
    }
]

let min = racingBikes[0];
for (let i = 1; i < racingBikes.length; i++) {
    if (racingBikes[i].weight < min.weight) {
        min = racingBikes[i]
    }
}

console.log(min)
