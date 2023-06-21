const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require('../models/posts');

const all = async (req, res) => {
  try {
    const posts = await getPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const one = async (req, res) => {
  try {
    const post = await getPostById(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const create = async (req, res) => {
  try {
    const post = await createPost(req.body);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const post = await updatePost(req.params.id, req.body);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const destroy = async (req, res) => {
  try {
    const post = await deletePost(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  all,
  one,
  create,
  update,
  destroy,
};
