//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({nombre,banda}) {
  return (
    <div class="card">
      <h2>Hola {nombre}!</h2>
      <h3>Sabemos que tu banda favorita es</h3>
      <div>{banda}</div>
    </div>
  );
}

export default Card;
