const express = require('express'),
      app = express(),
      path = require('path'),
      PORT = 3000,
      fs = require('fs'),
      mongoose = require('mongoose'),
      faker = require('faker');

// Seed data
users = [];
for (let i = 0; i < 10; i++ ) {
  users.push({ name: faker.name.findName() , email: faker.internet.email(), password: faker.internet.password()});
};

todos = [];
for (let i = 0; i < 100; i++) {
  todos.push({ todo: faker.lorem.sentence() , user: users[Math.floor(Math.random()*10)] })
};


mongoose.connect('mongodb://localhost/test');
const db = mongoose.connection;
db.on('err', console.error.bind(console, 'connection error:'));
db.once('open',function(){
  console.log('We ARE CONNECTED')
  // console.log(users)
  console.log(users[Math.floor(Math.random()*10)]);
  console.log(todos[Math.floor(Math.random()*100)]);
});

// Routes
app.use('/', express.static('public'));

// Static Routing
app.use(express.static(__dirname + '/public'));
app.use("/", express.static("public"));
app.use("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/about.html'));
});

// Server
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}.`);
});
