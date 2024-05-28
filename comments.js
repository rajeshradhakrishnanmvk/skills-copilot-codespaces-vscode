// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create route for /comments
app.get('/comments', (req, res) => {
  res.send('This is a route for /comments');
});

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Path: posts.js
// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create route for /posts
app.get('/posts', (req, res) => {
  res.send('This is a route for /posts');
});

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Path: index.js
// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import routes
const comments = require('./comments');
const posts = require('./posts');

// Use routes
app.use(comments);
app.use(posts);

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Run index.js and visit http://localhost:3000/comments and http://localhost:3000/posts

// Path: comments.js
const express = require('express');
const router = express.Router();

router.get('/comments', (req, res) => {
  res.send('This is a route for /comments');
});

module.exports = router;

// Path: posts.js
const express = require('express');
const router = express.Router();

router.get('/posts', (req, res) => {
  res.send('This is a route for /posts');
});

module.exports = router;

// Path: index.js
const express = require('express');
const app = express();
const port = 3000;

const comments = require('./comments');
const posts = require('./posts');

app.use(comments);
app.use(posts);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Run index.js and visit http://localhost:3000/comments and http://localhost:3000/posts

// Path: comments.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('This is a route for /comments');
});

module.exports = router;