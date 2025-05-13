import React from 'react';
import InfoUsuario from './InfoUsuario';

export default function Perfil({ usuario }) {
      return (
            <div>
                  <h2>Perfil do Usuário</h2>
                  <InfoUsuario usuario={usuario} />
            </div>
      );
}

// InfoUsuario.jsx
import React from 'react';

export default function InfoUsuario({ usuario }) {
      return (
            <div>
                  <p>Nome: {usuario.nome}</p>
                  <p>Idade: {usuario.idade}</p>
                  <p>Email: {usuario.email}</p>
            </div>
      );
}
