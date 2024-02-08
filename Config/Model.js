const mongoose = require('mongoose');

const mobileSchema = new mongoose.Schema({
    id: String,
    quantity:Number,
    category: String,
    brand: String,
    url: String,
    detailUrl: String,
    title: {
        shortTitle: String,
        longTitle: String
    },
    offers: {
        one: String,
        two: String,
        three: String,
        four: String,
        Delivery: String
    },
    price: {
        mrp: Number,
        cost: Number,
        discount: String
    },
    quantity: Number,
    rating: Number,
    description: String,
    discount: String
});


const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password: String
})


const Collection = mongoose.model('items', mobileSchema);

const cart = mongoose.model('Add_to_Cart', mobileSchema)

const userDetails = mongoose.model("UserDetails",userSchema)

module.exports = {Collection,cart,userDetails};