const mongoose = require('mongoose'),
      faker = require('faker'),
      User = require('./src/models/users'),
      Todo = require('./src/models/todos');

var users = [];

mongoose.connect('mongodb://localhost/todoProject');
const db = mongoose.connection;
db.on('err', console.error.bind(console, 'connection error:'));
db.once('open',function(){
  console.log('We ARE CONNECTED')

  User.remove({}, function(err) {
     console.log('User collection removed')
     Todo.remove({}, function(err) {
        console.log('Todo collection removed')
        for (let i = 0; i < 10; i++ ) {

          let user = new User({ name: faker.name.findName() ,
                                email: faker.internet.email(),
                                password: faker.internet.password()});
          user.save((err, user) => {
            for (let i = 0; i < 5; i++) {
              let todo = new Todo({ todo: faker.lorem.sentence() ,
                                    user: user._id })
              todo.save((err, todo) => {
                if (err) return console.error(err);
              });
            };
            if (err) return console.error(err);
          });
        };
        console.log('populated db')
     });
  });
});
