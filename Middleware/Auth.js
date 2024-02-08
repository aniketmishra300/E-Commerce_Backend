// const jwt = require('jsonwebtoken')
// const secretkey = "mishra"

// const LoginAuth = (req,res,next)=>{
//     const data = req.headers['authorization']
//     console.log(data,"token")
//     const token = data.split(' ')[1]
//     console.log(token)

//     if(token){
//         jwt.verify(token,secretkey,(err,validate)=>{
//             if(err){
//                 return res.send("error",err)
//             } if(validate){
//                return next()
//             }
//             return res.send("user is not authorized")
//         })
//     }
//     else{
//         return res.send("Email is not registered")
//     }
// }

// module.exports = {LoginAuth}