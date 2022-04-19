import "./DisplayGame.css";

function DisplayGame({ game }) {
  // Displays additional info about a game instance
  return (
    <div>
      DisplayGame
      <p>{game.name}</p>
    </div>
  );
}

export default DisplayGame;
