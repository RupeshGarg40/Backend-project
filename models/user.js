const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://rupeshgarg10325:1234@cluster0.shjxg25.mongodb.net/mongopractice"
);

const userSchema = mongoose.Schema({
  image: String,
  email: String,
  name: String,
});
module.exports = mongoose.model("user", userSchema);
