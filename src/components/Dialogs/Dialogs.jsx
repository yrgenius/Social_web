import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={`${style.wrapper}`}>
            <ul className={`${style.name__list}`}>
                <li className={`${style.name__item}`}>
                    <NavLink to='/dialogs/1'>Sveta</NavLink></li>
                <li className={`${style.name__item}`}>
                    <NavLink to='/dialogs/2'>Sasha</NavLink></li>
                <li className={`${style.name__item}`}>
                    <NavLink to='/dialogs/3'>Eva</NavLink></li>
                <li className={`${style.name__item}`}>
                    <NavLink to='/dialogs/4'>Evgen</NavLink></li>
                <li className={`${style.name__item}`}>
                    <NavLink to='/dialogs/5'>Ksusha</NavLink></li>
                <li className={`${style.name__item}`}>
                    <NavLink to='/dialogs/6'>Leo</NavLink></li>
                <li className={`${style.name__item}`}>
                    <NavLink to='/dialogs/7'>Donny</NavLink></li>
                <li className={`${style.name__item}`}>
                    <NavLink to='/dialogs/8'>Mike</NavLink></li>
                <li className={`${style.name__item}`}>
                    <NavLink to='/dialogs/9'>Raphael</NavLink></li>
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