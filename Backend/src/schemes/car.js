const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    pic: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    engineType: {
        type: String,
        required: true
    },
    engineМolume: {
        type: String,
        required: true
    },
    transmission: {
        type: String,
        required: true
    },
    occasion: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    runKM: {
        type: String,
        required: true
    },
    bodyType: {
        type: String,
        required: true
    },
    slotCount: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Car', CarSchema);