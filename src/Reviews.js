import "./Reviews.css";
import ReactStars from "react-rating-stars-component";

function Reviews() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

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
          {/* <button className={} type="submit">Comment</button> */}
        </form>
      </div>
    </div>
  );
}

export default Reviews;
