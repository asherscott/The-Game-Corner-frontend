import "./Nav.css";

function Nav({ selected, setSelected }) {
  return (
    <div className="navWrapper">
      <nav>
        <span
          onClick={() => setSelected(1)}
          className={`link ${selected === 1 ? "selected" : ""}`}
        >
          Game List
        </span>
        <span
          onClick={() => setSelected(2)}
          className={`link ${selected === 2 ? "selected" : ""}`}
        >
          Settings
        </span>
        <span
          onClick={() => setSelected(3)}
          className={`link ${selected === 3 ? "selected" : ""}`}
        >
          Game Form
        </span>
        <span
          onClick={() => setSelected(4)}
          className={`link ${selected === 4 ? "selected" : ""}`}
        >
          (Game title here)
        </span>
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
