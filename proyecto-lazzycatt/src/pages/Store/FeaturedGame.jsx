function FeaturedGame({ game }) {
  return (
    <div className="featured-game">
      <img src={game.img} alt={game.name} />
      <div className="featured-info">
        <h2>{game.name}</h2>
        <button className="button">
            {game.price}
        </button>
      </div>
    </div>
  );
}

export default FeaturedGame;