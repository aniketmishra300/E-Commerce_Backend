const express = require('express')
const app = express()
const cors = require('cors')
const route  = require('./Routes/Route')
const  {connection}  = require('./Config/db')
// const data = require('./Store/data')

app.use(cors({
    origin:'*'
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/pages',route)

app.listen(5050,()=>{
    connection()
    console.log("server running at 5050")
})