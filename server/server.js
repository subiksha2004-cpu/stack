const express = require('express')
const app = express()
const dbConn = require('./config/db')
const Projects= require('./routes/projectRoute')

// const Projects = require('./models/projectModel')

require('dotenv').config() 
// const dotenv = require('dotenv')
// dotenv.config()

const port = process.env.PORT || 7778
app.use('/projects',Projects)
app.use(express.json())
app.get('/',(req,res) => {
    res.json("Welcome").status(400)
})

app.listen(port,() =>{
    console.log('Server running in : ${port}')
})