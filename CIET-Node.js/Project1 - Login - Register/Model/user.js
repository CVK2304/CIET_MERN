const mongoose=require("mongoose")
const schema=mongoose.Schema
const passportLocalMongoose=require("Passport-local-mongoose")
var User=new schema({username:{type:String},password:{type:String}})
User.plugin(passportLocalMongoose);
module.exports=mongoose.model("User",User)