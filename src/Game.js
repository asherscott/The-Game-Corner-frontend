import GameList from "./GameList";
import Nav from "./Nav";
import DisplayGame from "./DisplayGame";
import { useState, useEffect } from "react";
import "./Game.css";
import Search from "./Search";

function Game() {
  // Displays the list of games and a section for additional info on a selected game

  const [gameList, setGameList] = useState([]);

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
            <button>ᐯ</button>
          </a>
        </div>
      </div>

      <div className="wrapper">
        <h2 id="gameTitle">Games</h2>
      </div>

      <div className="gameWrapper">
        <Nav />
        <Search gameList={gameList} placeholder="Search..." />
        <div className="container">
          <GameList gameList={gameList} />

          <DisplayGame />
        </div>
      </div>
    </section>
  );
}

export default Game;
