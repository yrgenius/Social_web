import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.AppNav}>
      <ul className={`${styles.list} ${styles.ul}`}>
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