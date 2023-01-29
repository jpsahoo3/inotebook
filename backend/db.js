const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017";

const connectToMongo = async () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(mongoURI, () =>{
        console.log("Connected to mongo successfully");
    })
}

module.exports = connectToMongo