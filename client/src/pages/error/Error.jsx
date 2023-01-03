import { Link } from 'react-router-dom';
import img from '../../assets/404.svg';
import './Error.css';

const Error = () => {
  return (
    <div className="error__page">
      <img src={img} alt="not-found" />
      <h3 className="error__title">Ooh! Page not found</h3>
      <p className="error__text">
        We can't seem to find the page you're looking for.
      </p>
      <Link to="/">Back home</Link>
    </div>
  );
};
export default Error;
