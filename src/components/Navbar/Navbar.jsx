import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.AppNav}>
      <ul className={`${styles.list} ${styles.ul}`}>
        <li><NavLink className={nav => nav.isActive ? styles.active : styles.item} to='/profile'>Profile</NavLink></li>
        <li><NavLink className={nav => nav.isActive ? styles.active : styles.item} to='/dialogs'>Messages</NavLink></li>
        <li><NavLink className={nav => nav.isActive ? styles.active : styles.item} to='#'>Music</NavLink></li>
        <li><NavLink className={nav => nav.isActive ? styles.active : styles.item} to='#'>Settings</NavLink></li>
        <li><NavLink className={nav => nav.isActive ? styles.active : styles.item} to='#'>News</NavLink></li>
      </ul>
    </nav >
  );
}

export default Navbar;