import "./GameList.css";
import Search from "./Search";

function GameList({ gameList, selectGame }) {
  return (
    <div>
      <Search
        selectGame={selectGame}
        gameList={gameList}
        placeholder="Search..."
      />
    </div>
  );
}

export default GameList;
