import React, { useEffect, useState } from 'react';
import {
  Typography, Paper, Box,
  CircularProgress
} from '@mui/material';

function DadosUsuario({ id }) {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/dados/${id}`)
      .then(res => res.json())
      .then(data => {
        setUsuario(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar dados detalhados:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <CircularProgress />;
  if (!usuario) return <Typography>Usuário não encontrado.</Typography>;

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Detalhes do Usuário
      </Typography>
      <Paper sx={{ padding: 3 }}>
        <Typography><strong>Nome:</strong> {usuario.nome}</Typography>
        <Typography><strong>Email:</strong> {usuario.email}</Typography>
        <Typography><strong>Idade:</strong> {usuario.idade}</Typography>
        <Typography><strong>Cidade:</strong> {usuario.cidade}</Typography>
        <Typography><strong>Telefone:</strong> {usuario.telefone}</Typography>
      </Paper>
    </Box>
  );
}

export default DadosUsuario;
