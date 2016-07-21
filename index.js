const express = require('express'),
      app = express(),
      path = require('path'),
      PORT = 3000,
      fs = require('fs'),
      mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todoProject');
const db = mongoose.connection;
db.on('err', console.error.bind(console, 'connection error:'));
db.once('open',function(){
  console.log('We ARE CONNECTED')
  // console.log(users)
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
