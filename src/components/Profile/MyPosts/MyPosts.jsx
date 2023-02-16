import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.post} />);

    return (
        <div className={styles.wrapper}>
            <h2>Мои посты</h2>
            <div>Новый пост</div>
            {postsElements}
        </div>
    );
}

export default MyPosts;
