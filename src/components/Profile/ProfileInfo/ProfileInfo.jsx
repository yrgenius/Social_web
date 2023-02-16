import styles from './ProfileInfo.module.css';
import image from '../../../images/avatars/man.png';

const ProfileInfo = () => {
    return (
        <main className={styles.main}>
            <img className={styles.ava} src={image} alt="avatar" />
            <p className={styles.text}>Description. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum esse, similique, unde at reprehenderit dolorem reiciendis laudantium ipsam perspiciatis sunt asperiores vel ad voluptate veniam fuga odio. Minima, deserunt cumque.</p>
        </main>
    );
}

export default ProfileInfo;
