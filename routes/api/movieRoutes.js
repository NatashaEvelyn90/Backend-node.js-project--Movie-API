//! Everything you will be doing will mainly be in this page.
const express = require('express')
const router = express.Router()
const axios = require('axios')
const PORT = process.env.PORT || 4200

//! Animation MOVIES 
//? http://localhost:4200/animation
router.get('/animation', (req, res)=> {
    const url = 'https://api.sampleapis.com/movies/animation'

    axios.get(url)
        .then(resp => {
            res.render('pages/allMovies', {
                title: 'Animation Movies',
                name: 'Animation Movies',
            })
        })
})


module.exports = router