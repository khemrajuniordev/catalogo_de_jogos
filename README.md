# 🎮 Catálogo de Jogos

Projeto full stack desenvolvido para praticar e consolidar conhecimentos em **API REST, Node.js, Express, PostgreSQL e React**.

A aplicação permite consultar, cadastrar, atualizar e excluir jogos através de uma API conectada a um banco de dados PostgreSQL, com um frontend para interação com os dados.

> 🚧 Projeto em desenvolvimento

---

## 📌 Sobre o projeto

O **Catálogo de Jogos** foi criado como projeto de estudo para colocar em prática conceitos de desenvolvimento backend e frontend.

O projeto começou utilizando um array em memória para armazenar os jogos e evoluiu para uma estrutura com **PostgreSQL**, permitindo que os dados sejam persistidos mesmo após o servidor ser reiniciado.

### Fluxo da aplicação

```text
┌──────────────┐
│   Frontend   │
│    React     │
└──────┬───────┘
       │
       │ HTTP / JSON
       ▼
┌──────────────┐
│     API      │
│ Node +       │
│ Express      │
└──────┬───────┘
       │
       │ SQL
       ▼
┌──────────────┐
│ PostgreSQL   │
│    jogos     │
└──────────────┘
```

---

## 🚀 Tecnologias

### Backend

- Node.js
- Express
- PostgreSQL
- pg
- REST API

### Frontend

- React
- JavaScript
- Vite
- CSS

### Ferramentas

- VS Code
- Postman
- pgAdmin 4
- Git
- GitHub

---

## 📂 Estrutura do projeto

```text
catalogo-jogos/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── database/
│   │   ├── services/
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
│
├── database/
│   ├── 01-create-table.sql
│   ├── 02-insert-jogos.sql
│   └── 03-queries.sql
│
├── README.md
└── .gitignore
```

---

## 🗄️ Banco de dados

O projeto utiliza PostgreSQL para armazenar os jogos.

### Tabela `jogos`

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | SERIAL | Identificador único |
| `jogo` | VARCHAR(100) | Nome do jogo |
| `ano` | INTEGER | Ano de lançamento |
| `genero` | VARCHAR(50) | Gênero do jogo |
| `plataforma` | VARCHAR(50) | Plataforma |
| `desenvolvedora` | VARCHAR(100) | Empresa desenvolvedora |
| `nota` | DECIMAL(3,1) | Nota do jogo |

---

## 🔌 API

A API utiliza os princípios básicos de uma API REST.

### Listar jogos

```http
GET /api/jogos
```

### Buscar jogo por ID

```http
GET /api/jogos/:id
```

### Cadastrar jogo

```http
POST /api/jogos
```

Exemplo:

```json
{
  "jogo": "Cyberpunk 2077",
  "ano": 2020,
  "genero": "RPG",
  "plataforma": "PC",
  "desenvolvedora": "CD Projekt Red",
  "nota": 8.9
}
```

### Atualizar jogo

```http
PUT /api/jogos/:id
```

### Excluir jogo

```http
DELETE /api/jogos/:id
```

---

## ⚙️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/SEU-USUARIO/catalogo-jogos.git
```

Entre na pasta:

```bash
cd catalogo-jogos
```

---

### 2. Configure o banco de dados

Abra o **pgAdmin 4** e execute os arquivos SQL presentes em:

```text
database/
```

Primeiro:

```text
01-create-table.sql
```

Depois:

```text
02-insert-jogos.sql
```

---

### 3. Configure o Backend

Entre na pasta:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo:

```text
.env
```

Exemplo:

```env
DB_USER=postgres
DB_HOST=localhost
DB_NAME=postgres
DB_PASSWORD=sua_senha
DB_PORT=5432
PORT=4000
```

> ⚠️ Não envie o arquivo `.env` para o GitHub.

---

### 4. Execute a API

```bash
npm start
```

Servidor:

```text
http://localhost:4000
```

API:

```text
http://localhost:4000/api/jogos
```

---

### 5. Teste com Postman

Exemplo:

```text
GET http://localhost:4000/api/jogos
```

Para cadastrar:

```text
POST http://localhost:4000/api/jogos
```

Com Body → JSON:

```json
{
  "jogo": "Minecraft",
  "ano": 2011,
  "genero": "Sandbox",
  "plataforma": "PC",
  "desenvolvedora": "Mojang",
  "nota": 9.5
}
```

---

## 🖥️ Frontend

O frontend será desenvolvido utilizando React e terá como objetivo consumir a API e apresentar os jogos em uma interface web.

Funcionalidades planejadas:

- 📋 Listagem de jogos
- 🔎 Busca de jogos
- 🎮 Filtro por gênero
- 💻 Filtro por plataforma
- ➕ Cadastro de jogos
- ✏️ Edição de jogos
- 🗑️ Exclusão de jogos
- ⭐ Exibição das notas

---

## 📚 Conceitos praticados

Durante o desenvolvimento do projeto serão praticados:

- JavaScript
- Node.js
- Express
- API REST
- HTTP
- JSON
- CRUD
- `GET`
- `POST`
- `PUT`
- `DELETE`
- `req.body`
- `req.params`
- Status HTTP
- PostgreSQL
- SQL
- Conexão entre API e banco de dados
- React
- Consumo de API
- Git e GitHub

---

## 🎯 Objetivo

O principal objetivo deste projeto é praticar o desenvolvimento de uma aplicação completa, entendendo como os dados percorrem cada camada:

```text
Usuário
   ↓
Frontend
   ↓
API
   ↓
PostgreSQL
   ↓
API
   ↓
Frontend
   ↓
Usuário
```

---

## 🚧 Próximas melhorias

- [ ] Criar API completa
- [ ] Implementar conexão com PostgreSQL
- [ ] Implementar CRUD completo
- [ ] Criar filtros
- [ ] Criar frontend em React
- [ ] Melhorar interface
- [ ] Adicionar validações
- [ ] Tratamento de erros
- [ ] Criar documentação da API
- [ ] Publicar aplicação

---

## 👨‍💻 Autor

**Khemraj Junior**

Projeto desenvolvido para estudos e prática de desenvolvimento **Full Stack**.

---

⭐ Projeto desenvolvido durante o processo de aprendizado de **APIs, bancos de dados e desenvolvimento web**.
