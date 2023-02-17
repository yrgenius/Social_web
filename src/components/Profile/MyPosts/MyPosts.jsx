import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.post} avatar={props.avatar} />);
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        console.log(text);
    }

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Мои посты</h2>
            <div className={styles.new__post}>
                <textarea className={styles.textarea} ref={newPostElement} cols='80' rows='3' placeholder='Введите свое сообщение'></textarea>
                <button className={styles.button} onClick={addPost}>New post</button>
            </div>
            <div className={styles.posts_wrapper}>
                {postsElements}
            </div>
        </div >
    );
}

export default MyPosts;
