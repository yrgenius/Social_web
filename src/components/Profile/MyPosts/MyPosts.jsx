import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        { id: 1, post: 'Hi, how are you?' },
        { id: 2, post: 'It\'s my first post' },
        { id: 3, post: 'I can use props, its cool' },
    ];

    return (
        <div>
            <h2>My posts</h2>
            <div>New posts</div>
            <Post message={postsData[0].post} />
            <Post message={postsData[1].post} />
            <Post message={postsData[2].post} />
        </div>
    );
}

export default MyPosts;
