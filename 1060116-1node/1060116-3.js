var http = require("http");                 /*用http載入*/
var express = require("express");           /**/
var app = express();                        /*宣告express*/
//var server = http.createServer(app);        /*啟用express*/

app.get("/",function(req,res){
    res.send("hello banana");
    res.end();
});

//server.listen(3000);
app.listen(3000);

/*c:\users\asus\desktop\1130\1060116-1node\node 1060116-3.js  →enter如果沒有跳出error訊息→就在網頁上key locallhost:3000  →如enter有跳出 error訊息表示沒有戴入express模組→key 入 npm install express→enter→再key一次node 1060116-3.js →enter →就在網頁上key locallhost:3000*/