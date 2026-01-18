function GameCard({ game }) {
  return (
    <div className="card">
      <img src={game.img} />
      <p>{game.name}</p>
      <button className="button">Comprar</button>
    </div>
  );
}

export default GameCard