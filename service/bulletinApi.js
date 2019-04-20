const querystring = require('querystring');
const config = require('./config');
const { Bulletin } =require('../db/controllers/bulletinCtrl');
module.exports = {
  /**
   * 上墙发布
   */
  upperWall: async(ctx,next) =>{
    ctx.set('Access-Control-Allow-Origin', ctx.request.header.origin);
    ctx.set('Access-Control-Allow-Credentials','true');
    const data = ctx.request.body;
    const result = await Bulletin.create(data);
    let res = {}
    if (result){
      res = {
        code: 0,
        data: {},
        msg: 'suc',
      }
    } else {
      res = {
        code: -1,
        data: {},
        msg: 'errors',
      }
    }
    ctx.response.bodyy = res;
  },
  /**
   * 获取list
   */
  list: async(ctx,next) =>{
    const openid = ctx.query.id
    const page = ctx.query.id
    const result = await Bulletin.select(openid,page)
    let res = {}
    if (result) {
      res = {
        code: 0,
        data: {
          len: result.length || 0,
          list: result
        },
        msg: 'suc'
      }
    } else {
      res = {
        code: 0,
        data: {},
        msg: 'error'
      }
    }
    ctx.response.body = res
  },
  /**
   * 更新喜欢数
   */
  like: async(ctx,next) =>{
    ctx.set('Access-Control-Allow-Origin', ctx.request.header.origin);
    ctx.set('Access-Control-Allow-Credentials','true');
    const params = ctx.request.body
    const data = {
      avatar: params.avatar || '',
    }
    let res = {}
    if (params.id) {
      const result = await Bulletin.updateLikeCount(id,data)
      if (result) {
        res = {
          code: 0,
          data: {},
          msg: 'suc'
        }
      } else {
        res = {
          code:-1,
          data: {},
          msg: '更新失败',
        }
      }
    } else {
      res = {
        code:-1,
        data: {},
        msg: '参数有误',
      }
    }
    ctx.response.body = res
  },
  /**
   * 更新评论
   */
  comment:async(ctx,next) =>{
    ctx.set('Access-Control-Allow-Origin', ctx.request.header.origin);
    ctx.set('Access-Control-Allow-Credentials','true');
    const params = ctx.request.body
    const data = {
      avatar: params.avatar || '',
      usrename: params.username || '',
      content: params.content || '',
    }
    let res = {}
    if (params.id) {
      const result = await Bulletin.updateComment(id,data)
      if (result) {
        res = {
          code: 0,
          data: {},
          msg: 'suc'
        }
      } else {
        res = {
          code:-1,
          data: {},
          msg: '更新失败',
        }
      }
    } else {
      res = {
        code:-1,
        data: {},
        msg: '参数有误',
      }
    }
    ctx.response.body = res
  },
  /**
   * 阅读数量
   */
  read: async (ctx, next) =>{
    ctx.set('Access-Control-Allow-Origin', ctx.request.header.origin);
    ctx.set('Access-Control-Allow-Credentials','true');
    const params = ctx.request.body
    const id = params.id || 0
    let res = {}
    if (params.id) {
      const result = await Bulletin.updateReadCount(id)
      if (result) {
        res = {
          code: 0,
          data: {},
          msg: 'suc'
        }
      } else {
        res = {
          code:-1,
          data: {},
          msg: '更新失败',
        }
      }
    } else {
      res = {
        code:-1,
        data: {},
        msg: '参数有误',
      }
    }
    ctx.response.body = res
  },
}