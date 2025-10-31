//! Everything you will be doing will mainly be in this page.
const express = require('express')
const router = express.Router()
// const axios = require('axios')
const PORT = process.env.PORT || 4200

// http://localhost:4200/movie
router.get('/', (req, res)=> {
    res.send('Movies coming your way!')
})

module.exports = router