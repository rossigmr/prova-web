const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Servidor Node com Express funcionando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


const usuarios = [
  { id: 1, nome: "Ana Silva", email: "ana.silva@example.com" },
  { id: 2, nome: "Bruno Souza", email: "bruno.souza@example.com" },
  { id: 3, nome: "Carlos Lima", email: "carlos.lima@example.com" },
  { id: 4, nome: "Daniela Rocha", email: "daniela.rocha@example.com" },
  { id: 5, nome: "Eduardo Melo", email: "eduardo.melo@example.com" },
  { id: 6, nome: "Fernanda Costa", email: "fernanda.costa@example.com" },
  { id: 7, nome: "Gabriel Alves", email: "gabriel.alves@example.com" },
  { id: 8, nome: "Helena Martins", email: "helena.martins@example.com" },
  { id: 9, nome: "Igor Ferreira", email: "igor.ferreira@example.com" },
  { id: 10, nome: "Juliana Teixeira", email: "juliana.teixeira@example.com" }
];
