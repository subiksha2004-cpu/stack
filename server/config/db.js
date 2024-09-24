const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOURL || "mongodb+srv://admin:Subi$2004@in-aws.ye9dt.mongodb.net/?retryWrites=true&w=majority&appName=IN-AWS")

const connection = mongoose.connection;
connection.on('connected',() => {
    console.log("DB Connected")
})

connection.on('error', ()=> console.log("DB Error"))

module.exports = mongoose