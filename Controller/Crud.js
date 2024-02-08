const {Collection,cart} = require("../Config/Model")
const data = require('../Store/data')

const addData = async(req,res)=>{
   const dbData = await Collection.create(data)
    res.send(dbData)
    // console.log(dbData)
}


const findAllData = async(req,res)=>{
    const data = await Collection.find({})
    res.send(data)
    // console.log(data)
}


const AddToCart = async (req, res) => {
    const data = req.body;
    const duplicate = await cart.findOne({ id: data.id }); // Use findOne instead of find
    console.log(duplicate);

    if (duplicate) {
        duplicate.quantity += 1; // Update the quantity of the found document
        // console.log("duplicate", duplicate.quantity);
        await duplicate.save(); // Save the changes
    } else {
        const cartData = await cart.create(data);
        res.send(cartData);
    }
};

const increamentQuantity = async (req, res) => {
    const data = req.body;
    try {
        const cartItem = await cart.findOne({ id: data.id });
        if (cartItem) {
            cartItem.quantity += 1;
            await cartItem.save(); // Save the updated quantity to the database
            res.send(cartItem); // Send the updated cart item back as response
        } else {
            res.status(404).send({ message: "Cart item not found" });
        }
    } catch (error) {
        console.error("Error incrementing quantity:", error);
        res.status(500).send({ message: "Internal server error" });
    }
};

const decreamentQuantity =async (req, res) => {
    const data = req.body;
    try {
        const cartItem = await cart.findOne({ id: data.id });
        if (cartItem) {
            cartItem.quantity -= 1;
            await cartItem.save(); // Save the updated quantity to the database
            res.send(cartItem); // Send the updated cart item back as response
        } else {
            res.status(404).send({ message: "Cart item not found" });
        }
    } catch (error) {
        console.error("Error incrementing quantity:", error);
        res.status(500).send({ message: "Internal server error" });
    }
};

const GetAddToCart = async(req,res)=>{
    const ShowCart = await cart.find({})
    res.send(ShowCart)
    // console.log(ShowCart)
}

const DeleteItem =  async(req,res)=>{
    const RemoveItem = req.body
    const deleteItem = await cart.findOneAndDelete({id:RemoveItem.id})
    // console.log(deleteItem)
    res.send(deleteItem)
}

const CheckOut =  async(req,res)=>{
    // const RemoveItem = req.body
    const empty = await cart.deleteMany({})
    // console.log(deleteItem)
    res.send(empty)
}


module.exports = {addData,findAllData,AddToCart,GetAddToCart,DeleteItem,increamentQuantity,decreamentQuantity,CheckOut}