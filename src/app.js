// express 服务
import express from 'express'
import bodyParser from 'body-parser' // 编译req.body
import router from './config/router'
const app = express()
// bodyparse配置
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
// 请求头
app.use('*', (req, res, next) => {
  res.setHeader('Content-Type', 'application/x-www-form-urlencoded')
  res.setHeader('token', '')
  next()
})

app.use('/', router)
/* app.get('/', (req, res) => {
  console.log(req.body)
  res.send({
    code: 1
  })
}) */

app.listen(9090, () => {
  console.log('port is 9090 ......')
})