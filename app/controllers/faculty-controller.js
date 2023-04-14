const db=require("../models");
const Faculty=db.faculty;


exports.findAll =(req,res)=>{
    Faculty.find().then
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
    const faculty=new Faculty({
        facultyid:req.body.facultyid,
        name:req.body.name,
        sex:req.body.sex,
        department:req.body.department,
        college:req.body.college,
        email:req.body.email,
        phoneno:req.body.phoneno,
        hmsaccess:req.body.hmsaccess?req.body.hmsaccess:false
       });
       faculty.save(faculty)
    .then(data=>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Faculty details."
          });
    });
};

//Fetch Booking with a Booking ID
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Faculty.find({facultyid:id})
      .then(data => {
        
        if (!data)
          res.status(404).send({ message: "Not found Faculty with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Faculty with id=" + id });
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
  
    Faculty.findOneAndUpdate({facultyid:id}, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Faculty with id=${id}. Maybe Booking was not found!`
          });
        } else res.send({ message: "Faculty was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Faculty with id=" + id
        });
      });
  };

  //Delete Booking details with ID

  exports.deleteone = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Faculty.findOneAndRemove({facultyid:id}, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Faculty detail with id=${id}. Maybe Faculty id was not found!`
          });
        } else res.send({ message: "Faculty detail was deleted successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Faculty with id=" + id
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
  
    const id = req.body.facultyid;
  
    Faculty.deleteMany({facultyid:{$in:id}}, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Faculty detail with id=${id}. Maybe Faculty id was not found!`
          });
        } else res.send({ message: "Faculty detail was deleted successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Faculty with id=" + id
        });
      });
  }; 