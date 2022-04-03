import React from 'react';
import s from './Users.module.css'
import {UsersPropsType} from './UsersContainer';

export const Users = (props: UsersPropsType) => {

    return (
        <div className={s.usersContainer}>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                    <img src={u.avatar} alt=""/>
                    </div>
                    <div>
                        <button>Follow</button>
                    </div>
                </span>
                    <span>
                        <div>
{u.fullName}
                        </div>
                    </span>
                </div>
            )}
        </div>)
}