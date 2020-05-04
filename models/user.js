const mongoose = require("mongoose");
const Schema = mongoose.Schema;



var userSchema = new Schema({
    name: {
        type: String,
        require: true,
    },

    username: {
        type: String,
        
        require: true,
    },

    age: {
        type : Number,
        min: 18
    },

    email : {
        type: String,
        
        require : true,
        match : /@/
    },
    password: {
        type : String,
        minlength: 8
    }
},{timestamps : true});

const User = mongoose.model("User",userSchema);
module.exports = User;