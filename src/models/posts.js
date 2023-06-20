const pool = require('./db');

const getPosts = async () => {
  const query = 'SELECT * FROM posts';
  try {
    const { rows } = pool.query(query);
    return rows;
  } catch (error) {
    throw new Error(error);
  }
};

const getPostById = async (id) => {
  const query = 'SELECT * FROM posts WHERE id = $1';
  try {
    const response = pool.query(query, [id]);
    return response.rows;
  } catch (error) {
    throw new Error(error);
  }
};

const createPost = async (post) => {
  const query =
    'INSERT INTO posts (title, content, user_id) VALUES ($1, $2, $3) RETURNING *';

  try {
    const response = pool.query(query, [
      post.title,
      post.content,
      post.user_id,
    ]);
    return response.rows;
  } catch (error) {
    throw new Error(error);
  }
};

const updatePost = async (id, post) => {
  const query =
    'UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *';

  try {
    const response = pool.query(query, [post.title, post.content, id]);
    return response.rows;
  } catch (error) {
    throw new Error(error);
  }
};

const deletePost = async (id) => {
  const query = 'DELETE FROM posts WHERE id = $1';

  try {
    const response = pool.query(query, [id]);
    return response.rows;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
