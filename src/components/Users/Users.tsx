import React from 'react';
import s from './Users.module.css'
import {UsersPropsType} from './UsersContainer';
import axios from 'axios';
import noPhoto from '../../assets/img/noPhoto.png'


export class Users extends  React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
render() {
    return (
        <div className={s.usersContainer}>
            {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                    <img src={u.photos.small || noPhoto} alt=""/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={()=>{this.props.unfollow(u.id)}}>Follow</button> : <button onClick={()=>{this.props.follow(u.id)}}>Unfollow</button> }
                    </div>
                </span>
                    <span>
                        <div>
                        {u.name}
                        </div>
                    </span>
                </div>
            )}
        </div>)
}


}