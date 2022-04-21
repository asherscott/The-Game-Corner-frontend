import { useState } from "react";
import "./Settings.css";

function Settings({ gameList, setGenre, setPlatform }) {
  const genres = [];
  const platforms = [];

  let searchGenreList = "";
  let searchPlatformList = "";

  searchGenreList = gameList
    .filter((game) => game.genre)
    .map((game) => <li className="gameGenre">{game.name}</li>);

  gameList.forEach((game) => {
    if (!genres.includes(game.genre)) genres.push(game.genre);
  });

  const handleChangeGenre = (e) => {
    setGenre(e.target.value);
  };
  const handleChangePlatform = (e) => {
    setPlatform(e.target.value);
  };

  searchPlatformList = gameList
    .filter((game) => game.platform)
    .map((game) => <li className="gamePlatform">{game.name}</li>);

  gameList.forEach((game) => {
    if (!platforms.includes(game.platform)) platforms.push(game.platform);
  });

  return (
    <div>
      <select onChange={handleChangeGenre}>
        <option className="saveState" value="">
          Genre
        </option>
        {genres.map((genre) => (
          <option key={genre} className="options" value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <select onChange={handleChangePlatform}>
        <option className="saveState" value="">
          Platform
        </option>
        {platforms.map((platform) => (
          <option key={platform} className="options" value={platform}>
            {platform}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Settings;
