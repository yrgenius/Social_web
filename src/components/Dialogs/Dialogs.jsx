import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {

    let dialogElements = props.dialogs.map((dialog) => (<DialogItem name={dialog.name} id={dialog.id} />));

    let messages = props.messages.map(m => (<Message message={m.name} />));

    return (
        <div className={`${styles.wrapper}`}>
            <ul className={`${styles.name__list}`}>
                {dialogElements}
            </ul>
            <ul className={`${styles.dialog__list}`}>
                {messages}
            </ul>
        </div>
    );
}

export default Dialogs;