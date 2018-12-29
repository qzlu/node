var express = require('express');
var router = express.Router();
var formidable = require('formidable'); //载入formidable
router.get("/",function(req,res){
    res.render('index');
})
router.post("/",function(req,res){
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = './public/images';
    form.keepExtensions = true;
    form.parse(req,function(err,field,files){
      console.log(files.userfile);
      res.send({
        'msg':'upload file',
        "path":files.userfile
      });
    });
});
module.exports = router;