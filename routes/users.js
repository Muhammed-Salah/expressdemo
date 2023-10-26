const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('home page of users')
  })

router.get('/new', ( req, res) => {
    res.send("hello new users");
})

router.get('/:id', ( req, res) => {
    res.send(`hello user ${req.params.id}`);
})

module.exports = router;