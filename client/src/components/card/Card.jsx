import './Card.css';
import { FiCalendar, FiFlag, FiMapPin, FiStar, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Card = ({ img, data }) => {
  const {
    name,
    difficulty,
    duration,
    summary,
    price,
    startLocation,
    locations,
    maxGroupSize,
    ratingsQuantity,
    _id,
  } = data;

  return (
    <div className="card">
      {/* CARD IMAGE */}
      <div className="card__img__box">
        <img className="img" src={img} alt="" />
      </div>

      {/* CARD CONTENT */}
      <div className="card__content">
        <h3 className="heading__tertiary">{name}</h3>
        <p className="card__text">
          <span>
            {difficulty} {duration}-DAYS TOUR{' '}
          </span>
          {summary}
        </p>
        <div className="card__meta__list">
          <p className="card__meta__item">
            <FiFlag className="card__icon" />
            <span>{locations?.length} stops</span>
          </p>
          <p className="card__meta__item">
            <FiMapPin className="card__icon" />
            <span>{startLocation?.description}</span>
          </p>
          <p className="card__meta__item">
            <FiCalendar className="card__icon" />
            <span>
              {new Date(data.startDates[0]).toLocaleDateString('en-us', {
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </p>
          <p className="card__meta__item">
            <FiUser className="card__icon" />
            <span>{maxGroupSize} people</span>
          </p>
        </div>
      </div>

      {/* CARD CTA */}
      <div className="card__cta">
        <p className="card__review">
          <span>({ratingsQuantity} reviews)</span>
          <span>
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
          </span>
        </p>
        <p className="card__price">
          <span>${price}</span>per person
        </p>
        <Link to={`/tours/${_id}`} state={data} className="btn__r">
          Details
        </Link>
      </div>
    </div>
  );
};
export default Card;
