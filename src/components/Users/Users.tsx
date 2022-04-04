import React from 'react';
import s from './Users.module.css'
import {UsersPropsType} from './UsersContainer';
import axios from 'axios';
import noPhoto from '../../assets/img/noPhoto.png'


export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div className={s.usersContainer}>
                <h1>Users</h1>
                {this.props.users.map(u => <div className={s.usersItem} key={u.id}>
                    <div>
                    <img src={u.photos.small || noPhoto} alt=""/>
                    </div>
                    <div className={s.usersItemName}>
                        {u.name}
                    </div>

                    <div>
                        {u.followed ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Follow</button> : <button onClick={() => {
                            this.props.follow(u.id)
                        }}>Unfollow</button>}
                    </div>
                    </div>
                )}
            </div>)
    }


}