import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>New posts</div>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default MyPosts;
