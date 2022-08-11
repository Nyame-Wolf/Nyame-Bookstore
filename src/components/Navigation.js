import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <ul className="links">
    <NavLink to="/">Books</NavLink>
    <NavLink to="/categories">Categories</NavLink>
  </ul>
);
export default Navigation;
