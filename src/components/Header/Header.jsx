import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.img} src='https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-a-design_460848-8717.jpg?w=1380&t=st=1674735601~exp=1674736201~hmac=099df9ba6ab9acedf631627551935a6b0814f691876c90c4a257a9e20cd20010' />
        </header>
    );
}

export default Header;
