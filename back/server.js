const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const usuarios = [
  {
    id: 1,
    nome: 'Ana Silva',
    email: 'ana.silva@example.com',
    idade: 28,
    cidade: 'São Paulo',
    telefone: '11 99999-0001'
  },
  {
    id: 2,
    nome: 'Bruno Costa',
    email: 'bruno.costa@example.com',
    idade: 35,
    cidade: 'Rio de Janeiro',
    telefone: '21 98888-0002'
  },
  {
    id: 3,
    nome: 'Carla Mendes',
    email: 'carla.mendes@example.com',
    idade: 31,
    cidade: 'Belo Horizonte',
    telefone: '31 97777-0003'
  },
  {
    id: 4,
    nome: 'Diego Souza',
    email: 'diego.souza@example.com',
    idade: 42,
    cidade: 'Curitiba',
    telefone: '41 96666-0004'
  },
  {
    id: 5,
    nome: 'Eduarda Lima',
    email: 'eduarda.lima@example.com',
    idade: 24,
    cidade: 'Salvador',
    telefone: '71 95555-0005'
  }
];


app.get('/usuarios', (req, res) => {
  const listaResumida = usuarios.map(({ id, nome }) => ({ id, nome }));
  res.json(listaResumida);
});



app.get('/dados/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === id);

  if (!usuario) {
    return res.status(404).json({ erro: 'Usuário não encontrado' });
  }

  res.json(usuario);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
