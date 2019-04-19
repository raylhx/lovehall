const router = require('koa-router')();
const user = require('../service/userApi.js')
const bulletin = require('../service/bulletinApi.js')

module.exports = (app) => {
  router.get('/list',bulletin.list)
  router.post('/like',bulletin.like)
  router.post('/comment',bulletin.comment)
  router.post('/read',bulletin.read)
  router.post('/upperWall',bulletin.upperWall)
  router.get('/userCenter',user.center)
  router.post('/checkUser',user.check)
  // 加载路由中间件
  app.use(router.routes()).use(router.allowedMethods())
}