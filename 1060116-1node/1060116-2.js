var http = require("http");                                     /*設一個變數，http做載入*/
var servce = http.createServer(function(request,response){  /*新增server一個請求與回應*/
    res.writeHead(200, {                    /*設一個head 一般文字plain 或 html*/
       "(Content-Type)":"text/html"        
    });
    res.write("Hello Banana!!!");           /*貼入文字*/
    res.end();                              /*結束*/
});

server.listen(12345);                       /*12345伺服器*/
                                            /*c:\users\asus\desktop\chat\>node app.js→enter如果沒有跳出error訊息→就在網頁上key locallhost:12345*/

/*c:\users\asus\desktop\1130\1060116-1node\node 1060116-2.js  →enter如果沒有跳出error訊息→就在網頁上key locallhost:12345 */