var fs = require("fs");

// 同步读取文件
//var data = fs.readFileSync('hello.js');
//console.log(data.toString());


// 回调函数
fs.readFile('hello.js',function(err,data){
	if (err) {return console.log(err);}
	console.log(data.toString());
});

console.log('程序执行结束');