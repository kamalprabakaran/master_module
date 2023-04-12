const { default: mongoose } = require("mongoose");


module.exports = mongoose =>{
    var schema= mongoose.Schema(
        {
            hall_id:Number,
            name:String,
            collegename:String,
            blockname:String,
            booked:Boolean,
            capacity:Number

        }
    );
    schema.method("toJson",function(){
        const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
    });

    const hall=mongoose.model("hall",schema);

    return hall;
}