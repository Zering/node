var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('pipe.js.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('decompresspipe.js'));

console.log("文件解压完毕!");