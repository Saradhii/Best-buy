import mongoose from "mongoose";

const Connection = mongoose.connect(
  "mongodb+srv://saradhi:saradhi8142@cluster0.oatog.mongodb.net/?retryWrites=true&w=majority"
);

module.exports = Connection;
