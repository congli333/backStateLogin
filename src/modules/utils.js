// crypto 加密解密
import crypto from 'crypto'
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
function aesEncrypt (plaintext, secret) {
  const cipher = crypto.createCipher('aes192', secret);
  let crypted = cipher.update(plaintext, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted
}

function aesDecrypt (cipherText, secret) {
  const decipher = crypto.createDecipher('aes192', secret);
  let decrypted = decipher.update(cipherText, 'hex', 'utf8');
  decrypted += decipher.final('utf-8');
  return decrypted
}

export {
  aesEncrypt,
  aesDecrypt
}