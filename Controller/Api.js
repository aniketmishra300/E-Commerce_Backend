const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const saltRound = 10;
const arr = []
const secretkey = "mishra"

const register = async (req, res) => {
    const data = req.body
    // console.log(data)
    const account = arr.find(item => item.email === data.email)

    if (account) {
        res.send({msg:"email is already exist"})
    } else {
        const hashed = await bcrypt.hashSync(data.password, saltRound)
        data.password = hashed

        arr.push(data)
        console.log(data);

        const token = jwt.sign({ user: data.email }, secretkey) // jwt generation
        res.send({ msg: "User registered successfully", token: token })
    }
}


const login = async (req, res) => {
    const loginData = req.body;
    console.log(loginData);
    const account = arr.find(item => item.email === loginData.email)
    // console.log(account)
    if (!account) {
        res.send("User is not Registered")
    } else {
        const login = await bcrypt.compareSync(loginData.password, account.password)
        console.log(login);
        if (login) {
            const token = jwt.sign({ user: loginData.email }, secretkey)
            res.send({ msg: "User logged in successfully", token: token })
        } else {
            res.send("Password is incorrect!")
        }
    }
}




module.exports = { register, login }