const mongoose = require('mongoose')
const Schema = mongoose.Schema


const games = new Schema({
    gameName: {
        type: String, 
        required: true
    },
    description: {
        type: String,

    },
    url: {
        type: String,
        required: true
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


let Games = mongoose.model('games', games)
module.exports = Games
