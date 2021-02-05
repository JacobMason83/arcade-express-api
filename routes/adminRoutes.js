const express = require('express')
const router = express.Router()
let Admin = require('../model/adminModel')

// register admin 
router.post('/register', (req, res) => {
    const admin = new Admin({
        username: req.body.username, 
        password: req.body.password
    })
    admin 
    .save()
    .then(admin => {
        const { _id, username } = admin
        return res.status(200).json({ _id, username})
    })
    .catch(err => console.log(err))
})
// login router
router.post('/login', (req, res) => {
    const user = req.body.username
    const admin = Admin.find(username => user.username === username)
    if(admin) {
        const { username, password} = admin
        if(password === user.password){
            res.status(200).json({ loggedIn: true, message: "logged-in", username})
        } else {
            res.status(401).json({ 
                message: " password incorrect"
            })
        }
    } else {
        res.status(401).json({ message: 'Username is incorrect'})
    }
})
module.exports = router

