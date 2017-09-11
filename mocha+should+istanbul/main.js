
// var fibonacci = function (n){
// 	if(n === 0) {
// 		return 0;
// 	}
// 	if(n === 1) {
// 		return 1;
// 	}
// 	return fibonacci(n-1)+fibonacci(n-2);
// };
// //main.js 里面的 fibonacci 暴露出来
// exports.fibonacci = fibonacci;
// if(require.main === module){
// 	//如果直接执行main.js则进入此处
// 	//如果main.js被其他文件require 则此处不会执行
// 	var n = Number(process.argv[2]);
// 	console.log('fibonacci('+n+') is',fibonacci(n));
// }
var fibonacci = function (n) {
  if (typeof n !== 'number') {
    throw new Error('n should be a Number');
  }
  if (n < 0) {
    throw new Error('n should >= 0');
  }
  if (n > 10) {
    throw new Error('n should <= 10');
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  return fibonacci(n-1) + fibonacci(n-2);
};
exports.fibonacci = fibonacci;
