import React from 'react';
import s from './Users.module.css'
import {UsersPropsType} from './UsersContainer';
import axios from 'axios';
import noPhoto from '../../assets/img/noPhoto.png'


export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount = 300)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={s.usersContainer}>
                <h1>Users</h1>
                <div className={s.pagesCount}>
                    {pages.map(p => <span className= {this.props.currentPage === p ? s.selectedPage : ''} onClick={()=>{this.onPageChanged(p)}}>{p}</span>)}
                </div>
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