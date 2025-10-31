const express = require('express')
const router = express.Router()
const axios = require('axios')
const PORT = process.env.PORT || 4200


//! This is your main homepage right here 
//? http://localhost:4200
router.get('/', (req, res)=> {
    res.render('pages/home', {
                //* the title is going to show in your header.ejs + home.ejs.  You are using EJS for this! Name is showing in home.ejs
                title: "MovieZ Galore",
                name: "Crazpicc's movie gallery",
            })
})

router.use('/', require('./api/movieRoutes'))

module.exports = router