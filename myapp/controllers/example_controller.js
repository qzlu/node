// 引入刚才定义的表
const Example_col = require('./../models/example');

// get 请求返回所有数据
const getExample = async (req,res, next) => {

  const examples = await Example_col.find({}, { _id: 0 });

  res.status(200);
  var body = {
    msg: 'get request!!',
    data: {
      examples,
    }
  }
  res.send(body)
}

// post 带一个 msg 参数，并插入数据库
const postExample = async (req,res, next) => {
  if (!req.body.msg || typeof req.body.msg != 'string') {
    res.status('105').send({'msg':"参数错误"})
    return;
  }
  const result = await Example_col.create({msg: req.body.msg});

    var obj = {
        msg: 'post request!!',
        desc: 'insert success!',
        data: result
    }
    res.send(obj);
}
// 暴露出这两个方法，在路由中使用
module.exports = {
  getExample,
  postExample
}