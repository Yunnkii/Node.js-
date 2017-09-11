var express = require('express');
var utility = require('utility');
/*建立express实例*/
var app = express();
app.get('/',function (req,res){
	/*从req.query取出参数q// 如果是 post 传来的 body 数据，则是在 req.body 里面，不过 express 默认不处理 body 中的信息，需要引入 https://github.com/expressjs/body-parser 这个中间件才会处理*/
	//区分query和body
	var q = req.query.q;
	//调用 utility.md5 方法，得到 md5 之后的值
	//utility 的 github 地址：https://github.com/node-modules/utility
	var md5value = utility.md5(q);
	res.send(md5value);
});
app.listen(3000,function (req,res){
	console.log("app  is sunning at port 3000");
})
