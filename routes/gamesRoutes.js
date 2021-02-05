const express = require('express')
const router = express.Router()
const Games = require('../model/gamesModel')

router.get('/all-games', (req, res) => {
    Games.find((err, games) => {
        if(err) {
            res.status(404).json({ message: `${err}`})
        } else {
            res.status(200).json([
                ...games.map(game => {
                    const {_id, gamename, description,url, image } = game
                    return {_id, gamename, description, url, image}
                })
            ])
        }
    })
})

router.post('/games', (req, res)=> {
   const game = new Games({
       gamename: req.body.gamename,
       description: req.body.description,
       url: req.body.url,
       image: req.body.image
   }
   )
   game
    .save()
    .then(game => {
        const {_id, gamename, description,url, image} = game
        
        res.status(200).json({ _id, gamename, description,url, image})
    })
    .catch(err => console.log(err))
})

router.patch('/games/:id', (req, res) => {
    Games.findById(req.params.id, {}, {}, (err, games) => {
        if(err) {
            res.status(404).json({ message: "Sorry, try again", errors: `${err}`})
        } else {
            games.gamename = req.body.gamename,
            games.description = req.body.description
            games.url = req.body.url
            games.image = req.body.image
            
            games
            .save()
            .then(game => {
                res.status(200).json({message: "updated, good job you did it", game})
            })
            .catch(err => {
                res.status(400).json({ message: "Cant update it dude", errors: `${err}`})
            })
        }
    })
})

router.delete('/delete/:id', (req, res) => {
    Games.findByIdAndRemove(req.params.id, (err, games) => {
        if(err){
        res.status(404).json({ message: "could not delete", errors: `${err}`})
    } else {
        res.status(200).json({message: `${games} was deleted, i hope you made some money on it`})
    }
    })
})
module.exports = router;