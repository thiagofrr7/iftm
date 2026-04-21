function Card(props) {
  return (
    <div className="card">
      <h3>{props.titulo}</h3>
      <p>{props.descricao}</p>
    </div>
  );
}

export default Card;