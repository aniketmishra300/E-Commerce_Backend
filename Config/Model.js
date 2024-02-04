const mongoose = require('mongoose');

const mobileSchema = new mongoose.Schema({
    id: String,
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

const Collection = mongoose.model('items', mobileSchema);
const CartCollection = mongoose.model('Cart', mobileSchema);

module.exports = Collection;