const express = require('express')
const app = express()
const cors = require('cors')
const route  = require('./Routes/Route')
// const data = require('./Store/data')

app.use(cors({
    origin:'*'
}))

app.use('/pages',route)

app.listen(5050,()=>{
    console.log("server running")
})