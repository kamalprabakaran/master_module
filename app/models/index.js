const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);
db.hall=require("./hall-model.js")(mongoose);
db.bookings=require("./booking-model.js")(mongoose);
db.users=require("./user-model.js")(mongoose);
db.counters=require("./")
module.exports = db;

