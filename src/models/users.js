const pool = require('./db');

const getUsers = async () => {
  const query = 'SELECT * FROM users';
  try {
    const { rows } = await pool.query(query);
    return rows;
  } catch (error) {
    throw new Error(error);
  }
};

const getUserById = async (id) => {
  const query = 'SELECT * FROM users WHERE id = $1';
  try {
    const response = await pool.query(query, [id]);
    return response.rows;
  } catch (error) {
    throw new Error(error);
  }
};

const createUser = async (user) => {
  const query =
    'INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *';
  try {
    const response = await pool.query(query, [user.name, user.password]);
    return response.rows;
  } catch (error) {
    throw new Error(error);
  }
};

const updateUser = async (id, user) => {
  const query =
    'UPDATE users SET name = $1, password = $2 WHERE id = $3 RETURNING *';
  try {
    const response = await pool.query(query, [user.name, user.password, id]);
    return response.rows;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteUser = async (id) => {
  const query = 'DELETE FROM users WHERE id = $1';
  try {
    const response = await pool.query(query, [id]);
    return response.rows;
  } catch (error) {
    throw new Error(error);
  }
};

const getUserByEmailAndPassword = async (user) => {
  const query = 'SELECT * FROM users WHERE name = $1 AND password = $2';
  try {
    const response = await pool.query(query, [user.name, user.password]);
    return response.rows;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserByEmailAndPassword,
};
