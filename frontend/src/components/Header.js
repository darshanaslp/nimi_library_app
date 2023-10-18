import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/authActions';
import { useNavigate } from 'react-router-dom';

//header page
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //logout button funtion
  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav id="scanfcode" className="navbar navbar-expand-lg nav-header">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/home" className="navbar-brand" id="logo">
            Library App
          </Link>
        </div>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/home" className="nav-link text-white">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/search" className="nav-link text-white">
              Search
            </Link>
          </li>
        </ul>
      </div>
      <button onClick={handleLogout} className="btn btn-danger ml-auto">
        Logout
      </button>
    </nav>

  );
};

export default Header;