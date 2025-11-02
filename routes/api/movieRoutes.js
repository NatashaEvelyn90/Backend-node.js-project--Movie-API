//! Everything you will be doing will mainly be in this page.
const express = require('express')
const router = express.Router()
const axios = require('axios')
const { paginationResults} = require('../../helpers/pagination')
const PORT = process.env.PORT || 4200

//! ANIMATION MOVIES 
//? http://localhost:4200/animation
router.get('/animation', (req, res)=> {
    const url = 'https://api.sampleapis.com/movies/animation'

    axios.get(url)
        .then(resp => {
            res.render('pages/allMovies', {
                title: 'Animation Movies',
                name: 'Animation Movies',
                data: resp.data
            })
        })
})

//! CLASSIC MOVIES 
//? http://localhost:4200/classic
router.get('/classic', (req, res) => {
    const url= 'https://api.sampleapis.com/movies/classic'

    axios.get(url)
    .then(resp => {
            res.render('pages/allMovies', {
                title: 'Classic Movies',
                name: 'Classic Movies',
                data: resp.data
            })
        })
})

//! COMEDY MOVIES
//? http://localhost:4200/comedy 

router.get('/comedy', (req, res) => {
    const url= 'https://api.sampleapis.com/movies/comedy'

    axios.get(url)
    .then(resp => {
            res.render('pages/allMovies', {
                title: 'Comedy Movies',
                name: 'Comedy Movies',
                data: resp.data
            })
        })
})

//! DRAMA MOVIES
//? http://localhost:4200/drama 

router.get('/drama', (req, res) => {
    const url= 'https://api.sampleapis.com/movies/drama'

    axios.get(url)
    .then(resp => {
            res.render('pages/allMovies', {
                title: 'Drama Movies',
                name: 'Drama Movies',
                data: resp.data
            })
        })
})

//! HORROR MOVIES
//? http://localhost:4200/horror 

router.get('/horror', (req, res) => {
    const url= 'https://api.sampleapis.com/movies/horror'

    axios.get(url)
    .then(resp => {
            res.render('pages/allMovies', {
                title: 'Horror Movies',
                name: 'Horror Movies',
                data: resp.data
            })
        })
})

//! FAMILY MOVIES 
//? http://localhost:4200/family 

router.get('/family', (req, res) => {
    const url= 'https://api.sampleapis.com/movies/family'

    axios.get(url)
    .then(resp => {
            res.render('pages/allMovies', {
                title: 'Family Movies',
                name: 'Family Movies',
                data: resp.data
            })
        })
})

//! MYSTERY MOVIES
//? http://localhost:4200/mystery 

router.get('/mystery', (req, res) => {
    const url= 'https://api.sampleapis.com/movies/mystery'

    axios.get(url)
    .then(resp => {
            res.render('pages/allMovies', {
                title: 'Mystery Movies',
                name: 'Mystery Movies',
                data: resp.data
            })
        })
})

//! WESTERN MOVIES 
//? http://localhost:4200/western 

router.get('/western', (req, res) => {
    const url= 'https://api.sampleapis.com/movies/western'

    axios.get(url)
    .then(resp => {
            res.render('pages/allMovies', {
                title: 'Western Movies',
                name: 'Western Movies',
                data: resp.data
            })
        })
})



module.exports = router