import { posts as data } from "../data/posts";

//private
let posts = [...data];

function getPosts() {
  //get all posts
}

function getPostsByUser(userId) {
  //get all posts by userId
}

function getPostById(id) {
  //get a single post by id
}

function addPost(post) {
  //add new post to BEGINNING of posts array
  // use generateId function and pass posts array as the argument to generate a unique id.
}

function updatePostTitle(id, title) {
  //update post title
}

function updatePostBody(id, body) {
  //update post body
}

function updatePost(id, post) {
  //update post title and or body (imagine a form where user is allowed to edit both title and post but may also choose to only edit one of them)
}

function deletePostBy(id) {
  //delete post by id
}

function deletePostsByUserId(userId) {
  //delete all posts of a user by given userId
}
