var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('pipe.js')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('pipe.js.gz'));

console.log("文件压缩完毕!");