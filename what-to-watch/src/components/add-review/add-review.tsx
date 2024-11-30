import { ChangeEvent, useState } from 'react';


function AddReviewForm(): JSX.Element {


    const [formData, setFormData] = useState({
        tenStars: false,
        nineStars: false,
        eightStars: false,
        sevenStars: false,
        sixStars: false,
        fiveStars: false,
        fourStars: false,
        threeStars: false,
        twoStars: false,
        oneStar: false,
        rating: 0,
        reviewText: '',
    });

    const fieldChangeHandle = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): void => {
        const { target } = event;
        const { value, name } = target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    };



    return (<div className="add-review">
        <form action="#" className="add-review__form">
            <div className="rating">
                <div className="rating__stars">
                    <input onChange={fieldChangeHandle} className="rating__input" id="star-10" type="radio" name="rating" value="10" checked={!!formData.rating} />
                    <label className="rating__label" htmlFor="star-10">Rating 10</label>

                    <input onChange={fieldChangeHandle} className="rating__input" id="star-9" type="radio" name="rating" value="9" checked={formData.nineStars} />
                    <label className="rating__label" htmlFor="star-9">Rating 9</label>

                    <input onChange={fieldChangeHandle} className="rating__input" id="star-8" type="radio" name="rating" value="8" checked={formData.eightStars} />
                    <label className="rating__label" htmlFor="star-8">Rating 8</label>

                    <input onChange={fieldChangeHandle} className="rating__input" id="star-7" type="radio" name="rating" value="7" checked={formData.sevenStars} />
                    <label className="rating__label" htmlFor="star-7">Rating 7</label>

                    <input onChange={fieldChangeHandle} className="rating__input" id="star-6" type="radio" name="rating" value="6" checked={formData.sixStars} />
                    <label className="rating__label" htmlFor="star-6">Rating 6</label>

                    <input onChange={fieldChangeHandle} className="rating__input" id="star-5" type="radio" name="rating" value="5" checked={formData.fiveStars} />
                    <label className="rating__label" htmlFor="star-5">Rating 5</label>

                    <input onChange={fieldChangeHandle} className="rating__input" id="star-4" type="radio" name="rating" value="4" checked={formData.fourStars} />
                    <label className="rating__label" htmlFor="star-4">Rating 4</label>

                    <input onChange={fieldChangeHandle} className="rating__input" id="star-3" type="radio" name="rating" value="3" checked={formData.threeStars} />
                    <label className="rating__label" htmlFor="star-3">Rating 3</label>

                    <input onChange={fieldChangeHandle} className="rating__input" id="star-2" type="radio" name="rating" value="2" checked={formData.twoStars} />
                    <label className="rating__label" htmlFor="star-2">Rating 2</label>

                    <input onChange={fieldChangeHandle} className="rating__input" id="star-1" type="radio" name="rating" value="1" checked={formData.oneStar} />
                    <label className="rating__label" htmlFor="star-1">Rating 1</label>
                </div>
            </div>

            <div className="add-review__text">
                <textarea onChange={fieldChangeHandle} className="add-review__textarea" name="reviewText" id="review-text" placeholder="Review text" value={formData.reviewText}></textarea>
                <div className="add-review__submit">
                    <button className="add-review__btn" type="submit" disabled={false}>Post</button>
                </div>

            </div>
        </form>
    </div>);
}

export default AddReviewForm;