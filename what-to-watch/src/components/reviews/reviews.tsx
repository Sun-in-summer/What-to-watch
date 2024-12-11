import { Review } from '../../types/review';

type ReviewsProps = {
    reviews: Review[];
}

function Reviews({ reviews }: ReviewsProps): JSX.Element {
    return (
        <div className='film-card_reviews-col'>
            {reviews.map(({ id, text, author, date, rating }) => (
                <div className="review" key={id}>
                    <blockquote className="review__quote">
                        <p className="review__text">{text}</p>
                        <footer className="review__details">
                            <cite className="review__author">{author}</cite>
                            <time className="review__date" dateTime={new Date(date).toISOString()}>{new Date(date).toLocaleDateString()}</time>
                        </footer>
                    </blockquote>
                    <div className="review__rating">{rating}</div>
                </div>
            ))}
        </div>);
}

export default Reviews;