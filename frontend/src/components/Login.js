import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/actions/authActions';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import { toast } from 'react-toastify';

const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const navigate = useNavigate(); // Initialize useNavigate for programmatic navigation

  const handleSubmit = async (values) => {
    try {
      await dispatch(login(values));
      // Only navigate to the home page when the login is successful
      navigate('/home');
      toast.success('Login successful');
    } catch (error) {
      // Error handling is already done here, but you can also display the error message
      console.error('Login failed:', error);
      toast.error('Invalid username or password'); 
    }
  };

  return (
    <section className="vh-100 gradient-custom">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
            <div className="card-body p-5 text-center">
              <div className="mb-md-5 mt-md-4 pb-5">
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">Please enter your login and password!</p>
                <Formik
                  initialValues={{ username: '', password: '' }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.username) {
                      errors.username = 'Username is required';
                    }
                    if (!values.password) {
                      errors.password = 'Password is required';
                    }
                    return errors;
                  }}
                  onSubmit={handleSubmit}
                >
                  <Form>
                    <div className="form-outline form-white mb-4">
                      <Field
                        type="text"
                        name="username"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typeEmailX">
                        UserName
                      </label>
                      <ErrorMessage name="username" component="div" className="text-danger" />
                    </div>
                    <div className="form-outline form-white mb-4">
                      <Field
                        type="password"
                        name="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typePasswordX">
                        Password
                      </label>
                      <ErrorMessage name="password" component="div" className="text-danger" />
                    </div>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <button className="btn btn-outline-light btn-lg px-5" type="submit">
                      Login
                    </button>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
export default Login;