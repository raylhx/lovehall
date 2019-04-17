/**
 * 数据库操作
 */
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const { user } = require('../models/user')

class User {
  /**
   * 创建
   * @param {object} data 
   */
  async createUser(data){
    return user.create(data);
  }
  /**
   * 查询
   */
  async selectUser(userid){
		const udata = await user.findOne({userid: userid});
		if (udata) {
			return udata;
    }
    return false;
  }
  /**
   * 更新
   */
  async updateUser(data){
    return user.updateOne({userid: data.userid},data)
  }
}
module.exports = {
  User: new User(),
}