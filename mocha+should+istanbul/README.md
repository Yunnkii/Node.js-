## 学习mocha，should，istanbul

### 知识点

1、使用测试框架mocha:  http://mochajs.org/

2、使用断言库should:  [https://github.com/tj/should.js](https://github.com/tj/should.js)

3、使用测试率覆盖工具 istanbul : [https://github.com/gotwarlost/istanbul](https://github.com/gotwarlost/istanbul)

4、简单 Makefile 的编写 : [http://blog.csdn.net/haoel/article/details/2886](http://blog.csdn.net/haoel/article/details/2886)



`process.argv[0]`

> nodejs的绝对路径（应用程序的绝对路径）
>
> D:\nodejs\node.exe



`process.argv[1]`

> 执行的.js文件的绝对路径
>
> D:\wamp\www\nodejs-way\mocha+should+istanbul\main.js



### 整个的安装过程

#### 安装全局的mocha

```
$npm install mocha -g
```

-g是全局安装，不加-g的话，就是在该项目目录下安装

#### 直接执行

```
$ mocha
```

#### 安装 istanbul

```
$ npm i istanbul -g
```

还是全局安装

#### 执行

```
$ istanbul cover _mocha
```

出错

#### 解决方法

```
$  cnpm install istanbul --save
$  cnpm install mocha --save
$  mocha
```

```
test/main.test.js
    √ should equal 0 when n === 0
    √ should equal 1 when n === 1
    √ should equal 55 when n === 10
    √ should throw when n > 10
    √ should throw when n < 0
    √ should throw when n isnt Number


  6 passing (23ms)
```

```
$ istanbul cover node_modules/mocha/bin/_mocha -- -R spec
```

```
  test/main.test.js
    √ should equal 0 when n === 0
    √ should equal 1 when n === 1
    √ should equal 55 when n === 10
    √ should throw when n > 10
    √ should throw when n < 0
    √ should throw when n isnt Number


  6 passing (21ms)

=============================================================================
Writing coverage object [D:\wamp\www\nodejs-way\mocha+should+istanbul\coverage\coverage.json]
Writing coverage reports at [D:\wamp\www\nodejs-way\mocha+should+istanbul\coverage]
=============================================================================

=============================== Coverage summary ===============================
Statements   : 100% ( 13/13 )
Branches     : 100% ( 10/10 )
Functions    : 100% ( 1/1 )
Lines        : 100% ( 13/13 )
================================================================================
```

后面的是`node_modules/mocha/bin/_mocha -- -R spec` 是安装在该目录下的_mocha的相对路径

安装在全局会怎样？

