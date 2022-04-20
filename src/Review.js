import ReactStars from "react-rating-stars-component";
import "./Review.css";

function Review({ review }) {
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
      <br />
    </article>
  );
}

export default Review;
