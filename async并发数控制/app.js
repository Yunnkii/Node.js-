var async = require('async');

var concurrencyCount = 0;
var fetchUrl = function (url,callback){
	var delay = parseInt((Math.random()*1000000)%2000,10);
	concurrencyCount++;
	setTimeout(function (){
		concurrencyCount--;
		callback(null,url+'html ');

	},delay);
};
// var urls = [];
// for(var i = 0;i < 30;i++){
// 	urls.push('http://datasource_'+i);
// }
asyn	console.log("现在的并发数："+concurrencyCount,',正在抓取的是'+"http://www.cnblogs.com/"+url+"耗时"+delay);
c.mapLimit("http://www.cnblogs.com/",5,function (url,callback){
	fetchUrl(url,callback);
},function (err,res){
	console.log('final');
	console.log(res);
});