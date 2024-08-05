const mongoose = require("mongoose");
mongoose.pluralize(null)
const cust_schema = mongoose.Schema({
    c_id: {type:Number,required:true},
    c_aadhar: {type:Number,required:true},
    c_name: {type:String,required:true},
    c_pan: {type:String,required:true},
    c_dob: {type:String,required:true},
    created_at: {type: Boolean, default:false},
    last_updated: {type: Boolean, default:false},
    is_active:  {type: Boolean, default: false },
    is_verified:  {type: Boolean, default: false },
    is_deleted:  {type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('customer', cust_schema);