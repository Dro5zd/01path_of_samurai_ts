import React from 'react';
import s from './Users.module.css'
import noPhoto from '../../assets/img/noPhoto.png'


let Users = (props: any)=> {

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
                        return <span className= {props.currentPage === p ? s.selectedPage : ''} onClick={()=>{props.onPageChanged(p)}}>{p}</span>
                    })}
                </div>
                {props.users.map(u => <div className={s.usersItem} key={u.id}>
                        <div>
                            <img src={u.photos.small || noPhoto} alt=""/>
                        </div>
                        <div className={s.usersItemName}>
                            {u.name}
                        </div>
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