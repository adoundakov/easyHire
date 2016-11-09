export const CREATE_REVIEW = "CREATE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const createReview = review => ({
  type: CREATE_REVIEW,
  review
});

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
