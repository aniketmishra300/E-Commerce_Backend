const Mongoose = require('mongoose')

const url = "mongodb+srv://aniketmishra:Aniket78@cluster0.ual3bwi.mongodb.net/Products?retryWrites=true&w=majority"
const connection = async (req,res)=>{
   await Mongoose.connect(url)
   console.log("connected to db")
}

module.exports = {connection}