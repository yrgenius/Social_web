import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.AppNav}>
      <ul className={`${styles.list} ${styles.ul}`}>
        <li><NavLink className={nav => nav.isActive ? styles.active : styles.item} to='/profile'>Профиль</NavLink></li>
        <li><NavLink className={nav => nav.isActive ? styles.active : styles.item} to='/dialogs'>Сообщения</NavLink></li>
        <li><NavLink className={nav => nav.isActive ? styles.active : styles.item} to='#'>Новости</NavLink></li>
        <li><NavLink className={nav => nav.isActive ? styles.active : styles.item} to='#'>Музыка</NavLink></li>
        <li><NavLink className={nav => nav.isActive ? styles.active : styles.item} to='#'>Настройки</NavLink></li>
      </ul>
    </nav >
  );
}

export default Navbar;