import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  GET_TOURS_BEGIN,
  GET_TOURS_SUCCESS,
  GET_TOURS_ERROR,
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  LOGOUT__USER,
} from './actions';
import { INITIAL_STATE } from './appContext';

const reducer = (state, action) => {
  switch (action.type) {
    case DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertType: action.payload.alertType,
        alertText: action.payload.alertText,
      };
    case CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertType: '',
        alertText: '',
      };
    case SETUP_USER_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case SETUP_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: action.payload.alertText,
        user: action.payload.user,
      };
    case SETUP_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      };
    case GET_TOURS_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TOURS_SUCCESS:
      return {
        ...state,
        tours: action.payload.tours,
        isLoading: false,
      };
    case GET_TOURS_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case GET_CURRENT_USER_BEGIN:
      return {
        ...state,
        userLoading: true,
      };
    case GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        userLoading: false,
        user: action.payload.user,
      };
    case LOGOUT__USER:
      return {
        ...INITIAL_STATE,
        userLoading: false,
      };

    default:
      throw new Error(`No such action: ${action.type}`);
  }
};

export default reducer;
