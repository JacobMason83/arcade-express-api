const mongoose = require('mongoose')
const Schema = mongooose.Schema
const bcrypt = require('bcrypt')



const admin = new Schema ({
    admin: {
        username: {
            type: String, 
            unique: true,
            required: true
        },
        password: {
            type: String, 
            required: true
        }
    }, 
})

admin.methods.generatePasswordHash = (password) => {
    const saltRounds = 10
    let salt = bcrypt.genSaltSync(saltRounds)
    let hash = bcrypt.hashSync(password, salt)
    return hash
}
admin.methods.validatePassword = (password, hashedPassword) => {
    let res = bcrypt.compareSync(password, hashedPassword)
    return res
}
admin.statics.fillable = [
    'username', "password"

 ]
games.statics.returnable = [
    "_id",
    "username"
    
]

let Admin = mongoose.model('admin', admin)
module.exports = Admin