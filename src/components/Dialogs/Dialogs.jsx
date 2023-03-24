import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/messageReducer';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {
    // console.dir(props.store.getState());

    let dialogs = props.store.getState().messageReducer.dialogsData;
    let messagesInStore = props.store.getState().messageReducer.messagesData;

    let dialogElements = dialogs.map((dialog) => (<DialogItem name={dialog.name} id={dialog.id} />));
    let messages = messagesInStore.map(m => (<Message message={m.name} />));
    let newMessageBody = props.store.getState().messageReducer.newMessageBody;

    let onSendMessageClick = () => { props.store.dispatch(sendMessageCreator()) }
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={`${styles.wrapper}`}>
            <ul className={`${styles.name__list}`}>
                {dialogElements}
            </ul>
            <ul className={`${styles.dialog__list}`}>
                {messages}
                <div>
                    <textarea
                        onChange={onNewMessageChange}
                        value={newMessageBody}
                        placeholder='Введите ваше сообщение'>
                    </textarea>
                    <button onClick={onSendMessageClick}>send</button>
                </div>
            </ul>
        </div>
    );
}

export default Dialogs;