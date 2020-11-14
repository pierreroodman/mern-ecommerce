const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')


//import all routes
const userRoutes = require('./routes/user')


//app
const app = express();

//database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => console.log('Connected to MongoDB'));


//various imported middleware put into use
app.use(morgan('dev')); //for logging which routes have been used
app.use(bodyParser.json()); //for parsing through json sent in body of http request
app.use(cookieParser());

//routes middleware
app.use("/api", userRoutes);

//routes
app.get('/', (req, res) => {
    res.send("Hello user");

});

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

