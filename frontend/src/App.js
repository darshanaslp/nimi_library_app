import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import { Provider } from 'react-redux';
import store from './store/store';
import Login from './components/Login';
import Home from './components/Home';
import Search from './components/Search';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;