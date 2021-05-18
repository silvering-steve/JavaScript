const stock = {
    coffeeBeans: 250,
    water: 1000
}

const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeeBeans >= 16 && stock.water >= 250) {
            resolve("Enough Stock")
        } else {
            reject("Not Enough Stock")
        }
    })
}

const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}

const handleFailed = rejectionValue => {
    console.log(rejectionValue);
}

checkStock.then(handleSuccess,handleFailed)