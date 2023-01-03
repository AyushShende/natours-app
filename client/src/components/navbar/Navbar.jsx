import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import Logo from '../Logo';
import './Navbar.css';
import { user1 } from '../../assets';

const Navbar = ({ variant }) => {
  const { user, logoutUser } = useAppContext();
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  const handleLogout = () => {
    logoutUser();
    navigate('/register');
  };
  return (
    <>
      <nav className={`nav ${variant ? variant : ''}`}>
        <Link to="/" className="logo">
          <Logo />
        </Link>

        {!user ? (
          <Link to="/register">Login</Link>
        ) : (
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="user__btn"
            type="button"
          >
            <div className="user__img__box">
              <img className="img" src={user1} alt="" />
            </div>
            {user?.name?.split(' ').slice(0, -1).join(' ')}
          </button>
        )}
        {showOptions && (
          <div className="options">
            <Link to="/about" className="option_btn">
              Profile
            </Link>
            <button type="button" onClick={handleLogout} className="option_btn">
              Logout
            </button>
          </div>
        )}
      </nav>
    </>
  );
};
export default Navbar;
