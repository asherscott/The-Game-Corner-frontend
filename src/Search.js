import { useState } from "react";
import "./Search.css";

function Search({ placeholder, gameList }) {
  const [search, setSearch] = useState("");
  // console.log (search)

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="searchGameList">
        {gameList
          .filter((game) =>
            game.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((game) => (
            <li className="gameName">{game.name}</li>
          ))}
      </ul>
    </div>
  );
}

export default Search;
