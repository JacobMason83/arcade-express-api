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
        
        return res.status(200).json({ message: 'User Created'})
    })
    .catch(err => console.log(err))
})
// login router
router.post('/login', (req, res) => {
    const {username, password} = req.body
    const admin = Admin.find(item => item.username === username)
    if(admin) {
        
        if(password === admin.password){
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

