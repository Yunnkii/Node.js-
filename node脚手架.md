总结一下各个技术的功能准备写一个爬虫

1.express

2、superagent||superTest （为什么要重复说一遍superTest）

3、module.exports 与 exports 的区别

https://cnodejs.org/topic/52308842101e574521c16e06

https://cnodejs.org/topic/5231a630101e574521e45ef8

4、nodemon

5、benchmark : 不同的写法分析性能，运行速度

关键代码：

```
var Benchmark = require('benchmark');

var suite = Benchmark.Suite;
//add tests
suite
	.add('RegExp#test',function () {
      /o/.test('helo');
	})
	.add('String#indexOf',function () {
      'helo'.indexOf('o') > -1;
	})
//add listener
.on('cycle',function (event) {
  console.log(String(event.target));
})
.on('complete',function () {
  console.log("Fastest is"+this.filter('faster').map('name'));
})
.run({'async': true});

```





