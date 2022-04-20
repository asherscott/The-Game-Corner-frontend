import { useState } from "react";
import "./Search.css";

function Search({ placeholder, gameList, selectGame }) {
  const [search, setSearch] = useState("");
  const [previewImg, setPreviewImg] = useState(null);

  return (
    <div className="gameInfo">
      <div className="search-bar">
        <input
          className="searchbar"
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
              <li
                // setPreviewImg() will eventually be set to an img url for a game, once it's added to the db
                onMouseOver={() => setPreviewImg(game.name)}
                onMouseOut={() => setPreviewImg(null)}
                onClick={() => selectGame(game)}
                key={game.id}
                className="gameName"
              >
                {game.name}
              </li>
            ))}
        </ul>
      </div>
      {previewImg ? (
        <img
          className="gameImg previewImg"
          src="https://cohenwoodworking.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg"
          // src={previewImg}
        />
      ) : null}
    </div>
  );
}

export default Search;
