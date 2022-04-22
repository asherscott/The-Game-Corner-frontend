import { useState, useEffect } from "react";
import "./Game.css";
import Nav from "./Nav";

import GameList from "./GameList";
// import Settings from "./Settings";
import GameForm from "./GameForm";
import DisplayGame from "./DisplayGame";
import User from "./User";
import Reviews from "./Reviews";

function Game({ loggedIn, loggedUser }) {
  const [gameList, setGameList] = useState([]);
  const [selected, setSelected] = useState(1);
  const [game, setGame] = useState(null);
  const [user, setUser] = useState(null);
  const [showGame, setShowGame] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [genre, setGenre] = useState("");
  const [platform, setPlatform] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/")
      .then((r) => r.json())
      .then((games) => {
        setGameList(games);
      });
  }, []);

  const selectGame = (game) => {
    setGame(game);
    setShowGame(true);
    setSelected(4);
  };

  const selectUser = (user) => {
    fetch(`http://localhost:9292/users/${user}`)
      .then((r) => r.json())
      .then((u) => {
        setUser(u);
        setShowUser(true);
        setSelected(5);
      });
  };

  const filterGames = gameList.filter((game) => {
    if (genre && platform) {
      return game.genre === genre && game.platform === platform;
    } else if (genre) {
      return game.genre === genre;
    } else if (platform) {
      return game.platform === platform;
    }
  });

  return (
    <section id="gameSection">
      <div className="wrapper">
        <div id="btnWrapper">
          <a href="#gameTitle">
            <button id="downBtn">ᐯ</button>
          </a>
        </div>
      </div>

      <div className="wrapper">
        <h2 id="gameTitle">Games</h2>
      </div>

      <div className="gameWrapper">
        <Nav
          selected={selected}
          setSelected={setSelected}
          game={game}
          user={user}
          gameList={gameList}
          setGenre={setGenre}
          setPlatform={setPlatform}
        />
        <div className="container">
          {selected === 1 ? (
            <GameList
              gameList={filterGames.length === 0 ? gameList : filterGames}
              selectGame={selectGame}
            />
          ) : null}
          {/* {selected === 2 ? <Settings  gameList={gameList} setGenre={setGenre} setPlatform={setPlatform} /> : null} */}
          {selected === 3 ? (
            <GameForm
              gameList={gameList}
              setGameList={setGameList}
              setSelected={setSelected}
            />
          ) : null}
          {selected === 4 ? (
            <DisplayGame
              gameList={gameList}
              setGameList={setGameList}
              setSelected={setSelected}
              setGame={setGame}
              game={game}
            />
          ) : null}
          {selected === 4 ? (
            <Reviews
              game={game}
              selectUser={selectUser}
              loggedIn={loggedIn}
              loggedUser={loggedUser}
            />
          ) : null}
          {selected === 5 ? <User user={user} /> : null}
        </div>
      </div>
    </section>
  );
}

export default Game;
