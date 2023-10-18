import authService from '../../services/authService';

export const login = (credentials) => async (dispatch) => {
  try {
    const token = await authService.login(credentials.username, credentials.password);
    localStorage.setItem('token', token);
    dispatch({ type: 'LOGIN_SUCCESS', token });
    dispatch({ type: 'CLEAR_ERROR' }); // Clear any previous errors
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error === 'Invalid token') {
      // Handle the specific error message "Invalid token"
      dispatch({ type: 'LOGIN_ERROR', error: 'Invalid username or password' });
    } else {
      // Handle other login errors
      dispatch({ type: 'LOGIN_ERROR', error: 'An error occurred while logging in' });
    }
  }
};

export const logout = () => (dispatch) => {
  authService.logout();
  dispatch({ type: 'LOGOUT' });
};