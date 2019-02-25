const express = require('express');
const path = require('path');
const helmet = require('helmet');

const port = process.env.PORT || 8080;
const app = express();

app.use(helmet());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));

app.listen(port, () => console.log(`Listen on port ${port}`));