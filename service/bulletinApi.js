module.exports = {
  demo: async(ctx,next) =>{
    ctx.response.body='demo'
  },
  list: async(ctx,next) =>{
    const userid = ctx.query.id
    ctx.response.body = userid
  },
  like: async(ctx,next) =>{
    ctx.response.body='like'
  },
  comment:async(ctx,next) =>{
    ctx.response.body='like'
  }
}