import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css';
import image from '../../images/main.jpg';

const Profile = (props) => {
    return (
        <main className={styles.main}>
            <img className={styles.img} src={image} />
            <ProfileInfo />
            <MyPosts posts={props.posts} avatars={props.avatars} addPost={props.addPost} />
        </main>
    );
}

export default Profile;
