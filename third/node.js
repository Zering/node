function say(word){
	console.log(word);
};

function excute(someFunction, value) {
	someFunction(value);
};
// 可以函数为变量
excute(say,'Hello,Zering');

// 匿名函数
excute(function(word){
	console.log(word);
},'hello, somebody');