const express = require('express'),
      app = express(),
      fs = require('fs');

app.use('/', express.static('public'));
// app.use('/about', express.static('./public/about.html'));
// app.get('/about', public.about);
app.get('/about', function (req, res) {
  fs.readFile('./public/about.html', 'utf8', (err, data) => {
    res.send(data);
  })
});

// app.get('/', (req, res) => {
//   res.send('Hello MANAsdfadfANANAN!');
// });

app.listen(8123, () => {
  console.log('listening on port 8123.');
});
