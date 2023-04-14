const { default: mongoose } = require("mongoose");


module.exports = mongoose =>{
    var schema= mongoose.Schema(
        {
            facultyid:String,
            name:String,
	        sex:String,
	        department:String,
	        email:String,
	        phoneno:Number,
            college:String,
	        hmsaccess:Boolean
        }
    );
    schema.method("toJson",function(){
        const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
    });

    const faculty=mongoose.model("faculty",schema);

    return faculty;
}