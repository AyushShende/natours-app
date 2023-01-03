import { createContext, useContext, useEffect, useReducer } from 'react';
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  GET_TOURS_BEGIN,
  GET_TOURS_ERROR,
  GET_TOURS_SUCCESS,
  LOGOUT__USER,
  SETUP_USER_BEGIN,
  SETUP_USER_ERROR,
  SETUP_USER_SUCCESS,
} from './actions';
import reducer from './reducer';
import axios from 'axios';

export const INITIAL_STATE = {
  showAlert: false,
  alertText: '',
  alertType: '',
  isLoading: false,
  userLoading: true,
  user: null,
  tours: [],
};

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const authFetch = axios.create({
    baseURL: '/api',
  });

  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const displayAlert = ({ alertType, alertText }) => {
    dispatch({ type: DISPLAY_ALERT, payload: { alertType, alertText } });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const res = await authFetch.post(`/users/${endPoint}`, currentUser);
      const user = res?.data.data;
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { alertText, user },
      });
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.message },
      });
    }
    clearAlert();
  };

  const getTours = async () => {
    dispatch({ type: GET_TOURS_BEGIN });
    try {
      const res = await authFetch.get('/tours');
      const tours = res?.data.data;
      dispatch({ type: GET_TOURS_SUCCESS, payload: tours });
    } catch (error) {
      dispatch({ type: GET_TOURS_ERROR });
    }
  };

  const getCurrentUser = async () => {
    dispatch({ type: GET_CURRENT_USER_BEGIN });
    try {
      const res = await authFetch.get('/users/me');
      const user = res?.data.data;
      dispatch({
        type: GET_CURRENT_USER_SUCCESS,
        payload: { user },
      });
    } catch (error) {
      if (error.response.status === 401) return;
      logoutUser();
    }
  };

  const logoutUser = async () => {
    await axios.get('/api/users/logout');
    dispatch({ type: LOGOUT__USER });
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <AppContext.Provider
      value={{ ...state, getTours, displayAlert, setupUser, logoutUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
