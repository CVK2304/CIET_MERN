const mongoose=require("mongoose")
const schema=mongoose.Schema
const passportLocalMongoose=require("Passport-local-mongoose")
var User=new schema({cname:{type:String},password:{type:String},idnumber:{type:Number},dob:{type:Date},address:{type:String}})
User.plugin(passportLocalMongoose);
module.exports=mongoose.model("User",User)