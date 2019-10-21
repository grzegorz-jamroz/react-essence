const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

router.get('/shop', function(req, res){
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.use('/', router);
app.use('/build', express.static(path.join(__dirname, 'build')));

app.listen(3000);
console.log(`listening on port 3000`);
