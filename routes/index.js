const router = require('koa-router')();
const user = require('../service/userApi.js')
const bulletin = require('../service/bulletinApi.js')

module.exports = (app) => {
  router.get('/demo',bulletin.demo)
  router.get('/list',bulletin.list)
  router.get('/like',bulletin.like)
  router.get('/comment',bulletin.comment)
  // 加载路由中间件
  app.use(router.routes()).use(router.allowedMethods())
}