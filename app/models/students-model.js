const { default: mongoose } = require("mongoose");


module.exports = mongoose =>{
    var schema= mongoose.Schema(
        {
            studentid:String,
            name:String,
	        sex:String,
            college:String,
	        department:String,
	        email:String,
	        phoneno:Number,
	        hmsaccess:Boolean
        }
    );
    schema.method("toJson",function(){
        const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
    });

    const student=mongoose.model("student",schema);

    return student;
}