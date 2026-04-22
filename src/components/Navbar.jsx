import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="terminal-caret">&gt;_</span>
        <span className="brand-name">srija.dev</span>
      </div>

      <div className="nav-links">
        <NavLink to="/"           className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}>~/home</NavLink>
        <NavLink to="/projects"   className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}>~/projects</NavLink>
        <NavLink to="/experience" className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}>~/experience</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
