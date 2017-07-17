var EventEmitter = require('events').EventEmitter;

var event = new EventEmitter();

event.on('some_event', function(arg1,arg2){
	console.log("第一个事件触发啦！");
	console.log('listener1',arg1,arg2);
});

event.on('some_event', function(arg1,arg2){
	console.log("可同时触发多个事件， 第二个事件触发啦！");
	console.log('listener2',arg1,arg2);
});

event.on('some_event', function(arg1){
	console.log("参数数量少于给定数，也能被触发");
	console.log('listener3',arg1);
});

event.on('some_event', function(arg1,arg2,arg3){
	console.log("参数数量多余给定数，也能被触发,只是最后一个参数为undefined");
	console.log('listener4',arg1,arg2,arg3);
});

// 设置1s后触发事件
setTimeout(function(){
	event.emit('some_event','arg1 参数','arg2 参数');
},10000);

var listener1 = function(){
	console.log("listener1 执行")
}

var listener2 = function(){
	console.log("listener2 执行")
}

event.addListener("connection",listener1);

event.on('connection',listener2);

event.emit('connection');

event.removeListener('connection',listener1);
console.log("移除listener1");

var listeners = require('events').EventEmitter.listenerCount(event,'connection');
console.log(listeners + " 个监听器 正在监听");


event.removeListener('connection',listener2);
console.log("移除listener2");

listeners = require('events').EventEmitter.listenerCount(event,'connection');
console.log(listeners + " 个监听器 正在监听");