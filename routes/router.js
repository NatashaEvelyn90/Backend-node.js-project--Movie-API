const express = require('express')
const router = express.Router()
const axios = require('axios')
const PORT = process.env.PORT || 4200


//! This is your main homepage right here 
//? http://localhost:4200
router.get('/', (req, res)=> {
    res.render('pages/home', {
                //* the title is going to show in your header.ejs + home.ejs.  You are using EJS for this! Name is showing in home.ejs
                title: "Movies Galore!",
                name: "Crazpicc's movie gallery",
            })
})

router.use('/', require('./api/movieRoutes'))

//! 404 ERROR page
router.use((req, res, next)=> {
    res.status(404)
    .render('pages/error404', {
        title: '404',
        name: 'THAT PAGE DOES NOT EXIST'
    })
})

module.exports = router