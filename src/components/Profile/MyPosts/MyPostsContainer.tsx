import {ChangeEvent} from 'react';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/store-redux';
import {Dispatch} from '@reduxjs/toolkit';
import {addPostAC, PostMessageType, updateNewPostAC} from '../../../redux/profile-reducer';


type mapDispatchToPropsPropsType = {
    onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onClickAddPostButtonHandler: () => void
}

type mapStateToPropsPropsType = {
    postMessage: Array<PostMessageType>
    newPostText: string
}

export type MyPostsProps = mapDispatchToPropsPropsType & mapStateToPropsPropsType


let mapStateToProps = (state: RootStateType): mapStateToPropsPropsType => {
    return {
        postMessage: state.profilePage.postMessage,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsPropsType => {
    return {
        onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updateNewPostAC(e.currentTarget.value))
        },
        onClickAddPostButtonHandler: () => {
            dispatch(addPostAC())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer