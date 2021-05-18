// console.log("hello");
// setTimeout(() => {
//     console.log("After...");
// }, 3000)
// console.log("wokee");

// console.log("Selamat datang!");
// setTimeout(() => {
//   console.log("Terima kasih sudah mampir, silakan datang kembali!");
// }, 3000);
// console.log("Ada yang bisa dibantu?");

const orderCoffee = callback => {
    let coffee = null
    console.log("Making Coffee");
    setTimeout(() => {
        coffee = "Coffee ready..."
        callback(coffee)
    }, 3000);
}

orderCoffee(coffee => {
    console.log(coffee);
})