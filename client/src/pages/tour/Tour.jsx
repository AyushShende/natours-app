import './Tour.css';
import { Cta, Footer, Navbar, LoadMap } from '../../components';
import { tour3Cover, tour3__1, tour3__2, tour3__3, user1 } from '../../assets';
import {
  FiClock,
  FiMapPin,
  FiCalendar,
  FiTrendingUp,
  FiUser,
  FiStar,
} from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import Field from '../../components/field/Field';
import moment from 'moment';

const Tour = () => {
  const { state } = useLocation();
  const {
    name,
    difficulty,
    duration,
    startLocation,
    maxGroupSize,
    ratingsAverage,
    guides,
    startDates,
    locations,
  } = state;

  const date = moment(startDates[0]).format('MMMM, YYYY');
  return (
    <div>
      <svg
        className="blob"
        viewBox="50 50 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#3D8361"
          d="M50.5,-47.4C66.5,-34.5,81.2,-17.3,78.9,-2.3C76.6,12.7,57.4,25.4,41.4,40.3C25.4,55.2,12.7,72.2,-2.3,74.5C-17.2,76.7,-34.5,64.2,-46.5,49.3C-58.6,34.5,-65.5,17.2,-67,-1.5C-68.6,-20.3,-64.7,-40.6,-52.7,-53.5C-40.6,-66.3,-20.3,-71.8,-1.5,-70.2C17.3,-68.7,34.5,-60.2,50.5,-47.4Z"
          transform="translate(90 70)"
        />
      </svg>
      <Navbar variant="dark" />
      <section className="section__tour__hero">
        <div className="tour__content">
          <h1 style={{ color: '#EEF2E6' }} className="heading__primary">
            {name}
          </h1>
          <div className="tour__text">
            <p>
              <FiClock />
              <span>{duration} Days</span>
            </p>
            <p>
              <FiMapPin />
              <span> {startLocation?.description}</span>
            </p>
          </div>
        </div>
        <div className="tour__img__box">
          <img className="img" src={tour3Cover} alt="" />
        </div>
      </section>
      <section className="section__tour__info">
        <div className="tour__stats">
          <div className="info__facts">
            <h3 className="heading__tertiary">Quick Facts</h3>
            <Field icon={<FiCalendar />} title="Next Date" text={date} />
            <Field
              icon={<FiTrendingUp />}
              title="Difficulty"
              text={difficulty}
            />
            <Field icon={<FiUser />} title="Participants" text={maxGroupSize} />
            <Field
              icon={<FiStar />}
              title="Rating"
              text={`${ratingsAverage}/5`}
            />
          </div>
          <div className="info__guides">
            <h3 className="heading__tertiary">Your Tour Guides</h3>
            {guides?.map((guide) => {
              return (
                <div key={guide?._id} className="guide__field">
                  <div className="field__guide__img__box">
                    <img className="img" src={user1} alt="" />
                  </div>
                  <span className="field__title">{guide?.role}</span>
                  <span>{guide?.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="tour__gallery">
          <div className="tour__gallery__img__box">
            <img className="img" src={tour3__1} alt="" />
          </div>
          <div className="tour__gallery__img__box">
            <img className="img" src={tour3__2} alt="" />
          </div>
          <div className="tour__gallery__img__box">
            <img className="img" src={tour3__3} alt="" />
          </div>
        </div>
      </section>

      <section className="section__map">
        <LoadMap locations={locations} />
      </section>
      <Cta />
      <Footer />
    </div>
  );
};
export default Tour;
