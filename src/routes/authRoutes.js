const router = require('express').Router();

const { createUser, getUserByEmailAndPassword } = require('../models/users');

// register
router.post('/register', async (req, res) => {
  try {
    const user = await createUser(req.body);
    if (!user) {
      throw new Error('No se pudo crear el usuario');
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// login
router.post('/login', async (req, res) => {
  try {
    const user = await getUserByEmailAndPassword(req.body);
    if (!user || user.length === 0) {
      throw new Error('No se pudo loguear el usuario');
    }

    res.status(200).json('Usuario logueado correctamente');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
