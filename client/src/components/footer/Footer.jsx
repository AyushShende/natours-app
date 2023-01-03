import './Footer.css';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import Logo from '../Logo';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <div className="footer__logo__box">
            <Logo />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis sunt
            deserunt tempore minus placeat. Consequatur ducimus aut.
          </p>
        </div>
        <ul className="footer__links">
          <li className="links__item">Contact us</li>
          <li className="links__item">
            <span>
              <FiMail />
            </span>
            <span>ayushshende9@gmail.com</span>
          </li>
          <li className="links__item">
            <span>
              <FiMapPin />
            </span>
            <span>Pune, India</span>
          </li>
          <li className="links__item">
            <span>
              <FiPhone />
            </span>
            <span>+91 88775533</span>
          </li>
        </ul>
        <div className="footer__newsletter">
          <p>Subscribe our newsletter to get updates of new tours!!</p>
          <input
            className="sub__input"
            type="email"
            placeholder="Enter your email"
          />
          <button className="sub__btn">Subscribe</button>
        </div>
      </div>
      <div className="footer__copywright">
        <div className="copywright__left">
          © 2022 Ayush. All rights reserved
        </div>
        <ul className="copywright__right">
          <li>privacy policy</li>
          <li>terms and condition</li>
          <li>FAQ</li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
