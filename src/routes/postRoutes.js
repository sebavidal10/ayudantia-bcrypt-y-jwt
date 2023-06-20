const router = require('express').Router();

const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require('../models/posts');

router.get('', async (req, res) => {
  try {
    const posts = await getPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// crear un post
router.post('', async (req, res) => {
  try {
    const post = await createPost(req.body);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// obtener un post por id
router.get('/:id', async (req, res) => {
  try {
    const post = await getPostById(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// actualizar un post
router.put('/:id', async (req, res) => {
  try {
    const post = await updatePost(req.params.id, req.body);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// eliminar un post
router.delete('/:id', async (req, res) => {
  try {
    const post = await deletePost(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
