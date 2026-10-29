const express = require('express');
const pool = require('./database/connection');

const app = express();

app.use(express.json());

app.get('/api/jogos', async (req, res) => {
  try {
    const resultado = await pool.query('SELECT * FROM jogos');

    res.json(resultado.rows);
  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      mensagem: 'Erro ao buscar jogos.'
    });
  }
});

module.exports = app;