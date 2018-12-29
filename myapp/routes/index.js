var express = require('express');
var router = express.Router();
// 该路由使用的中间件
/* app.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  }); */
/* GET home page. */
router.get('/', function(req, res, next) {
//   res.render('/public/upload.html', { title: 'Express1111' });
});
router.get('/a', function(req, res, next) {
    res.send({name:"张三",age:15555});
  });
router.post('/b',function(req,res,next){
    // if(req.body.action==1){
    //     res.send({a:1})
    // }else if(req.body.action==2){
    //     res.send({b:arr,code:200,msg:"success"}) 
    // }else{
    //    res.status(500).send({a:"error"})
    // }
})
module.exports = router;


