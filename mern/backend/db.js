const mongoose = require('mongoose');

const mongoUrl = "mongodb+srv://goFood:sakshipandya123@cluster0.kpl0ljj.mongodb.net/goFood?retryWrites=true&w=majority&appName=Cluster0";

const mongodb = async () => {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    //fetching data
  const fetcheddata = await mongoose.connection.db.collection("food_items").find({}).toArray();
console.log(fetcheddata);
  } catch (err) {
    console.error("Connection error:", err);
  }
};
module.exports=mongodb;