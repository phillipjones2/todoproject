const express = require('express'),
      app = express(),
      path = require('path');
      PORT = 3000;

// Static Routing
app.use(express.static(__dirname + '/public'));
app.use("/", express.static("public"));
app.use("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/about.html'));
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}.`);
});
