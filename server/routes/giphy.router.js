const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios')

const router = express.Router();


// return giphy query

router.get('/:search', (req, res) => {
  //return favorite images 

  const searchQuery = req.params.search

  console.log('search is:', req.params.search)


  axios.get(`http://api.giphy.com/v1/gifs/search?api_key=TI6iPmBlG62XP8nouEjiVHQGG5o66pt2&q=${searchQuery}&limit=6`)
    .then((result) => {
      res.send(result.data)
    }).catch((err) => {
      console.log('error getting data from giphy', err);
    });


});





module.exports = router;