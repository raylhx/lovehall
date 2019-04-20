const config = require('./config');
const http = require('http');
const { User } =require('../db/controllers/userCtrl');
module.exports = {
  check: async (ctx,next) => {
    ctx.set('Access-Control-Allow-Origin', ctx.request.header.origin);
    ctx.set('Access-Control-Allow-Credentials','true');
    const code = ctx.request.body
    let options = {
      method: 'POST',
      url: 'https://api.weixin.qq.com/sns/jscode2session?',
      formData: {
          appid: config.APPID,
          secret: config.AppSecret,
          js_code: code,
          grant_type: 'authorization_code'
      }
    };
    http.request(options, (error, res, body) => {
      if (error) {
        res.toJSON({
          'status':'error',
          'code': -1,
          'msg': '错误返回',
        })
      } else {
        let _data = JSON.parse(body);
        let res = {}
        if (_data){
          const user = User.selectUser(_data.openid);
          if (user) {
            res = {
              code: 0,
              data: {
                openid: _data.openid,
              },
              msg: 'suc'
            }
          } else {
            res = {
              code: -1,
              data: null,
              msg: 'error'
            }
          }
        }
        ctx.body = res;
      }
    });
  },
}