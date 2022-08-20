import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <ul className="links">
    <NavLink to="/" className="nav-link">BOOKS</NavLink>
    <NavLink to="/categories" className="nav-link">CATEGORIES</NavLink>
  </ul>
);
export default Navigation;
