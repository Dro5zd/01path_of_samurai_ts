import React from 'react';
import s from './Sidebar.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from '../../redux/store-redux';
import {DialogItemType} from '../../redux/dialogs-reducer';


const Sidebar = () => {
const contactItem = useSelector<RootStateType, DialogItemType[]>((store) => store.dialogsPage.dialogItem)
    return (
        <div className={s.side}>
            <h4>Контакты</h4>
            {contactItem?.map(i => <div key={i.id} className={s.contactItem}><img className={s.contactLogo} src={i.avatar} alt="ava1"/><span
                className={s.contactName}>{i.name}</span></div>)}
        </div>
    );
};


export default Sidebar;    