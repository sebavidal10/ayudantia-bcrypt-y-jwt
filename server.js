require('dotenv').config();
const express = require('express');
const cors = require('cors');

const postRoutes = require('./src/routes/postRoutes');
const userRoutes = require('./src/routes/userRoutes');
const authRoutes = require('./src/routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});

// ruta default
app.get('/', (req, res) => {
  res.send('Hola G27');
});

app.use('/posts', postRoutes);
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
