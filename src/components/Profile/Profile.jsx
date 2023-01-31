import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';

const Profile = () => {
    return (
        <main className={styles.main}>
            <div>
                <img className={styles.img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIJ52TEJj-IDrETYCf6d38-qupU4M2W9M8og&usqp=CAU' />
                <div>
                    ava + description
                </div>
                <MyPosts />
            </div>
        </main>
    );
}

export default Profile;
