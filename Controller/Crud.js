const Collection = require("../Config/Model")
const data = require('../Store/data')

const addData = async(req,res)=>{
   const dbData = await Collection.create(data)
    res.send(dbData)
    // console.log(dbData)
}

module.exports = {addData}