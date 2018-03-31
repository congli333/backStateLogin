'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aesDecrypt = exports.aesEncrypt = undefined;

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 加密（明文， 秘钥')
/* function aesEncrypt(data, key) {
  const cipher = crypto.createCipher('aes192', key);
  var crypted = cipher.update(data, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
}
// 解密(密文，秘钥)
function aesDecrypt(encrypted, key) {
  const decipher = crypto.createDecipher('aes192', key);
  var decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
} */
// 加密
function aesEncrypt(plaintext, secret) {
  var cipher = _crypto2.default.createCipher('aes192', secret);
  var crypted = cipher.update(plaintext, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
} // crypto 加密解密


function aesDecrypt(cipherText, secret) {
  var decipher = _crypto2.default.createDecipher('aes192', secret);
  var decrypted = decipher.update(cipherText, 'hex', 'utf8');
  decrypted += decipher.final('utf-8');
  return decrypted;
}

exports.aesEncrypt = aesEncrypt;
exports.aesDecrypt = aesDecrypt;
//# sourceMappingURL=utils.js.map