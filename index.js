const express = require('express'),
      app = express(),
      path = require('path'),
      PORT = 3000,
      mongoose = require('mongoose'),
      bodyParser = require("body-parser"),
      passport = require('./config/passport.js'),
      expses = require('express-session');

// Routing Modules
const authenticate = require('./routes/authenticate.js');
      api = require('./routes/api.js');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expses({
  name: 'climber.sid',
  secret: 'keyboard cat rocks',                                    //CHANGE FOR AN ENV VARIABLE LATER FOR PROD
  resave: true,
  saveUninitialized: true,
  cookie : { secure : false, maxAge : (7 * 24 * 60 * 60 * 1000) } // 7 Days
}));
app.use(passport.initialize());
app.use(passport.session());

// Mongoose Connection Setup
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

// Routes
app.use('/auth', authenticate);
app.use('/api', api);

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/about.html'));
});

// Server
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}.`);
});
