var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
// var int1 = function (str) {
// 	return +str;
// };
// var int2 = function (str) {
// 	return parseInt(str,10);
// };
// var int3 = function (str) {
// 	return Number(str);
// };

// var number = '100' ;

// suite 
// 	.add('+',function () {
// 		int1(number);
// 	})
// 	.add('parseInt',function () {
// 		int2(number);
// 	})
// 	.add('Number',function () {
// 		int3(number);
// 	})

// 	.on('cycle',function (event) {
// 		console.log("这个输出什么"+String(event.target));
// 	})
// 	.on('complete',function (){
// 		console.log('fastest is'+this.filter('fastest').map('name'));
// 	})

// 	.run({'async': true});
suite
	.add('RegExp#test', function() {
	  /o/.test('Hello World!');
	})
	.add('String#indexOf', function() {
	  'Hello World!'.indexOf('o') > -1;
	})
	// add listeners 循环测试
	.on('cycle', function(event) {
	  console.log(String(event.target));
	})
	.on('complete', function() {
	  console.log('Fastest is ' + this.filter('fastest').map('name'));
	})
	// run async
	.run({ 'async': true });