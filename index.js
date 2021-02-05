require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const port = process.env.PORT || 4000

const app = express()


app.listen(port, () => {
    console.log(`port is up on ${port}`)
})