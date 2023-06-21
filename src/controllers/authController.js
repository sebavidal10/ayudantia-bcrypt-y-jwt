const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createUser, getUserByName } = require('../models/users');

const login = async (req, res) => {
  try {
    const { name, password } = req.body;

    const user = await getUserByName(name);

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const hashedPassword = user[0].password;
    const match = await bcrypt.compare(password, hashedPassword);

    if (match) {
      const token = jwt.sign(
        { name: user[0].name, id: user[0].id },
        process.env.JWT_SECRET
      );
      res.json({ message: 'Usuario logueado correctamente', token });
    } else {
      throw new Error('Usuario o contraseña incorrectos');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const register = async (req, res) => {
  try {
    const originalPassword = req.body.password;
    const hashedPassword = await bcrypt.hash(originalPassword, 10);
    req.body.password = hashedPassword;

    const user = await createUser(req.body);
    if (!user) {
      throw new Error('No se pudo crear el usuario');
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  login,
  register,
};
