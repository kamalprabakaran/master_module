const { default: mongoose } = require("mongoose");

module.exports = mongoose => {
    var schema= mongoose.Schema(
        {
            booking_id:Number,
            hallid:String,
            blockname:String,
            starttime:Date,
            endtime:Date,
            created:Date,
            createdby:String,
            lastmodified:Date,
            status:String
    });

    schema.method("toJson", function(){
        const{__v,_id, ...object}= this.toObject();
        object.id=_id;
        return object;
    });

    const bookings=mongoose.model("bookings",schema);
    return bookings;
}