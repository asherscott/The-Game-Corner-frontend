import "./Home.css";
import { useState } from "react";

function Home({ setLoggedIn, setLoggedUser, loggedIn, loggedUser }) {
  const [showInput, setShowInput] = useState(false);
  const [loginInput, setLoginInput] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: loginInput }),
    };

    fetch("http://localhost:9292/users", config)
      .then((r) => r.json())
      .then((user) => {
        setLoggedUser(user);
        setLoggedIn(true);
        setShowInput(false);
      });
  }

  return (
    <div id="background">
      <div id="effect"></div>
      <div className="wrapper">
        <h1 id="title">
          The Game <br /> Corner
        </h1>
      </div>
      {showInput ? (
        <form onSubmit={handleLogin} className="loginWrapper">
          <button className="loginSubmit">Login</button>
          <input
            placeholder="enter username..."
            className="searchbar loginInput"
            value={loginInput}
            name="name"
            required
            onChange={(e) => setLoginInput(e.target.value)}
          />
        </form>
      ) : loggedIn ? (
        <button className="login loggedIn">{loggedUser.name}</button>
      ) : (
        <button onClick={() => setShowInput(!showInput)} className="login">
          Login
        </button>
      )}
    </div>
  );
}

export default Home;
