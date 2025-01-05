import { Review, ServerReview } from '../types/review';

function adaptReviewToFrontend(serverReview: ServerReview): Review {
  return {
    id: Number(serverReview.id),
    text: serverReview.comment,
    rating: serverReview.rating,
    author: serverReview.user.name,
    date: serverReview.date
  };
}


export default adaptReviewToFrontend;