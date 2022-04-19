import "./GameList.css";

function GameList({ gameList }) {
  const renderList = gameList.map((game) => {
    return <li key={game.id}>{game.name}</li>;
  });

  return <ul>{renderList}</ul>;
}

export default GameList;
