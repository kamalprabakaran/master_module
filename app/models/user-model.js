const { default: mongoose } = require("mongoose");

module.exports = mongoose =>{
    var schema=mongoose.Schema({
        user_id:Number,
        name:String,
        sex:String,
        email:String,
        password:String,
        phone:Number,
        department:String,
        college:String,
        role:String
    });
    schema.method("toJson", function(){
        const{__v,_id, ...object}= this.toObject();
        object.id=_id;
        return object;
    });
    const users=mongoose.model("users",schema);
    return users;
}