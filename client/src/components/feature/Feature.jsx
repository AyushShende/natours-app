import './Feature.css';
const Feature = ({ img, title, text }) => {
  return (
    <div className="feature">
      <div className="feature__img__box">
        <img className="img" src={img} alt="" />
      </div>
      <p className="feature__title">{title}</p>
      <p className="feature__text">{text}</p>
    </div>
  );
};
export default Feature;
