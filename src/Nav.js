import "./Nav.css";
import Settings from "./Settings";

function Nav({ selected, setSelected, game, gameList, setGenre, setPlatform }) {
  return (
    <div className="navWrapper">
      <nav>
        <span
          onClick={() => setSelected(1)}
          className={`link ${selected === 1 ? "selected" : ""}`}
        >
          Game List
        </span>

        <span className={`link ${selected === 2 ? "selected" : "settingLink"}`}>
          Settings
          <Settings
            gameList={gameList}
            setGenre={setGenre}
            setPlatform={setPlatform}
          />
        </span>

        <span
          onClick={() => setSelected(3)}
          className={`link ${selected === 3 ? "selected" : ""}`}
        >
          Game Form
        </span>

        {game ? (
          <span
            onClick={() => setSelected(4)}
            className={`link ${selected === 4 ? "selected" : ""}`}
          >
            {game.name}
          </span>
        ) : null}

        <span
          onClick={() => setSelected(5)}
          className={`link ${selected === 5 ? "selected" : ""}`}
        >
          (username here)
        </span>
      </nav>
    </div>
  );
}

export default Nav;
