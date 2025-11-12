function Evento({ nome, data, local }) {
  return (
    <div>
      <h2>{nome}</h2>
      <p>Data: {data}</p>
      <p>Local: {local}</p>
    </div>
  );
}
  export default Evento;