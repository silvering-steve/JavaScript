const fs = require("fs");
const { resolve } = require("path");

// const fileReadBack = (error, data) => {
//     if (error) {
//         console.log("No File");
//         return
//     }
//     console.log(data);
// }

// fs.readFile('./FileSystem/test.txt', 'UTF-8', fileReadBack)

const data = fs.readFileSync(resolve(__dirname, "test.txt"), "utf-8");
const loc = resolve(__dirname, "test.txt");
console.log(data);
