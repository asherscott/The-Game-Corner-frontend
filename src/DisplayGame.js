import "./DisplayGame.css";

function DisplayGame({ game }) {
  // Displays additional info about a game instance
  return (
    <div className="gameInfo">
      <div className="gameCard">
        <h3>{game.name}</h3>
        <p>
          <span>Genre: </span>
          {game.genre}
        </p>
        <p>
          <span>Developer: </span>
          {game.developer}
        </p>
        <p>
          <span>Platform: </span>
          {game.platform}
        </p>
        <p>
          <span>Release: </span>
          {game.release}
        </p>
        <div className="desription">
          <br />

          <p>{game.description}</p>
        </div>
      </div>
      <img className="gameImg" src={game.image} />
    </div>
  );
}

export default DisplayGame;
