import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        { id: 1, post: 'Hi, how are you?' },
        { id: 2, post: 'It\'s my first post' },
        { id: 3, post: 'I can use props, its cool' },
    ];

    let postsElements = posts.map(p => <Post message={p.post} />);

    return (
        <div>
            <h2>My posts</h2>
            <div>New posts</div>
            {postsElements}
        </div>
    );
}

export default MyPosts;
