// // try {
// //     console.log("hello there");
// //     errorCode;
// // } catch (error) {
// //     console.log("something wrong here");
// //     console.log(error.name);
// //     console.log(error.message);
// //     console.log(error.stack);
// // } finally {
// //     console.log("Hehehe");
// // }

// let json = '{ "name": "Yoda", "age": 20 }';
// let json2 = "{bad json lol}";
// let json3 = '{"age": 20}';
// let json4 = '{"age": 30}';

// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "ValidationError";
//   }
// }

// try {
//   let user = JSON.parse(json4);

//   if (!user.name) {
//     throw new ValidationError("Need Name");
//   }

//   // errorCoded;

//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   // console.log(error.name)
//   // console.log(error.message);
//   if (error instanceof ValidationError) {
//     console.log(`Invalid Data : ${error.message}`);
//   } else if (error instanceof ReferenceError) {
//     console.log(error.message);
//   } else {
//     console.log(error.stack);
//   }
// }

let myString = "";

try {
    myString += "a";
    throw Error("awwaw");
} catch(e) {
    myString += "b";
} finally {
    myString += "c";
    throw Error("asdsad");
    myString += "d";
}

console.log(myString);