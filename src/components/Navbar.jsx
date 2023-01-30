import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.AppNav}>
      <ul className={`${classes.list} ${classes.ul}`}>
        <li><a href='#'>Messages</a></li>
        <li><a href='#'>Profile</a></li>
        <li><a href='#'>News</a></li>
        <li><a href='#'>Music</a></li>
        <li><a href='#'>Settings</a></li>
      </ul>
    </nav >
  );
}

export default Navbar;