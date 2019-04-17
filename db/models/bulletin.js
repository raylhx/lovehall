const mongodb = require('../dbConnect');
const Schema = mongodb.mongoose.Schema;

// 定义模型

const bulletinSchema = new Schema({
  type: Number,
  username: String,
  avatar: String,
  image: String,
  content: String,
  obj: String,
  readCount: Number,
  likeCount: Array,
  comment: [
    {
      name:String,
      content:String,
       avatar:String,
    }
  ]
},{
  collation: 'bulletin_demo',
  timestamps: {createdAt: 'createTime',updatedAt:'updateTime'}
});

const bulletin_Content = mongodb.mongoose.model('bulletin_demo', bulletinSchema)
module.exports = {
  bulletin_Content
}