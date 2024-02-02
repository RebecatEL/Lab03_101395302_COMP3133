const mongoose = require('mongoose');

// schema
const restaurantSchema = new mongoose.Schema({
    restaurant_id: String,
    name: String,
    cuisine: String,
    city: String,
    address: {
      building:String,
      street: String,
      zipcode: String
    }
  });
  
  
  const Restaurant = mongoose.model('Restaurant', restaurantSchema);
  
  
  module.exports = Restaurant;