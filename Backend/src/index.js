const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const Car = require('./schemes/car');
const Order = require('./schemes/order');
const Admin = require('./schemes/admin');



const uri = 'mongodb+srv://logos-student:logos-password@sandbox.vcyhe.mongodb.net/CarsData?retryWrites=true&w=majority';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const PORT = 8080;


app.post('/add', (req, res) => {
    const newCar = req.body;
    try {
        Car.create(newCar);
        res.statusCode = 200;
        res.send(newCar)
    } catch(err) {
        console.log("Failed to create Car!");
    }
});

app.post('/addAdmin', (req, res) => {
    const newAdmin = req.body;
    try {
        Admin.create(newAdmin);
        res.statusCode = 200;
        res.send(newAdmin)
    } catch(err) {
        console.log("Failed to create Admin!");
    }
});

app.post('/cars', (req, res) => {
    const newOrder = req.body;
    try {
        Order.create(newOrder);
        res.statusCode = 200;
        res.send(newOrder)
    } catch(err) {
        console.log("Failed to create Order!");
    }
});


app.get('/cars', async (req, res) => {
    const CarsList = await Car.find();
    res.send(CarsList);
})

app.get('/ordersListGetAll', async (req, res) => {
    const OrdersList = await Order.find();
    res.send(OrdersList);
})

app.post('/adminLogin', async (req, res) => {
    const admin = req.body;
    const adminUser = await Admin.find(admin);
    const isInBase = adminUser.length != 0;
    res.send(isInBase);
})

app.delete('/delete', async (req, res) => {
    const order = req.body;
    const result = await Order.deleteOne(order)
    res.statusCode = 200;
    res.send('Delete!');
});

app.delete('/deleteCar', async (req, res) => {
    const car = req.body;
    const result = await Car.deleteOne(car)
    res.statusCode = 200;
    res.send('Delete!');
});



app.listen(PORT, async () => {
    try {
        await mongoose.connect(uri);
        console.log('DB connection success!');
    } catch(err) {
        console.log('Connection DB error!');
    }
    console.log(`Listen on port http://localhost:${PORT}`)
});
