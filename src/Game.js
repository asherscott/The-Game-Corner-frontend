import { useState, useEffect } from "react";
import "./Game.css";
import Nav from "./Nav";

import GameList from "./GameList";
import Settings from "./Settings";
import GameForm from "./GameForm";
import DisplayGame from "./DisplayGame";
import User from "./User";
import Search from "./Search";

function Game() {
  const [gameList, setGameList] = useState([]);
  const [selected, setSelected] = useState(1);

  useEffect(() => {
    fetch("http://localhost:9292/")
      .then((r) => r.json())
      .then((data) => setGameList(data));
  }, []);

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
        <Nav selected={selected} setSelected={setSelected} />
        <div className="container">
          {selected === 1 ? <GameList gameList={gameList} /> : null}
          {selected === 2 ? <Settings /> : null}
          {selected === 3 ? <GameForm /> : null}
          {selected === 4 ? <DisplayGame /> : null}
          {selected === 5 ? <User /> : null}
        </div>
      </div>
    </section>
  );
}

export default Game;
