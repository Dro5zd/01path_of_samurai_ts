import React from 'react';
import s from './Users.module.css'
import noPhoto from '../../assets/img/noPhoto.png'
import {UsersType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';


type UsersType1 = {
    users: UsersType[]
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}


let Users = (props: UsersType1) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.usersContainer}>
            <h1>Users</h1>
            <div className={s.pagesCount}>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : ''} onClick={() => {
                        props.onPageChanged(p)
                    }}>{p}</span>
                })}
            </div>
            {props.users.map(u => <div className={s.usersItem} key={u.id}>
                    <div>
                        <NavLink to={'/profile' + u.id}>
                            <img src={u.photos.small || noPhoto} alt=""/>
                        </NavLink>
                    </div>
                    <div className={s.usersItemName}>
                        {u.name}
                    </div>
                    {/*<div className={s.usersItemName}>*/}
                    {/*    {u.contacts.github}*/}
                    {/*    {u.contacts.facebook}*/}

                    {/*</div>*/}
                    <div>
                        {u.followed ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Follow</button> : <button onClick={() => {
                            props.follow(u.id)
                        }}>Unfollow</button>}
                    </div>
                </div>
            )}
        </div>)

}
export default Users