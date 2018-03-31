'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _router = require('./config/router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
// bodyparse配置
// 编译req.body
// express 服务
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
// 请求头
app.use('*', function (req, res, next) {
  res.setHeader('Content-Type', 'application/x-www-form-urlencoded');
  res.setHeader('token', '');
  next();
});

app.use('/', _router2.default);
/* app.get('/', (req, res) => {
  console.log(req.body)
  res.send({
    code: 1
  })
}) */

app.listen(9090, function () {
  console.log('port is 9090 ......');
});
//# sourceMappingURL=app.js.map