import React from 'react';
import Usuarios from './Usuarios';
import DadosUsuario from './DadosUsuario';

function App() {
  const path = window.location.pathname;

  if (path.startsWith('/dados/')) {
    const id = path.split('/')[2];
    return <DadosUsuario id={id} />;
  }

  if (path === '/usuarios') {
    return <Usuarios />;
  }

  return <h2>404 - Página não encontrada</h2>;
}

export default App;
