import style from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={`${style.wrapper}`}>
            <ul className={`${style.name__list}`}>
                <li className={`${style.name__item}`}>Sveta</li>
                <li className={`${style.name__item}`}>Sasha</li>
                <li className={`${style.name__item}`}>Eva</li>
                <li className={`${style.name__item}`}>Evgen</li>
                <li className={`${style.name__item}`}>Ksusha</li>
                <li className={`${style.name__item}`}>Leo</li>
                <li className={`${style.name__item}`}>Donny</li>
                <li className={`${style.name__item}`}>Mike</li>
                <li className={`${style.name__item}`}>Raphael</li>
            </ul>
            <ul className={`${style.dialog__list}`}>
                <li className={`${style.dialog__item}`}>Hello?</li>
                <li className={`${style.dialog__item}`}>What's up</li>
                <li className={`${style.dialog__item}`}>It impossible</li>
                <li className={`${style.dialog__item}`}>Yes</li>
                <li className={`${style.dialog__item}`}>New user join on web</li>
                <li className={`${style.dialog__item}`}>Hi all</li>
                <li className={`${style.dialog__item}`}>Hi</li>
            </ul>
        </div>
    );
}

export default Dialogs;