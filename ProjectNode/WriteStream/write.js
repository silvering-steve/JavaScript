const fs = require('fs');

const writeableStream = fs.createWriteStream("output.txt")

writeableStream.write('Ini baris pertama!\n')
writeableStream.write('Ini baris kedua!\n')
writeableStream.write('Ini baris akhir!\n')