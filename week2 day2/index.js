const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());

const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
let posts = JSON.parse(data);

// GET all posts
const getposts = (req, res) => {
  res.status(200).json(posts);
};

// GET post by id
const getpostbyid = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  res.status(200).json(post);
};

// POST 
const createpost = (req, res) => {
  const newpost = {
    userId: req.body.userId,
    id: posts.length ? posts[posts.length - 1].id + 1 : 1,
    title: req.body.title,
    body: req.body.body
  };
  posts.push(newpost);
  fs.writeFileSync('./data.json', JSON.stringify(posts, null, 2), 'utf-8');
  res.status(201).json(newpost);
};

// PUT update whole post
const modifypost = (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex(p => p.id === id);
  posts[index] = {
    id: id,
    userId: req.body.userId,
    title: req.body.title,
    body: req.body.body
  };
  fs.writeFileSync('./data.json', JSON.stringify(posts, null, 2), 'utf-8');
  res.status(200).json(posts[index]);
};

// PATCH modify part of post
const patchpost = (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex(p => p.id === id);

 // const updatedPost = { ...posts[index], ...req.body };
  //posts[index] = updatedPost;
  posts[index] = {
  id: id,
  userId: req.body.userId ?? posts[index].userId,
  title: req.body.title ?? posts[index].title,
  body: req.body.body ?? posts[index].body
};
 

  fs.writeFileSync('./data.json', JSON.stringify(posts, null, 2), 'utf-8');
res.status(200).json(posts[index]);
};

// DELETE post by id
const deletepost = (req, res) => {
  const id = parseInt(req.params.id);
posts = posts.filter(post => post.id !== id);
  fs.writeFileSync('./data.json', JSON.stringify(posts, null, 2), 'utf-8');
  res.status(204).send(); 
};

// Routes
app.route('/posts')
  .get(getposts)
  .post(createpost);

app.route('/posts/:id')
  .get(getpostbyid)
  .put(modifypost)
  .patch(patchpost)
  .delete(deletepost);

// Start server
const port = 8000;
app.listen(port, () => {
  console.log("server listen");
});
