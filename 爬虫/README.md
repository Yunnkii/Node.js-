## 学习使用 superagent  &&  cheerio 



###    superagent    [API地址](https://visionmedia.github.io/superagent)

方法一览

```
request
	.post('/api/pet')
	.send({name: 'mary',species: 'cat'})
	.set('X-API-Key','foobar')
	.set('Accept','application/json')
	.end(function (req,res){
      if(err||!res.ok){
        alert(" error ");
      } else {
        alert('yay got ' + JSON.stringify(res.body))
      }
	})
```

重点在

```
var superagent = require('superagent');
superagent.get('http://cnodejs.org/')
			.end(functioln (err,sres){
              if(err){
                return next(err);
              } 
              
			})
```



####  基础知识

调用 request 对象上的`get()` `post() ` 方法启动请求，调用`end()`方法发送请求

一个简单的get请求

```
request
	.get('/search')
	.end(function (err,res){
      	if(err||!res.ok){
          
      	}
	})
```

也可以的写法

```
request('get','/search').end(callback);
```

也可以使用绝对地址：

	request
		.get('http://www.baidu.com')
		.end(function (err,res){
	  
		})
设置标题字段：

```
request
	.get('/search')
	.set('API-Key','fobar')
	.set("Accept",'application/json')
	.end(callback);
```

可以传递一个对象：

```
request
	.get('/search')
	.set({'API-Key':'foobar',Accept:'application/json'})
	.end(callback);
```

#### query方法

query方法接受对象，与get方法一起形成一个查询字符串，产生一个路径y()

```
request 
	.get('/search')
	.query({'Key1':'value1','key2':'value2'})
	.end(function (err,res){
      
	})
```

以上将形成这样的路径

```
/search?key1=value1&key2=value2
```

query方法接受字符串

```
request
	.get('/search')
	.query('search=many&age=12')
	.end(function (err,res){
      
	})
```



###    cheerio    [API地址](https://github.com/cheeriojs/cheerio)

重点在`load()` 的方法

```
var cheerio = require('cheerio');
var $ = cheerio.load('<h2 class='title'>there  is a will</h2>');
$('h2.title').text("你好");
$('h2.title').addClass('wel');
$('h2.title').html()
```

alsotang说，将网页的内容传给cheerio.load(html),可以得到一个实现了jquery接口的变量，将其命名为$，

下面可以利用$的一些属性方法

#### 选择器

```
$(selector,[context],[root])
//selector searches within the context scope which searches within the root scope. 
```

中文描述就是selector,在context里面找，context应该在root里面

```
selector and context can be a string expression, DOM Element, array of DOM elements, or cheerio object. root is typically the HTML document string
```

selector和context可以是字符串表达式，DOM元素，DOM元素的数组，cheerio  对象

root通常是典型的html文档字符串。

下面有些例子

```
$('.apple','#fruits').text()
$('ul .pear').attr('class')
$('li[class=orange]').html()
```

#### Attributes

1.`.attr(name,value)` 

仅获取匹配集中地第一个元素的属性值，若设置属性值为 null,则删除该属性

```
$('ul').attr('id')
// fruite获取ul元素的id属性
$('.app').attr('id','favourite').html()
//<li class='app' id='favourite'>Apples</li>
```

2、`.prop(name,value)`

仅获取匹配集中地第一个元素的属性值

```
$('input[type="checked"]').prop('checked');
$('input[type="checked"]').prop('checked',true).val()
//OK
```

3、`.data(name,value)`

获取和设置数据属性，仅匹配第一个

```
$('<div data-apple-color="red"></div>').data()
//{appleColor:'red'}
$('<div data-apple-color="red"></div>').data('apple-color')
//red
var apple = $('.apple').data('kind','mac')
apple.data('kind');
//mac
```

4、`.val([value])`

5、`.removeAttr(name)`

6、`.hasClass(className)`

7、`.addClass(className)`

8、`.removeClass([className])`

