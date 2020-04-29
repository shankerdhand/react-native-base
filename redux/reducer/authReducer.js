import {login} from '../actions/authAction';

// Initial State
const initialState = {
  user: undefined,
  loading: false,
};

// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login
    case 'LOGIN': {
      return {
        ...state,
        user: action.user,
      };
    }
    // LOGOUT
    case 'LOGOUT': {
      return {
        ...state,
        user: action.user,
      };
    }
    // LOADING
    case 'LOADING': {
      return {
        ...state,
        loading: action.loading,
      };
    }

    // Default
    default: {
      return state;
    }
  }
};

/*
 *@createUser a dispatch function to create a user
 *@return promise of login result and error if applicable
 */
exports.createUser = payload => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch(login({}));
  });
};

// Exports
export default authReducer;
