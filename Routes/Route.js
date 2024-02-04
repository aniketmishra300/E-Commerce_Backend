const express = require('express')
const data = require('../Store/data')
const { login, register } = require('../Controller/Api')
const { addData } = require('../Controller/Crud')
const route = express.Router()


// route.get('/',data)

route.post('/register',register)
route.post('/login',login)
route.post("/AllData",addData)

module.exports = route