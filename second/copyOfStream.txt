var fs = require('fs');

var data = '';

// 创建读取流
var readerStream = fs.createReadStream('buffer.js');

readerStream.setEncoding('utf8');

readerStream.on('data',function(chunk) {
	data += chunk;
});

readerStream.on('end',function(){
	console.log(data);
});

readerStream.on('error',function(err){
	console.log(err.stack);
});

console.log("执行完毕！");

var writeData = "https://www.github.com/Zering gay吧地址";

var writeStream = fs.createWriteStream('out.txt');

writeStream.write(writeData,'utf8');

writeStream.end();

writeStream.on('finish',function(){
	console.log("写入完成！");
});

writeStream.on('error',function(err){
	console.log(err.stack);
});

console.log("写入程序 执行完毕！");