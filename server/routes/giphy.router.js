const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios')

const router = express.Router();


// return giphy query

router.get('/:search', (req, res) => {
  //return favorite images 

  const searchQuery = req.params.search

  console.log('search is:', req.params.search)


  axios.get(`api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchQuery}&limit=10&rating=pg-13&lang=en&bundle=clips_grid_picker`)
    .then((result) => {
      res.send(result.data)
    }).catch((err) => {
      console.log('error getting data from giphy', err);
    });


});






module.exports = router;