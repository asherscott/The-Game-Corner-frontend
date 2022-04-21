import { useState } from "react";
import "./GameForm.css";

function GameForm({ gameList, setGameList,setSelected}) {
  const [previewImage, setPreviewImage] = useState("");

  const [form, setForm] = useState({
    name: "",
    genre: "",
    developer: "",
    platform: "",
    description: "",
    release: "",
    image: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const { name, genre, developer, platform, description, release, image } =
      form;
    const newGame = {
      name,
      genre,
      developer,
      platform,
      description,
      release,
    }
  //   if (image)
  //     newGame.image = image
  // createGame(newGame).then(data => setGameList([...gameList, data])).then(setSelected(1))
  

    //   image,
    // };

    if (newGame.image) {
      createGame(newGame).then((data) => setGameList([...gameList, data])).then(setSelected(1));
    } else {
      const { ["image"]: noImg, ...newGameNoImg } = newGame;

      createGame(newGameNoImg).then((data) => setGameList([...gameList, data])).then(setSelected(1));
    }
  }

  async function createGame(gameBody) {
    const data = await fetch(`http://localhost:9292/games`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(gameBody)
      })
      
      return data.json()
      
  }

  return (
    <div className="gameFormWrapper">
      <form actions="/posts" method="post" onSubmit={handleSubmit}>
        <fieldset>
          <label className="formEntry req">
            Game Name:
            <input
              className="textEntry gameEntry"
              required
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              name="name"
            />
          </label>
          <label className="formEntry">
            Genre:
            <input
              className="textEntry gameEntry"
              genre="genre"
              onChange={(e) => setForm({ ...form, genre: e.target.value })}
            />
          </label>

          <label className="formEntry">
            Platform:
            <input
              className="textEntry gameEntry"
              platform="platform"
              onChange={(e) => setForm({ ...form, platform: e.target.value })}
            />
          </label>
          <label className="formEntry">
            Release:
            <input
              className="textEntry gameEntry"
              release="release"
              onChange={(e) => setForm({ ...form, release: e.target.value })}
            />
          </label>
          <label className="formEntry">
            Developer:
            <input
              className="textEntry gameEntry"
              developer="developer"
              onChange={(e) => setForm({ ...form, developer: e.target.value })}
            />
          </label>
          <label className="formEntry req">
            Description:
            <input
              className="textEntry gameEntry"
              required
              description="description"
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
          </label>
          <label className="formEntry">
            Image:
            <input
              className="textEntry gameEntry"
              image="image"
              onChange={(e) => {
                setPreviewImage(e.target.value);
                setForm({ ...form, image: e.target.value });
              }}
            />
          </label>
        </fieldset>
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
      <img
        className="gameImg previewImg"
        src={
          previewImage
            ? previewImage
            : "https://cohenwoodworking.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg"
        }
      />
    </div>
  );
}

export default GameForm;
