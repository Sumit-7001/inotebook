const mongoose = require('mongoose');
const { type } = require('@testing-library/user-event/dist/type');
const { Schema } = mongoose;
const UserSchema = new Schema({
  name:{
    type:String,
    require:true
  },
 mail:{
    type:String,
    require:true,
    unique:true,
  },
  password:{
    type:String,
    require:true
  },
  
});
module.exports=mongoose.model('Users',UserSchema )
