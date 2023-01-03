import './Cta.css';
import { cta } from '../../assets';

const Cta = () => {
  return (
    <div className="cta">
      <div className="cta__img__box">
        <img className="img" src={cta} alt="" />
      </div>
      <div className="cta__content">
        <h2 className="heading__secondary">What are you waiting for?</h2>
        <p className="cta__text">
          10 days, 1 adventure, infinite memories. Make it yours, today!
        </p>
        <button className="btn">Book Tour Now</button>
      </div>
    </div>
  );
};
export default Cta;
