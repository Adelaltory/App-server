const { Schema, models, model } = require("mongoose");


const userSchema = new Schema({
    username: { 
    type: String,
    required: true,
    maxlength: 10,
    minlength:2,
    split: " "

},
email:{
    type: String,
    required: true,
    unique: true,
},
phone : {
    type: String,
    required: true,
    unique:true,
}, 
password:{
    type: String,
    required: true,
    minlength:6,
    maxlength:12,
},
orderhistory:{
    type: Array,
    required:false,
    default: [],
}

})

const User_MODEL = model("User", userSchema);
module.exports = User_MODEL