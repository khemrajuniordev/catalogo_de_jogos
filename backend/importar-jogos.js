const fs = require('fs');
const pool = require('./src/database/connection');

async function importarJogos() {
  try {
    const arquivo = fs.readFileSync('./jogos.json', 'utf8');

    const jogos = JSON.parse(arquivo);

    console.log(`📦 Jogos encontrados no JSON: ${jogos.length}`);

    for (const jogo of jogos) {
      await pool.query(
        `INSERT INTO jogos
        (jogo, ano, genero, plataforma, desenvolvedora, nota)
        VALUES ($1, $2, $3, $4, $5, $6)`,
        [
          jogo.jogo,
          jogo.ano,
          jogo.genero,
          jogo.plataforma,
          jogo.desenvolvedora,
          jogo.nota
        ]
      );
    }

    console.log('✅ Jogos importados com sucesso!');
  } catch (erro) {
    console.error('❌ Erro ao importar jogos:', erro.message);
  } finally {
    await pool.end();
  }
}

importarJogos();