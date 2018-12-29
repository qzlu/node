var express = require('express');
var router = express.Router();
var server = require('http').createServer(express());
var io = require('socket.io')(server);


io.on('connection', function(socket){
    console.log('a user connected');
    socket.on("disconnect", function() {
        console.log("a user go out");
    });
    io.emit("message1", {msg:"连接成功"});
    // setTimeout(function(){
    //     io.emit("message", {msg:"连接成功"});
    // },3000);
    socket.on("message", function(obj) {
        //延迟3s返回信息给客户端
        setTimeout(function(){
            console.log('the websokcet message is'+obj);
            var arr=['one','two','three','forth','five','six','seven','eight','night']
            console.log(obj.msg);
            var index=Number(obj.msg)-1;
            if(arr[index]){
                io.emit("message", {msg:arr[index]});
            }else{
                io.emit("message", {msg:"你好！"});
            }
        },0);
    });
});
server.listen(3001);
module.exports = router;