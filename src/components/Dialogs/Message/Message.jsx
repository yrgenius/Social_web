import styles from '../../Dialogs/Dialogs.module.css';

const Message = (props) => {
    return (
        <li className={`${styles.dialog__item}`}>{props.message}</li>
    );
}

export default Message;