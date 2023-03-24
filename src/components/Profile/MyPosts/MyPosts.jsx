import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.post} avatar={props.avatar} />);
    let newPostElement = React.createRef();

    let addPosts = () => props.dispatch(addPostActionCreator());

    let onChangePost = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Мои посты</h2>
            <div className={styles.new__post}>
                <textarea className={styles.textarea}
                    onChange={onChangePost}
                    ref={newPostElement} cols='80' rows='3'
                    // placeholder='Введите свое сообщение'
                    value={props.newPostText} />
                <button className={styles.button} onClick={addPosts}>New post</button>
            </div>
            <div className={styles.posts_wrapper}>
                {postsElements}
            </div>
        </div >
    );
}

export default MyPosts;
