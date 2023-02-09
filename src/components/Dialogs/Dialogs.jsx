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