import { useState } from 'react';
import { Review } from '../../types/review';
import Reviews from '../reviews/reviews';
import { DetailsType, OverviewType } from '../../types/film';
import Details from '../details/details';
import Overview from '../overview/overview';

type TabsProps = {
    overview: OverviewType,
    details: DetailsType,
    reviews: Review[],
}

function Tabs({ overview, details, reviews }: TabsProps): JSX.Element {

    const [activeTab, setActiveTab] = useState('overview');
    return (
        <div>
            <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                    <li className={`film-nav__item ${activeTab === 'overview' ? 'film-nav__item--active' : ''} `}>
                        <button className="film-nav__link" onClick={() => setActiveTab('overview')}>Overview</button>
                    </li>
                    <li className={`film-nav__item ${activeTab === 'details' ? 'film-nav__item--active' : ''} `}>
                        <button className="film-nav__link" onClick={() => setActiveTab('details')}>Details</button>
                    </li>
                    <li className={`film-nav__item ${activeTab === 'reviews' ? 'film-nav__item--active' : ''} `}>
                        <button className="film-nav__link" onClick={() => setActiveTab('reviews')}>Reviews</button>
                    </li>
                </ul>
            </nav>
            {activeTab === 'reviews' && <Reviews reviews={reviews} />}
            {activeTab === 'overview' && <Overview overview={overview} />}
            {activeTab === 'details' && <Details details={details} />}

        </div>

    );
}

export default Tabs;