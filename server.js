require('dotenv').config();
const express = require('express');
const cors = require('cors');

const postRoutes = require('./src/routes/postRoutes');
const userRoutes = require('./src/routes/userRoutes');

const app = express();

// agregar cors
app.use(cors());

// agregar body parser
app.use(express.json());

// agregar puerto
const PORT = process.env.PORT || 3000;

// levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});

// ruta default
app.get('/', (req, res) => {
  res.send('Hola G27');
});

app.use('/posts', postRoutes);
app.use('/users', userRoutes);
