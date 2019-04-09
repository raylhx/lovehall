const router = require('koa-router')();
const user = require('../service/userApi.js')
const bulletin = require('../service/bulletinApi.js')

module.exports = (app) => {
  router.get('/demo',bulletin.demo)
  // 加载路由中间件
  app.user(router.routes()).use(router.allowedMethods())
}