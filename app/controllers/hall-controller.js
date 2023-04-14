const db= require("../models");
const Hall=db.hall;

//Fetch all hall list
exports.findAll = (req,res)=>{
   
    Hall.find().then
    (data=>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Internal server error"
        
        });
    });
};

// Create new hall

exports.add = (req,res) => {

    const hall=new Hall({
       
        name:req.body.name,
        collegename:req.body.collegename,
        blockname:req.body.blockname,
        capacity:req.body.capacity,
        booked: req.body.booked ? req.body.booked : false
    });

    hall.save(hall)
    .then(data=>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Hall."
          });
    });
};

//Fetch Hall with a Hall ID
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Hall.find({hall_id:id})
      .then(data => {
        
        if (!data)
          res.status(404).send({ message: "Not found Hall with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Hall with id=" + id });
      });
  };
  

//Update Hall details with ID
  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Hall.findOneAndUpdate({hall_id:id}, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Hall with id=${id}. Maybe Hall was not found!`
          });
        } else res.send({ message: "Hall was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Hall with id=" + id
        });
      });
  };

  //Delete Hall details with ID

  exports.deleteone = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Hall.findOneAndRemove({hall_id:id}, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Hall detail with id=${id}. Maybe Hall was not found!`
          });
        } else res.send({ message: "Hall detail was deleted successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Hall with id=" + id
        });
      });
  };

  //Delete multiple Hall details

  exports.deletemany = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.body.hall_id;
  
    Hall.deleteMany({hall_id:{$in:id}}, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Hall detail with id=${id}. Maybe Hall was not found!`
          });
        } else res.send({ message: "Hall detail was deleted successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Hall with id=" + id
        });
      });
  };

  // Fetch all booked hall list
  exports.booked = (req, res) => {
    const key=req.params.key;
    const value=req.params.value;
    console.log(key);
    console.log(value);
    Hall.find({$key: value})
    
      .then(data => {
       
        if (!data)
          res.status(404).send({ message: "Not found Hall with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Hall with id=" + id });
      });
  };
  