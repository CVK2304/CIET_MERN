const mongoose=require("mongoose")
const schema=mongoose.Schema
const passportLocalMongoose=require("Passport-local-mongoose")
var groominfo=new schema({username:{type:String},password:{type:String},DOB:{type:Date},Email:{type:String},age:{type:Number}})
groominfo.plugin(passportLocalMongoose);
module.exports=mongoose.model("groomtable",groominfo)