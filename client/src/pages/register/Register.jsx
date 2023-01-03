import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormRow, Alert } from '../../components';
import { useAppContext } from '../../context/appContext';
import './Register.css';

const Register = () => {
  const { isLoading, user, displayAlert, showAlert, setupUser } =
    useAppContext();

  const navigate = useNavigate();

  const initialState = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    isMember: true,
  };

  const [credentials, setCredentials] = useState(initialState);

  const toggleMember = () => {
    setCredentials({ ...credentials, isMember: !credentials.isMember });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember, passwordConfirm } = credentials;
    if (
      !email ||
      !password ||
      (!isMember && !name) ||
      (!isMember && !passwordConfirm)
    ) {
      displayAlert({
        alertType: 'danger',
        alertText: 'Please provide all values',
      });
      return;
    }

    if (!isMember && password !== passwordConfirm) {
      displayAlert({
        alertType: 'danger',
        alertText: 'Passwords do not match',
      });
      return;
    }

    const currentUser = { name, email, password, passwordConfirm };

    if (isMember) {
      setupUser({
        currentUser,
        endPoint: 'login',
        alertText: 'Login Successfull, Redirecting...',
      });
    } else {
      setupUser({
        currentUser,
        endPoint: 'signup',
        alertText: 'User created, Redirecting...',
      });
    }
  };

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/about');
      }, 1000);
    }
  }, [user, navigate]);

  return (
    <section className="section__register">
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="form__title">
          {credentials.isMember ? 'Login' : 'Register'}
        </h3>
        {showAlert && <Alert />}
        {!credentials.isMember && (
          <FormRow
            type="text"
            value={credentials.name}
            name="name"
            handleChange={handleChange}
          />
        )}
        <FormRow
          type="email"
          value={credentials.email}
          name="email"
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          value={credentials.password}
          name="password"
          handleChange={handleChange}
        />
        {!credentials.isMember && (
          <FormRow
            type="password"
            value={credentials.passwordConfirm}
            name="passwordConfirm"
            handleChange={handleChange}
          />
        )}

        <button disabled={isLoading} type="submit" className="form__btn">
          Submit
        </button>
        <p>
          {credentials.isMember ? 'Not a member yet?' : 'Already a member?'}{' '}
          <button type="button" onClick={toggleMember} className="form__link">
            {credentials.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </section>
  );
};
export default Register;
