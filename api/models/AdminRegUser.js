const mongoose = require("mongoose");

const {Schema,model} = mongoose;
const AdminRegUserSchema = Schema(
    {
        username:{ type : String, required : true, min:4, unique : true},
        password:{ type : String, required : true}
    }   
);

const AdminRegUserModel = model('AdminRegUser', AdminRegUserSchema);

module.exports = AdminRegUserModel;