const express = require('express'),
      router = express.Router(),
      mongoose = require('mongoose'),
      User = require('../models/users'),
      Todo = require('../models/todos');


router.get('/todos/all', (req, res) => {
  Todo.find({
  },(err, docs) => {
    res.send(docs);
  });
});

router.post('/todos', (req, res) => {
  console.log(req.body);
  var todo = new Todo({todo: req.body.todo, user: mongoose.Types.ObjectId( req.body.user )});
  todo.save((err, doc) => {
    if (err) return console.log(err);
    res.send({
        msg:"state successul!",
        data:doc
    });
  });
});

router.put('/todos/:todo_id', (req, res) => {
  // console.log(req.body);
  Todo.findById(req.params.todo_id, (err, todo) => {
    if (err)
      res.send(err);
    // console.log(`todo: ${todo.todo}`)
    // console.log(`body todo: ${req.body.todo}`)
    todo.todo = req.body.todo;
    todo.save((err, doc) => {
      if (err) return console.log(err);
      res.send({
          msg:"state successul!",
          data:doc
      });
    });
  })
});


// router.post('/post/create', function(req, res) {
//   res.send(SOMETHING);
// });

module.exports = router;
