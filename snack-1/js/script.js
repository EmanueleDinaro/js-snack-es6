// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const racingBikes = [
    {
        brandBike: "Lobito",
        modelBike: "RV10",
        weightBike: 8.9,
    },
    {
        brandBike: "Van Rysel",
        modelBike: "RCR PRO",
        weightBike: 6.75,
    },
    {
        brandBike: "Cannondale",
        modelBike: "Synapse",
        weightBike: 8,
    }
]

const weightBikes = []

for(i = 0; i < racingBikes.length; i++) {
    weightSingleBike = racingBikes[i].weightBike;
    weightBikes.push(weightSingleBike);
}
console.log(weightBikes)
