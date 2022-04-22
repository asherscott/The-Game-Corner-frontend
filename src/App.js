import "./App.css";
import Home from "./Home";
import Game from "./Game";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState({});

  return (
    <div>
      <Home
        setLoggedIn={setLoggedIn}
        setLoggedUser={setLoggedUser}
        loggedIn={loggedIn}
        loggedUser={loggedUser}
      />
      <Game loggedIn={loggedIn} loggedUser={loggedUser} />
    </div>
  );
}

export default App;
