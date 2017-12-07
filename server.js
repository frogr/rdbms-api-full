const express = require('express');
const bodyParser = require('body-parser');

const sqlite = require('sqlite3');
const knex = require('knex');

const server = express();

server.use(bodyParser.json());
// [POST] /users This route should save a new user to the server.
server.post('/users', (req, res) => {});

// [GET] /users This route will return an array of all users.
server.get('/users', (req, res) => {});

// [GET] /users/:id This route will return the user with the matching id.
server.get('/users/:id', (req, res) => {});

// [GET] /users/:id/posts returns all posts for the user with the specified id.
server.get('/users/:id/posts', (req, res) => {});

// [DELETE] /users/:id This route should delete the specified user.
server.delete('/users/:id/', (req, res) => {});

// [POST] /posts This route should save a new post to the server.
server.post('/posts', (req, res) => {});

// [GET] /posts This route will return an array of all posts.
server.get('/users', (req, res) => {});

// [GET] /posts/:id This route will return the post with the matching id.
server.get('/posts/:id', (req, res) => {});

// [DELETE] /posts/:id This route should delete the specified post.
server.delete('/users/:id/', (req, res) => {});
// [POST] /tags This route should save a new tag to the server.
server.post('/tags', (req, res) => {});

// [GET] /tags This route will return an array of all tags
server.get('/users', (req, res) => {});

// [GET] /tags/:id This route will return the tag with the matching id.
server.get('/tags/:id', (req, res) => {});

// [DELETE] /tags/:id This route should delete the specified tag.
server.delete('/users/:id/', (req, res) => {});

const port = 3000;
server.listen(port, function() {
  console.log(`Server Listening on ${port}`);
});
