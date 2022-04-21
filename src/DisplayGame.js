import { useState } from "react";
import "./DisplayGame.css";

function DisplayGame({ game }) {
  // Displays additional info about a game instance
  const [gameRating, setGameRating] = useState(game.avg_rating.toFixed(1));

  return (
    <div className="gameInfo">
      <div className="gameCard">
        <h3>
          {game.name}{" "}
          <span
            className={`avgRating ${game.avg_rating >= 4 ? "green" : ""} ${
              game.avg_rating < 2 ? "red" : ""
            }`}
          >
            {game.avg_rating.toFixed(1)}
          </span>
        </h3>
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
