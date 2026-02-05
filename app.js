const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// In-memory data store for blog posts
let posts = [
  {
    id: 1,
    title: 'Welcome to My Blog',
    content: 'This is my first blog post. It\'s great to get started!',
    date: new Date('2026-02-05').toLocaleDateString()
  }
];

let nextId = 2;

// Routes

// Home page - display all posts
app.get('/', (req, res) => {
  res.render('index', { posts });
});

// Show create post form
app.get('/create', (req, res) => {
  res.render('create');
});

// Create new post
app.post('/create', (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).render('create', { error: 'Title and content are required.' });
  }

  const newPost = {
    id: nextId++,
    title,
    content,
    date: new Date().toLocaleDateString()
  };

  posts.unshift(newPost); // Add to beginning
  res.redirect('/');
});

// Show edit post form
app.get('/edit/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));

  if (!post) {
    return res.status(404).render('error', { message: 'Post not found.' });
  }

  res.render('edit', { post });
});

// Update post
app.post('/edit/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).render('edit', { post: { id: postId, title, content }, error: 'Title and content are required.' });
  }

  const post = posts.find(p => p.id === postId);

  if (!post) {
    return res.status(404).render('error', { message: 'Post not found.' });
  }

  post.title = title;
  post.content = content;

  res.redirect('/');
});

// Delete post
app.post('/delete/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  posts = posts.filter(p => p.id !== postId);
  res.redirect('/');
});

// 404 error handler
app.use((req, res) => {
  res.status(404).render('error', { message: 'Page not found.' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Blog application running at http://localhost:${PORT}`);
});
