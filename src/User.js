import Review from "./Review";

function User({ user }) {
  // shows info about a user; reviews, games, etc (all optional)
  const renderReviews = user.reviews.map((review) => {
    return <Review key={review.id} review={review} selectUser={user.id} />;
  });
  return <div>{renderReviews}</div>;
}

export default User;
