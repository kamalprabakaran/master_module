const db=require("../models");
const Users=db.users;


//Retrieve all users
exports.findAll=(req,res)=>{
    Users.find().then
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

//Create new user

exports.add=(req,res)=>{
    const user=new Users({
        name:req.body.name,
        sex:req.body.sex,
        email:req.body.email,
        password:req.body.password,
        phone:req.body.phone,
        department:req.body.department,
        college:req.body.college,
        role:req.body.role
    });
    user.save(user)
    .then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message:
            err.message || "Error occurred while creating User"
        })
    })
}

//Fetch user with ID
exports.findOne=(req,res)=>{
    const id=req.params.id;
 Users.find({user_id:id})
 .then(data=>{
     res.send(data);
 }).catch(err=>{
     res.status(500).send({
         message: "Error occurred while retrieving User details with user_id "+id
     });
 })
};

//Update Hall details with ID
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Users.findOneAndUpdate({user_id:id}, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update User with id=${id}. Maybe User was not found!`
          });
        } else res.send({ message: "User was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with id=" + id
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
  
    Users.findOneAndRemove({user_id:id}, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete User detail with id=${id}. Maybe User was not found!`
          });
        } else res.send({ message: "User detail was deleted successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with id=" + id
        });
      });
  };

  //Delete multiple User details

  exports.deletemany = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.body.user_id;
  
    Users.deleteMany({user_id:{$in:id}}, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete User detail with id=${id}. Maybe User was not found!`
          });
        } else res.send({ message: "User detail was deleted successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with id=" + id
        });
      });
  };