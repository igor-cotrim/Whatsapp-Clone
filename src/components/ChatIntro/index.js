import React from 'react';

import './styles.css'

function ChatIntro() {
  return (
    <div className="chatIntro">
      <img src="https://web.whatsapp.com/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg" alt=""/>
      <h1>Mantenha seu celular conectado</h1>
      <h2>
        O whatsapp conecta ao seu telefone para sincronizar suas mensagens.
        Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.
      </h2>
    </div>
  )
}

export default ChatIntro;