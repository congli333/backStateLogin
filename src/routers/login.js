// 登录页 
// 获取数据库数据
import mysql from 'mysql'
import {aesEncrypt, aesDecrypt} from '../modules/utils'
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'userInfo',
  port: 9090,
  insecureAuth: true
});

const data = [
  {
    username: '张三',
    pwd: '123456',
    tel: '13212344321'
  }, {
    username: '李四',
    pwd: '123456',
    tel: '13212344321'
  }
]
// 判断connection链接是否成功 
connection.connect(err => {
  console.log(err)
})

export default function (req, res) {
  const token = req.headers.token
  const {username, pwd} = req.body
  if (token) {
    // 已经存在登录
    console.log(aesDecrypt(token, '1511'))
    res.send({
      code: 0,
      msg: '已存在登录用户，请退出登录'
    })
  } else {
    connection.query('select * from userinfo where username=?', [username], (err, result) => {
      if (err) {
        throw err
      } else {
        if (result.length > 0) {
          res.send({
            code: 1,
            msg: '登陆成功',
            token: aesEncrypt(JSON.stringify(result[0]), '1511')
          })
        } else {
          res.send({
            code: 0,
            msg: '登录失败，用户名不存在，请前往注册'
          })
        }
      }
    })
    // 没有登录
    // 有相同的 用户名密码匹配
    data.map(v => {
      if (username == v.username && pwd == v.pwd) {
        res.send({
          code: 1,
          msg: '登陆成功',
          token: aesEncrypt(JSON.stringify({
            username,
            pwd
          }), '1511')
        })
      }
    })
    res.send({
      code: 0,
      msg: '用户未注册，请前往注册'
    })
  }
}