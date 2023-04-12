const db=require("../models");
const Booking=db.bookings;


exports.findAll =(req,res)=>{
    Booking.find().then
    (data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Internal server error"
        });
    });
};


exports.add=(req,res)=>{
    const bookings=new Booking({
       Bookingid:req.body.Bookingid,
       blockname:req.body.blockname,
       starttime:req.body.starttime,
       endtime:req.body.endtime,
       created:Date(),
       createdby:req.body.createdby,
       lastmodified:Date(),
       status:req.body.status
       });
       bookings.save(bookings)
    .then(data=>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          });
    });
};

//Fetch Booking with a Booking ID
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Booking.find({booking_id:id})
      .then(data => {
        
        if (!data)
          res.status(404).send({ message: "Not found Booking with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Booking with id=" + id });
      });
  };
  

//Update Booking details with ID
  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Booking.findOneAndUpdate({booking_id:id}, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Booking with id=${id}. Maybe Booking was not found!`
          });
        } else res.send({ message: "Booking was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Booking with id=" + id
        });
      });
  };

  //Delete Booking details with ID

  exports.delete = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Booking.findOneAndRemove({booking_id:id}, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Booking detail with id=${id}. Maybe Booking was not found!`
          });
        } else res.send({ message: "Booking detail was deleted successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Booking with id=" + id
        });
      });
  };

 //Delete multiple Booking details

 exports.deletemany = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.body.booking_id;
  
    Booking.deleteMany({booking_id:{$in:id}}, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Booking detail with id=${id}. Maybe Booking was not found!`
          });
        } else res.send({ message: "Booking detail was deleted successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Booking with id=" + id
        });
      });
  }; 