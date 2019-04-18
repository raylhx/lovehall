const mongodb = require('../dbConnect');
const Schema = mongodb.mongoose.Schema;

// 定义模型

const bulletinSchema = new Schema({
  type: Number,
  username: String,
  userid: Number,
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
  collation: 'bulletin',
  timestamps: {createdAt: 'createTime',updatedAt:'updateTime'}
});

const bulletin_Content = mongodb.mongoose.model('bulletin', bulletinSchema)
module.exports = {
  bulletin_Content
}