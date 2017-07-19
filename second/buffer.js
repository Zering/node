buf = new Buffer(256);
// 写入
len = buf.write("it's a buffer");

console.log("写入字节数：" + len);

buf2 = new Buffer(26);

for (var i = 0; i < 25; i++) {
	buf2[i] = i + 97;
}
// 打印
console.log(buf2.toString('ascii'));
console.log(buf2.toString('ascii',0,5));
console.log(buf2.toString('utf8',0,5));
console.log(buf2.toString(undefined,0,5));
// 转json
var buf3 = new Buffer('https://github.com/Zering');
var json = buf3.toJSON(buf3);
console.log(json);

// 拼接
var buf4 = new Buffer('study node');
var buf5 = Buffer.concat([buf3,buf4]);

console.log("buf5 : " + buf5.toString());
// 比较
var buf6 = new Buffer('stud');

var result = buf4.compare(buf6);
if (result > 0 ) {
	console.log('buf4 : ' + buf4 + "  在 buf6 : " + buf6 + " 之前");
} else if (result < 0) {
	console.log('buf4 : ' + buf4 + "  在 buf6 : " + buf6 + " 之后");
} else {
	console.log('buf4 : ' + buf4 + "  和 buf6 : " + buf6 + " 相同");
}
//拷贝
var buf7 = new Buffer(10);
buf3.copy(buf7);
console.log(buf7.toString());

//剪切
var buf8 = buf3.slice(0,3);
console.log("buf8 : " + buf8.toString() + "  长度：" + buf8.length);

