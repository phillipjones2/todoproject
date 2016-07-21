const express = require('express'),
      router = express.Router(),
      mongoose = require('mongoose'),
      User = require('../models/users'),
      Todo = require('../models/todos');


router.post('/todos/all', (req, res) => {
  Todo.find({
  },(err, docs) => {
    res.send(docs);
  });
});


// router.post('/post/create', function(req, res) {
//   res.send(SOMETHING);
// });

module.exports = router;
