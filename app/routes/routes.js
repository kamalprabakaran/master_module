const { bookings } = require("../models/index.js");

module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");
  const halls=require("../controllers/hall-controller.js")
  const bookings=require("../controllers/booking-controller");
  const users=require("../controllers/user-controller");

  var router = require("express").Router();


//User routers
  router.get("/users/list",users.findAll);

  router.get("/users/list/:id",users.findOne);

  router.post("/users/create",users.add);

  router.put("/users/update/:id", users.update);

  router.delete("/users/delete/:id",users.deleteone);

  router.delete("/users/deletemany",users.deletemany);



//Booking routers  
  router.get("/bookings/list",bookings.findAll);

  router.get("/bookings/list/:id",bookings.findOne);

  router.post("/bookings/create",bookings.add);

 router.put("/bookings/update/:id", bookings.update);

 router.delete("/bookings/delete/:id",bookings.delete);

 router.delete("/bookings/deletemany",bookings.deletemany);



//Hall routers
  router.get("/halls/list",halls.findAll);
  
  router.get("/halls/list/:id",halls.findOne);

  router.post("/halls/create",halls.add);

  router.put("/halls/update/:id", halls.update);

  router.delete("/halls/delete/:id",halls.deleteone);

  router.delete("/halls/deletemany",halls.deletemany);

  router.get("/halls/filter/booked/", halls.booked);



  // Create a new Tutorial
  router.post("/tutorials/", tutorials.create);

  // Retrieve all Tutorials
  router.get("/tutorials/", tutorials.findAll);

  // Retrieve all published Tutorials
  router.get("/tutorials/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/tutorials/:id", tutorials.findOne);

  // Update a Tutorial with id
  router.put("/tutorials/:id", tutorials.update);

  // Delete a Tutorial with id
  router.delete("/tutorials/:id", tutorials.delete);

  // Create a new Tutorial
  router.delete("/tutorials/", tutorials.deleteAll);

  app.use("/api", router);
};
