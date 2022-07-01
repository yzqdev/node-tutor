//连接mongodb：

import mongoose from "mongoose";

let url = "mongodb://localhost:27017/myproject";

const kittySchema = new mongoose.Schema({
  name: String,
});
const Kitten = mongoose.model("Kitten", kittySchema);
