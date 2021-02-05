require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const gameRoutes = require('./routes/gamesRoutes')
const adminRoutes = require('./routes/adminRoutes')

const port = process.env.PORT || 4000

const app = express()
mongoose.connect(
    process.env.MONGODB_URI,    
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false},
    err => {
    if(err) {
        console.error("Mongo Connection Error", err)
    } else {
        console.log('Database Connected')
    }
})
app.use(cors())
app.use(express.json())
app.use('/', gameRoutes )
app.use('/', adminRoutes )


app.listen(port, () => {
    console.log(`port is up on ${port}`)
})