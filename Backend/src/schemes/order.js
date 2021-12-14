const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Order', OrderSchema);