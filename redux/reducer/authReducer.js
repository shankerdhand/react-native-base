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

    case 'LOGOUT': {
      return {
        ...state,
        user: action.user,
      };
    }

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

exports.createUser = payload => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch(login(records[0]._rawJson));
  });
};

// Exports
export default authReducer;
