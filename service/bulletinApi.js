module.exports = {
  demo: async(ctx,next) =>{
    ctx.response.body='demo'
  },
  list: async(ctx,next) =>{
    ctx.response.body='list'
  },
  like: async(ctx,next) =>{
    ctx.response.body='like'
  },
  comment:async(ctx,next) =>{
    ctx.response.body='like'
  }
}