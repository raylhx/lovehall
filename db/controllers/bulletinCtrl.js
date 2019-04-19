/**
 * 数据库操作
 */
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const { bulletin_Content } = require('../models/bulletin')

class Bulletin {
  /**
   * 创建，新增文档
   * @param {object} data 数据对象
   * @return {object} 返回
   */
  async create(data){
    return bulletin_Content.create(data)
  }
  /**
   * 查询list
   * @param {number} page 页数 
   * @return {array} 返回一个数组列表
   */
  async select(openid = '',page = 0){
		const limit = 100;
    const skip = page * limit;
    const pr = {
      'createTime': {
        $dateToString: {format: "%Y-%m-%d %H:%M", date: {$add:['$createTime',28800000] } }
      },
      'type': '$type',
      'username': '$username',
      'openid': '$openid',
      'avatar': '$avatar',
      'image': '$image',
      'content': '$content',
      'obj': '$obj',
      'readCount': '$readCount',
      'likeCount': '$likeCount',
      'comment': '$comment',
    }    
    if (openid) {
      return blog_articles.aggregate([
        {
          $match: {'openid': openid},
          $project: pr,
        }
      ])
      .sort({'_id':-1})
      .skip(skip)
      .limit(limit)
      .exec();
    } else {
      return blog_articles.aggregate([
        {
          $project: pr,
        }
      ])
      .sort({'_id':-1})
      .skip(skip)
      .limit(limit)
      .exec();
    }
  }
  /**
   * 更新点赞数量
   */
  async updateLikeCount(id, data) {
    if (id){
      return bulletin_Content.updateOne(
        { _id: id },
        { $addToSet: { likeCount: data}},
      );
    }
    return false
  }
  /**
   * 更新评论
   */
  async updateComment(id,data){
    if (id){
      return bulletin_Content.updateOne(
        { _id: id },
        { $push: { comment: data}},
      );
    }
    return false
  }
  /**
   * 更新阅读数量
   */
  async updateReadCount(data){
    return bulletin_Content.updateOne({ _id: data.id }, { $inc: { readCount: 1 } });
  }
}
module.exports = {
  Bulletin: new Bulletin(),
}