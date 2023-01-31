const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://host:1234@characterwebdb.jkhayyx.mongodb.net/test')
.then(() => console.log('Mongoose Up!'))

// const User = require('./models/users')

app.use(bodyParser.json())

app.post('/api/login', async (req, res) => {
    const {username, password} = req.body
    console.log(email, password)
    const resp = await User.findOne({username, password})
    if(!resp) {
        console.log("incoerrect details")
        // user login in incorrect
    } else {
        console.log("logging in!")
        // make a session and set user to logged in.
    }
    res.send("test")
})

app.get('/', (req, res) => {
    res.send('hello form Express Framework')
})

app.listen(3000, () => {
    console.log("Start Server at Port [3000]")
})