const express = require('express');
const mongoose = require('mongoose');
const RestaurantRouter = require('./routes/RestaurantRoutes.js'); 

const app = express();
app.use(express.json());

//TODO - Replace you Connection String here
mongoose.connect('mongodb+srv://rootadmin:N6Ejfd8aEbiryQjk@cluster0.etztr7w.mongodb.net/F2023_comp3123?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log(`MongoDB connected ${success}`)
}).catch(err => {
  console.log(`Error while MongoDB connection ${err}`)
});

app.use(RestaurantRouter);

app.listen(8081, () => { console.log('Server is running...') });