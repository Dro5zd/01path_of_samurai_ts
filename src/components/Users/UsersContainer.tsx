import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {RootStateType} from '../../redux/store-redux';
import {followAC, setUsersAC, unfollowAC, UsersType} from '../../redux/users-reducer';
import {Dispatch} from '@reduxjs/toolkit';

type mapStateToPropsPropsType = {
    users: UsersType[]
}

type mapDispatchToPropsPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
}

export type UsersPropsType = mapStateToPropsPropsType & mapDispatchToPropsPropsType

let mapStateToProps = (state: RootStateType): mapStateToPropsPropsType => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsPropsType => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)