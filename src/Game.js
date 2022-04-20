import { useState, useEffect } from "react";
import "./Game.css";
import Nav from "./Nav";

import GameList from "./GameList";
import Settings from "./Settings";
import GameForm from "./GameForm";
import DisplayGame from "./DisplayGame";
import User from "./User";
import Reviews from "./Reviews";

function Game() {
  const [gameList, setGameList] = useState([]);
  const [selected, setSelected] = useState(1);
  const [game, setGame] = useState(null);
  const [showGame, setShowGame] = useState(false);

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
        <Nav selected={selected} setSelected={setSelected} game={game} />
        <div className="container">
          {selected === 1 ? (
            <GameList gameList={gameList} selectGame={selectGame} />
          ) : null}
          {selected === 2 ? <Settings /> : null}
          {selected === 3 ? <GameForm /> : null}
          {selected === 4 ? <DisplayGame game={game} /> : null}
          {selected === 4 ? <Reviews /> : null}
          {selected === 5 ? <User /> : null}
        </div>
      </div>
    </section>
  );
}

export default Game;
