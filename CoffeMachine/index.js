import {coffeeStock as stock, isMachineReady} from "./state.js"
// const {coffeeStock, isCoffeeMachineReady} = require('./state');

// const makeCoffee = (type, miligram) => {
//   if (coffeeStock[type] >= miligram) {
//     console.log("Kopi dibuat");
//   } else {
//     console.log("Biji Habis");
//   }
// };

const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}

console.log(stock);
console.log(isMachineReady);

// console.log(coffeeStock, isMachineReady);
// makeCoffee("robusta", 90);