const express = require('express');

const app = express();
const port = 3000;

app.get('/api/friends/3', (req, res) => res.json({ id: '3', name: 'Gabriel', age: 42 }));
app.get('/api/friends', (req, res) => res.json(
  [
    { id: '3', name: 'Gabriel', age: 42 },
    { id: '12', name: 'Josemaria', age: 26 },
    { id: '8', name: 'Anna', age: 24 },
  ],
));

app.listen(port, () => console.log(`Friends server listening on port ${port}!`));
