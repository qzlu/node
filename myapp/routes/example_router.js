var express = require('express');
var router = express.Router();
const example_controller = require('../controllers/example_controller');
// 为控制器的方法定义请求路径和请求方式
router.get('/example/get', example_controller.getExample);
router.post('/example/post', example_controller.postExample);

module.exports = router;
