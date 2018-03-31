'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (req, res) {
  var _req$body = req.body,
      username = _req$body.username,
      pwd = _req$body.pwd;
  // fs.readFileSync('../modules/user.json', {encoding: 'utf-8'})

  res.send({
    code: 1,
    msg: '注册页'
  });
};

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=register.js.map