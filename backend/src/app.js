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

app.get('/api/jogos/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);

    const resultado = await pool.query(
      'SELECT * FROM jogos WHERE id = $1',
      [id]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        mensagem: 'Jogo não encontrado.'
      });
    }

    res.json(resultado.rows[0]);

  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      mensagem: 'Erro ao buscar jogo.'
    });
  }
});
app.post('/api/jogos', async (req, res) => {
  try {
    const {
      jogo,
      ano,
      genero,
      plataforma,
      desenvolvedora,
      nota
    } = req.body;

    const resultado = await pool.query(
      `INSERT INTO jogos
      (jogo, ano, genero, plataforma, desenvolvedora, nota)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *`,
      [jogo, ano, genero, plataforma, desenvolvedora, nota]
    );

    res.status(201).json(resultado.rows[0]);

  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      mensagem: 'Erro ao cadastrar jogo.'
    });
  }
});
app.put('/api/jogos/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);

    const {
      jogo,
      ano,
      genero,
      plataforma,
      desenvolvedora,
      nota
    } = req.body;

    const resultado = await pool.query(
      `UPDATE jogos
       SET jogo = $1,
           ano = $2,
           genero = $3,
           plataforma = $4,
           desenvolvedora = $5,
           nota = $6
       WHERE id = $7
       RETURNING *`,
      [jogo, ano, genero, plataforma, desenvolvedora, nota, id]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        mensagem: 'Jogo não encontrado.'
      });
    }

    res.json(resultado.rows[0]);

  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      mensagem: 'Erro ao atualizar jogo.'
    });
  }
});
app.delete('/api/jogos/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);

    const resultado = await pool.query(
      'DELETE FROM jogos WHERE id = $1 RETURNING *',
      [id]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        mensagem: 'Jogo não encontrado.'
      });
    }

    res.json({
      mensagem: 'Jogo excluído com sucesso.',
      jogo: resultado.rows[0]
    });

  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      mensagem: 'Erro ao excluir jogo.'
    });
  }
});
module.exports = app;