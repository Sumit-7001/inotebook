const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  title:{
    type:String,
    require:true
  },
 description:{
    type:String,
    require:true,

  },
  date:{
    type:Date,
    default:Date.now
  },
});
module.exports=mongoose.model('user',UserSchema )

