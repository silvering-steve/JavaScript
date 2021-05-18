const executorFunction = (resolve, reject) => {
    const isCoffeeReady = true;
    if (isCoffeeReady) {
        resolve ("Succesfully made a coffee")
    } else { 
        reject ("Coffee machine is busy")
    }
}

const makeCoffee = () => {
    return new Promise(executorFunction)
}

const coffeePromise = makeCoffee()
console.log(coffeePromise);