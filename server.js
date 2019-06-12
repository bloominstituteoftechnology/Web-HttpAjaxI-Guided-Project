const express = require('express');

const app = express();
const port = 3000;

const friends = [
  { id: '1', name: 'Anna', age: 24 },
  { id: '2', name: 'Josemaria', age: 26 },
  { id: '3', name: 'Gabriel', age: 41 },
];

app.get('/api/friends', (req, res) => res.json(friends));
app.get('/api/friends/1', (req, res) => res.json(friends[0]));
app.get('/api/friends/2', (req, res) => res.json(friends[1]));
app.get('/api/friends/3', (req, res) => res.json(friends[2]));

app.listen(port, () => console.log(`Friends server listening on port ${port}!`));
