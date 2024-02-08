const express = require('express')
// const data = require('../Store/data')
const { login, register } = require('../Controller/Api')
const { addData, findAllData, AddToCart, GetAddToCart, DeleteItem, increamentQuantity, decreamentQuantity, CheckOut } = require('../Controller/Crud')
// const {LoginAuth} = require('../Middleware/Auth')
const route = express.Router()


// route.get('/',data)
route.post("/AllData",addData)
route.get('/findData',findAllData)
route.post("/AddToCart",AddToCart)
route.get("/getCartData",GetAddToCart)
route.post("/RemoveItem",DeleteItem)
route.post('/increamentQuantity',increamentQuantity)
route.post('/decreamentQuantity',decreamentQuantity)
route.post("/Checkout",CheckOut)

route.post('/register',register)
route.post('/login',login)


module.exports = route