const express = require('express')
const data = require('../Store/data')
const route = express.Router()

route.get('/',data)

route.get('/home',(req,res)=>{
    res.send("home page")
})


module.exports = route