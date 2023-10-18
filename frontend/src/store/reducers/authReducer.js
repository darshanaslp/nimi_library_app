const initialState = {
  token: localStorage.getItem('token'),
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, token: action.token, error: null };
    case 'LOGIN_ERROR':
      return { ...state, error: action.error };
    case 'CLEAR_ERROR':
      return { ...state, error: null }; // Clear the error when needed
    case 'LOGOUT':
      return { ...state, token: null, error: null };
    default:
      return state;
  }
};

export default authReducer;