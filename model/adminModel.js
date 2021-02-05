const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')



const admin = new Schema ({
    admin: {
        username: {
            type: String, 
            unique: true,
            isRequired: true
        },
        password: {
            type: String, 
            isRequired: true
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
admin.statics.returnable = [
    "_id",
    "username"
    
]


module.exports = mongoose.model('admin', admin)