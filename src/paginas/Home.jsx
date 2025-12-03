import Evento from "../componentes/Evento";

function Home({ eventos }) {
  return (
    <main>
      <h1>Bem-vindo ao Gerenciador de Eventos</h1>
      <p>Aqui você fica por dentro dos eventos</p>
      <p>Eventos cadastrados:</p>

      {/* Eventos fixos */}
      <Evento nome="Mundo Senai" 
      data="05/11/2025" 
      local="Auditório" />
      <Evento nome="Passeio Escolar"
       data="25/10/2025" 
       local="São carlos" />
      <Evento nome="Mundo SENAI" 
      data="15/11/2025"
       local="Auditório" />
      <Evento nome="Novo capitulo" 
      data="12/12/2025"
      local="Online" />

      {/* Eventos dinâmicos */}
      {eventos && eventos.length > 0 && (
        <>
          <h3>Eventos adicionados pelo usuário:</h3>
          {eventos.map((evento) => (
            <Evento
              key={evento.id}
              nome={evento.nome}
              data={evento.data}
              local={evento.local}
            />
          ))}
        </>
      )}
    </main>
  );
}

export default Home;