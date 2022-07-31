import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>School of Practice</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/auth">Login</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>

          <li>
            <button>Logout</button>
          </li>
          <li>
            <Link to="/NewAccount">Students</Link>
          </li>
          <li>
            <Link to="/NewAccount">Professors</Link>
          </li>
          <li>
            <Link to="/Classes">Classes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
