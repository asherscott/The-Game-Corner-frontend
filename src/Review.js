import ReactStars from "react-rating-stars-component";
import "./Review.css";
import { useState } from "react";

function Review({ review, reviews, setReviews }) {
  const [likes, setLikes] = useState(review.likes);

  function handleLike(e) {
    const newLike = e.target.name === "like" ? likes + 1 : likes - 1;

    const { ["username"]: username, ...reviewNoUsername } = review;

    const config = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...reviewNoUsername, ...{ likes: newLike } }),
    };

    fetch(`http://localhost:9292/reviews/${review.id}`, config)
      .then((r) => r.json())
      .then((rev) => setLikes(rev.likes));
  }

  const deleteReview = (reviewId) => {
    fetch(`http://localhost:9292/reviews/${reviewId}`, {
      method: 'DELETE',
      headers: { Accept: 'application/json' }
    })

    const newReviews = reviews.filter((review) => review.id !== reviewId)
    setReviews(newReviews)
  }

  return (
    <article>
      <header className="reviewHead">
        <div className="starsWrapper">
          <ReactStars count={5} size={20} edit={false} value={review.rating} />
        </div>
        <h4>{review.username}</h4>
        <span className="date">{review.date}</span>
      </header>

      <p className="comment">{review.comment}</p>
      <div className="comment">
        <span>{likes}</span>
        <button onClick={handleLike} name="like" className="revBtn like">
          /\
        </button>
        <button onClick={handleLike} name="dislike" className="revBtn dislike">
          \/
        </button>
      </div>
      
      <br />
    </article>
  );
}

export default Review;
