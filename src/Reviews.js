import "./Reviews.css";
import ReactStars from "react-rating-stars-component";
import Review from "./Review";

function Reviews({ game }) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const renderReviews = game.reviews.map((review) => {
    return <Review key={review.id} review={review} />;
  });

  function submitReview(e) {
    e.preventDefault();
    console.log("tt");
  }

  return (
    <div className="reviewWrapper">
      <div className="formWrapper">
        <form onSubmit={submitReview} className="reviewForm">
          <div className="starsWrapper">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              //   activeColor="rgb(255, 94, 0)"
            />
          </div>

          <input
            type="text"
            placeholder="Leave a comment..."
            className="textEntry searchbar"
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
