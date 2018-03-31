import fs from 'fs'

export default function (req, res) {
  const {username, pwd} = req.body
  // fs.readFileSync('../modules/user.json', {encoding: 'utf-8'})
  res.send({
    code: 1,
    msg: '注册页'
  })
}