const mongodb = require('../dbConnect');
const Schema = mongodb.mongoose.Schema;

// 定义模型

const userSchema = new Schema({
  name: String,
  nick: String,
  avatar: String,
  openid: Number,
},{
  collation: 'user',
});

const user = mongodb.mongoose.model('user', userSchema)
module.exports = {
  user
}