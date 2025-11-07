import React from 'react';

export default function App(){
  return (
    <div style={{padding:20, fontFamily: 'Inter, system-ui, Arial'}}>
      <header style={{display:'flex', alignItems:'center', gap:12}}>
        <img src="/logo_full.png" alt="Condá" style={{height:64}}/>
        <div>
          <h1 style={{margin:0}}>Condá Prestadores</h1>
          <p style={{margin:0, color:'#666'}}>Cadastro de Prestadores de Serviços</p>
        </div>
      </header>
      <main style={{marginTop:20}}>
        <p>Este é um pacote de distribuição do aplicativo <strong>Condá Prestadores</strong>.</p>
        <p>Após deploy, acesse /signup para criar o primeiro usuário e /admin para o painel administrativo.</p>
      </main>
    </div>
  );
}
