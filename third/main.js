var hello = require('./hello');
var Hello = require('./hello2');

hello.world();

var hello2 = new Hello();
hello2.setName('Zering');
hello2.sayHello();