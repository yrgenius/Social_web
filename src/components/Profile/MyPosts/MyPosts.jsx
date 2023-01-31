import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>New posts</div>
            <Post message='Hi, how are you?' />
            <Post message='it my first post' />
            <Post message='I can use props, its cool' />
        </div>
    );
}

export default MyPosts;
