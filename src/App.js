import React from 'react';
import { Routes, Route } from 'react-router-dom';
import userIcon from './assets/user.png';
import BookList from './components/BookList';
import Categories from './components/Categories';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <div className="container">
        <div className="heading">
          <h1 className="book-heading">Bookstore CMS</h1>
          <Navigation className="link-items" />
          <img src={userIcon} alt="userIcon" className="icon" />
        </div>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
