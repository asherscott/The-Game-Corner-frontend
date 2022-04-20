import "./Reviews.css";
import ReactStars from "react-rating-stars-component";
import Review from "./Review";
import { useState } from "react";

function Reviews({ game }) {
  const [newReview, setNewReview] = useState({});
  const [reviews, setReviews] = useState(game.reviews);

  const renderReviews = reviews.map((review) => {
    return <Review key={review.id} review={review} />;
  });

  function handleNewReview(object) {
    let current = new Date();
    let cDate =
      current.getFullYear() +
      "-" +
      (current.getMonth() + 1) +
      "-" +
      current.getDate();

    setNewReview((prevState) => ({
      ...prevState,
      ...object,
      ...{ game_id: game.id },
      ...{ date: cDate },
      ...{ user_id: 0 },
    }));
  }

  function submitReview(e) {
    e.preventDefault();

    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    };

    fetch("http://localhost:9292/reviews", config)
      .then((r) => r.json())
      .then((rev) => {
        setReviews((prevState) => [...prevState, rev]);
      });
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
          />
          <button type="submit">Comment</button>
          {/* change button clickable/notClickable class if form has been filled in */}
          {/* <button className={} type="submit">Comment</button> */}
        </form>
      </div>

      {renderReviews}
    </div>
  );
}

export default Reviews;
