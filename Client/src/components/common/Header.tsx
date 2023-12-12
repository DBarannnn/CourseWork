import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="left-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <div className="logo">Todo LoadTracker</div>
      <div className="right-nav">
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/logout">Log Out</NavLink>
      </div>
    </header>
  );
};

export default Header;
