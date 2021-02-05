const mongoose = require('mongoose')
const Schema = mongoose.Schema


const games = new Schema({
    gamename: {
        type: String,
        isRequired: true 
        
    },
    description: {
        type: String,

    },
    url: {
        type: String,
        isRequired:true
        
    },
    image: {
        type: String,         
    },

    timestamps: {
        createdAt: {
            type: Date,
            default: Date.now() 
        },
        updatedAt: {
            type: Date,
            default: Date.now()
        }
    }
})


// let Games = mongoose.model('games', games)
module.exports = mongoose.model('games', games)
