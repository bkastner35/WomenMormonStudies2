
import { Link } from 'react-router-dom';

import classes from './MainNav.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Women In Mormon Studies</div>
      <nav>
        <ul>
          <li>
            <Link id ="Home page"to='/'>Home</Link>
          </li>
          <li>
            <Link id = "Vision page"to='/vision'>Our Vision</Link>
          </li>
          <li>
            <Link id ="Register page"to='/register'>Register as an Expert</Link>
          </li>
          <li>
            <Link id ="Find expert page"to='/search'>Find an Expert</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;