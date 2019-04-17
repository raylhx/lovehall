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
  async select(page){
		const limit = 10;
    const skip = page * limit;
		const pr = {
			'createTime': {
				$dateToString: {format: "%Y-%m-%d %H:%M", date: {$add:['$createTime',28800000] } }
			},
			'sign': '$sign',
			'authorid': '$authorid',
			'title': '$title',
      'classify': '$classify',
      'authorid': '$authorid',
      'author': '$author',
    }
    return blog_articles.aggregate([
      {
        $lookup:
        {
          from: "users",
          localField: "authorid",
          foreignField: "uid",
          as: "author"
        }
      },
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
module.exports = {
  Bulletin: new Bulletin(),
}