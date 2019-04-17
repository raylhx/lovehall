const mongoose = require('mongoose');
mongoose.connect('路径todo',{useNewUrlParser:true},(err) => {
  if(!err){
    console.log('success')
  }
});
exports.mongoose = mongoose;