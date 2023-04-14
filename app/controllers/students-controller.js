const db=require("../models");
const Students=db.students;


exports.findAll =(req,res)=>{
    Students.find().then
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
    const student=new Students({
        studentid:req.body.studentid,
        name:req.body.name,
        sex:req.body.sex,
        department:req.body.department,
        college:req.body.college,
        email:req.body.email,
        phoneno:req.body.phoneno,
        hmsaccess:req.body.hmsaccess?req.body.hmsaccess:false
       });
       student.save(student)
    .then(data=>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Students details."
          });
    });
};

//Fetch Booking with a Booking ID
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Students.find({studentid:id})
      .then(data => {
        
        if (!data)
          res.status(404).send({ message: "Not found Students with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Students with id=" + id });
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
  
    Students.findOneAndUpdate({studentid:id}, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Students with id=${id}. Maybe Booking was not found!`
          });
        } else res.send({ message: "Students was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Students with id=" + id
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
  
    Students.findOneAndRemove({studentid:id}, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Students detail with id=${id}. Maybe Students id was not found!`
          });
        } else res.send({ message: "Students detail was deleted successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Students with id=" + id
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
  
    const id = req.body.studentid;
  
    Students.deleteMany({studentid:{$in:id}}, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Students detail with id=${id}. Maybe Students id was not found!`
          });
        } else res.send({ message: "Students detail was deleted successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Students with id=" + id
        });
      });
  }; 