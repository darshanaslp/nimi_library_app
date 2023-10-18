// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import jest-dom matchers

import Login from './Login'; // Import your Login component

test('renders login form', () => {
  render(<Login />);
  
  // Ensure that the login form elements are present on the page
  const usernameInput = screen.getByLabelText('Username');
  const passwordInput = screen.getByLabelText('Password');
  const submitButton = screen.getByText('Login');

  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('validates the login form', () => {
  render(<Login />);
  
  // Attempt to submit the form without entering data
  fireEvent.click(screen.getByText('Login'));
  
  // Ensure that validation errors are displayed
  const usernameError = screen.getByText('Username is required');
  const passwordError = screen.getByText('Password is required');

  expect(usernameError).toBeInTheDocument();
  expect(passwordError).toBeInTheDocument();
});

test('submits the login form', () => {
  const loginMock = jest.fn(); // Mock the login function
  render(<Login onSubmit={loginMock} />);
  
  // Enter valid credentials and submit the form
  fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'admin' } });
  fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'admin' } });
  fireEvent.click(screen.getByText('Login'));
  
  // Ensure that the login function was called
  expect(loginMock).toHaveBeenCalledWith({ username: 'admin', password: 'admin' });
});
