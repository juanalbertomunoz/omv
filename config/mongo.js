const mongoose = require("mongoose")
require('dotenv').config()

//mongodb + srv://administrador:<password>@atlascluster.hoayom7.mongodb.net/?retryWrites=true&w=majority
const uri = "mongodb+srv://" + process.env.USER + ":" + process.env.PASSWORD + "@atlascluster.hoayom7.mongodb.net/?retryWrites=true&w=majority";

const dbConnect = async () => {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('DB connected'))
    .catch((err) => console.log(err));
}

module.exports = dbConnect