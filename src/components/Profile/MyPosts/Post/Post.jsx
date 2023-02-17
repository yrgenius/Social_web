import styles from './Post.module.css';
import avatar from '../../../../images/avatars/man.png';

const Post = (props) => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.img} src={avatar} alt='avatar' />
            <div className={styles.post}>{props.message}</div>
        </div>
    );
}

export default Post;
