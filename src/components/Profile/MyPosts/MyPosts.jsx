import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.post} />);

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Мои посты</h2>
            <div className={styles.new__post}>
                <textarea className={styles.textarea} cols='80' rows='3' placeholder='Введите свое сообщение'></textarea>
                <button className={styles.button}>New post</button>
            </div>
            {postsElements}
        </div >
    );
}

export default MyPosts;
