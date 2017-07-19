var fs = require('fs');

var readStream = fs.createReadStream('stream.js');

var writeStream = fs.createWriteStream('copyOfStream.txt');

readStream.pipe(writeStream);

console.log("程序执行完毕！");