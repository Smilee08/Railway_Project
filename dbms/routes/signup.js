const express = require('express');
const fs = require('fs');
const ejs = require('ejs');

const app = express();

// Define routes
app.get('/', (req, res) => {
  const code = fs.readFileSync('index.js', 'utf8');
  const renderedHtml = ejs.renderFile('index.ejs', { code });
  res.send(renderedHtml);
});

app.get('/about', (req, res) => {
  const code = fs.readFileSync('about.js', 'utf8');
  const renderedHtml = ejs.renderFile('login.ejs', { code });
  res.send(renderedHtml);
});

app.get('/contact', (req, res) => {
  const code = fs.readFileSync('contact.js', 'utf8');
  const renderedHtml = ejs.renderFile('logout.ejs', { code });
  res.send(renderedHtml);
});

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});


module.exports = router;