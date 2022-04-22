import "./Reviews.css";
import ReactStars from "react-rating-stars-component";
import Review from "./Review";
import { useState } from "react";

function Reviews({ game, selectUser, loggedIn, loggedUser, setGame }) {
  const [newReview, setNewReview] = useState({});
  const [reviews, setReviews] = useState(game.reviews);

  const renderReviews = reviews.map((review) => {
    return <Review key={review.id} review={review} selectUser={selectUser} />;
  });

  function handleNewReview(object) {
    let current = new Date();
    let cDate =
      current.getFullYear() +
      "-" +
      (current.getMonth() + 1) +
      "-" +
      current.getDate();

    loggedIn
      ? setNewReview((prevState) => ({
          ...prevState,
          ...object,
          ...{ game_id: game.id },
          ...{ date: cDate },
          ...{ user_id: loggedUser.id },
        }))
      : setNewReview((prevState) => ({
          ...prevState,
          ...object,
          ...{ game_id: game.id },
          ...{ date: cDate },
          ...{ user_id: 1 },
        }));
  }

  function submitReview(e) {
    e.preventDefault();
    if (newReview.rating) {
      const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      };

      fetch("http://localhost:9292/reviews", config)
        .then((r) => r.json())
        .then((rev) => {
          // setReviews((prevState) => [...prevState, rev]);
          const updateGame = { ...game };
          updateGame.reviews.push(rev);
          setGame(updateGame);
        });
    } else {
      alert("please add a rating");
    }
  }

  return (
    <div className="reviewWrapper">
      <div className="formWrapper">
        <form onSubmit={submitReview} className="reviewForm">
          <div className="starsWrapper">
            <ReactStars
              count={5}
              onChange={(rating) => handleNewReview({ rating: rating })}
              size={24}
            />
          </div>

          <input
            type="text"
            placeholder="Leave a comment..."
            className="textEntry searchbar"
            onChange={(e) =>
              handleNewReview({ [e.target.name]: e.target.value })
            }
            name="comment"
            required
          />
          <button className="submitBtn" type="submit">
            Comment
          </button>
        </form>
      </div>

      {renderReviews}
    </div>
  );
}

export default Reviews;
