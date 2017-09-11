## supertest----http服务器测试库

一个http服务器测试模块，让http断言变得简单

- 可以直接引入express项目的app.js文件进行测试
- 通过一个网址创建爱你测试用例

没有用测试框架的代码例子：

```
var request = require('supertest');
var express = require('express');
var app = express();
app.get('/',function (req,res) {
  res.status(200).json({name: 'dfs'});
});
request(app)
	.get('/')
	//.expect(field,value[,fn])断言http头中的字段名与字段值（字符串、正则表达式）
	.expect('Content-Type',/json/)
	.expect('Content-Length','15')
	// .expect(status[,fn]) 断言一个http响应状态码||执行请求并调用回调函数
	.expect(200)
	//.end(fn) 断言一个http响应状态码
	.end(function (err,res) {
      if (err) throw err;
	})
```

在mocha框架中的例子：

```
describe('get /user',function () {
  it("respond with json ",fucntion () {
    request(app)
    	.get('/')
    	.set('Accept',"application/json")
    	.expect('Content-Type','/json')
    	.expect(200,done)
  })
})
```

在end()中抛出错误，或者使用done()回调

```
describe('GET /users', function(){
  it('respond with json', function(done){
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done();
      });
  });
});
```

http 中应用cookie保持会话状态：

```
var request = require('supertest')
   , should = require('should')
   , express = require('express');
 
 
describe('request.agent(app)', function(){
  var app = express();
  app.use(express.cookieParser());
 
  app.get('/', function(req, res){
    res.cookie('cookie', 'hey');
    res.send();
  });
 
  app.get('/return', function(req, res){
    if (req.cookies.cookie) res.send(req.cookies.cookie);
    else res.send(':(')
  });
 
  var agent = request.agent(app);
 
  it('should save cookies', function(done){
    agent
    .get('/')
    .expect('set-cookie', 'cookie=hey; Path=/', done);
  })
 
  it('should send cookies', function(done){
    agent
    .get('/return')
    .expect('hey', done);
  })
})
```