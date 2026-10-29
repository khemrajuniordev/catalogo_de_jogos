const pool = require('./database/connection');

async function testarConexao() {
  try {
    const resultado = await pool.query('SELECT NOW()');

    console.log('Conectado ao PostgreSQL!');
    console.log(resultado.rows[0]);

  } catch (erro) {
    console.error('Erro ao conectar:', erro.message);
  } finally {
    await pool.end();
  }
}

testarConexao();