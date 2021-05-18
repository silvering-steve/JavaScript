const fs = require("fs");
const { resolve } = require("path");

//To make read stream
const readableStream = fs.createReadStream(resolve(__dirname, "input.txt"), {
  highWaterMark: 15,
});

//to make write stream
const writeableStream = fs.createWriteStream("output.txt");

//if stream readable the try to write the stream with readableStream.read()
readableStream.on("readable", () => {
  try {
    writeableStream.write(`${readableStream.read()}\n`);
  } catch (error) {}
});

//
readableStream.on("end", () => {
  writeableStream.end();
});
