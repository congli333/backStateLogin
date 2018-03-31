'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (req, res) {
  var token = req.headers.token;
  var _req$body = req.body,
      username = _req$body.username,
      pwd = _req$body.pwd;

  if (token) {
    // 已经存在登录
    console.log((0, _utils.aesDecrypt)(token, '1511'));
    res.send({
      code: 0,
      msg: '已存在登录用户，请退出登录'
    });
  } else {
    connection.query('select * from userinfo where username=?', [username], function (err, result) {
      if (err) {
        throw err;
      } else {
        if (result.length > 0) {
          res.send({
            code: 1,
            msg: '登陆成功',
            token: (0, _utils.aesEncrypt)(JSON.stringify(result[0]), '1511')
          });
        } else {
          res.send({
            code: 0,
            msg: '登录失败，用户名不存在，请前往注册'
          });
        }
      }
    });
    // 没有登录
    // 有相同的 用户名密码匹配
    data.map(function (v) {
      if (username == v.username && pwd == v.pwd) {
        res.send({
          code: 1,
          msg: '登陆成功',
          token: (0, _utils.aesEncrypt)(JSON.stringify({
            username: username,
            pwd: pwd
          }), '1511')
        });
      }
    });
    res.send({
      code: 0,
      msg: '用户未注册，请前往注册'
    });
  }
};

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

var _utils = require('../modules/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 登录页 
// 获取数据库数据
var connection = _mysql2.default.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'userInfo',
  port: 9090,
  insecureAuth: true
});

var data = [{
  username: '张三',
  pwd: '123456',
  tel: '13212344321'
}, {
  username: '李四',
  pwd: '123456',
  tel: '13212344321'
}];
// 判断connection链接是否成功 
connection.connect(function (err) {
  console.log(err);
});
//# sourceMappingURL=login.js.map