const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  //return favorite images 
  console.log('in /api/favorite');
  const queryText = `SELECT * FROM category ORDER BY name;`
  pool.query(queryText)
  .then((results) => {
    res.send(results.rows)
  })
  .catch((error) => {
    console.log(`error in query${error}`);
    res.sendStatus(500)
  })
  res.sendStatus(200);
});

// add a new favorite
router.post('/', (req, res) => {
  console.log('inside of /api/favorite post, req.body' , req.body);
  let url = req.body
  let title = req.body
  //query text for data fields and sql injection 
  const queryText = `INSERT INTO "gif" (path,title)
  VALUES($1, $2)`
  //re-declaring data fields 
  const queryParams = [url, title]
  //bringing in pool 
  pool.query(queryText, queryParams)
    .then((results) => {
      res.send(201)
    }).catch((error) => {
      console.log(`error making query ${queryText}`, error);
      res.sendStatus(500)
    })
  res.sendStatus(200);
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
