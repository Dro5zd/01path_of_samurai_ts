import React from 'react';
import s from './Users.module.css'
import noPhoto from '../../assets/img/noPhoto.png'
import { UserType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';


type UsersType = {
    users: UserType[]
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleFollowingProgress: (followingInProgress: boolean, usersId: number) => void
    followingInProgress: Array<number>
}


let Users = (props: UsersType) => {

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
            {props.users.map(u => {
                    return (
                        <div className={s.usersItem} key={u.id}>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small || noPhoto} alt=""/>
                                </NavLink>
                            </div>
                            <div className={s.usersItemName}>
                                {u.name}
                            </div>
                            <div>
                                {u.followed ? <button disabled={props.followingInProgress.some(id => id == u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id)
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '398fd428-4e41-4ce9-836c-118b8fdb8983'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id)
                                        })

                                }}>Follow</button> : <button disabled={props.followingInProgress.some(id => id == u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id)

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '398fd428-4e41-4ce9-836c-118b8fdb8983'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id)

                                        })
                                }}>Unfollow</button>}
                            </div>
                        </div>
                    )
                }
            )}
        </div>)

}
export default Users