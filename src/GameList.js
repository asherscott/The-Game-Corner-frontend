import "./GameList.css";
import Search from "./Search";

function GameList({ gameList, selectGame }) {
  // const renderList = gameList.map((game) => {
  //   return <li key={game.id}>{game.name}</li>;
  // });

  return (
    <div>
      <Search
        selectGame={selectGame}
        gameList={gameList}
        placeholder="Search..."
      />
      {/* <ul>{renderList}</ul> */}
    </div>
  );
}

export default GameList;
