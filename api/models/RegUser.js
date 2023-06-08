const mongoose = require("mongoose");

const {Schema,model} = mongoose;
const RegUserSchema = Schema(
    {
        username:{ type : String, required : true, min:4, unique : true},
        password:{ type : String, required : true}
    }   
);

const RegUserModel = model('RegUser', RegUserSchema);

module.exports = RegUserModel;