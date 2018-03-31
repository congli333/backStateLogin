'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _login = require('../routers/login');

var _login2 = _interopRequireDefault(_login);

var _register = require('../routers/register');

var _register2 = _interopRequireDefault(_register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // 应用级路由


router.post('/login', _login2.default);
router.post('/register', _register2.default);

exports.default = router;
//# sourceMappingURL=router.js.map