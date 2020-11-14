const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()


//import all routes
const userRoutes = require('./routes/user')


//app
const app = express();

//database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => console.log('Connected to MongoDB'));

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

