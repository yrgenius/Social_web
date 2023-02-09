import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <li className={`${styles.name__item}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </li>
    );
}

const Message = (props) => {
    return (
        <li className={`${styles.dialog__item}`}>{props.message}</li>
    );
}

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Sveta' },
        { id: 2, name: 'Sasha' },
        { id: 3, name: 'Eva' },
        { id: 4, name: 'Evgen' },
        { id: 5, name: 'Ksusha' },
        { id: 6, name: 'Leo' },
        { id: 7, name: 'Donny' },
        { id: 8, name: 'Mike' },
        { id: 9, name: 'Raphael' },
    ];

    let messagesData = [
        { id: 1, name: 'Hello?' },
        { id: 2, name: 'Whats up' },
        { id: 3, name: 'It impossible' },
        { id: 4, name: 'Yes' },
        { id: 5, name: 'New user join on web' },
        { id: 6, name: 'Hi all' },
        { id: 7, name: 'Hi' },
    ];

    return (
        <div className={`${styles.wrapper}`}>
            <ul className={`${styles.name__list}`}>
                <DialogItem name='Sveta' id='1' />
                <DialogItem name='Sasha' id='2' />
                <DialogItem name='Eva' id='3' />
                <DialogItem name='Evgen' id='4' />
                <DialogItem name='Ksusha' id='5' />
                <DialogItem name='Leo' id='6' />
                <DialogItem name='Donny' id='7' />
                <DialogItem name='Mike' id='8' />
                <DialogItem name='Raphael' id='9' />
            </ul>
            <ul className={`${styles.dialog__list}`}>
                <Message message='Hello?' />
                <Message message='Whats up' />
                <Message message='It impossible' />
                <Message message='Yes' />
                <Message message='New user join on web' />
                <Message message='Hi all' />
                <Message message='Hi' />
            </ul>
        </div>
    );
}

export default Dialogs;