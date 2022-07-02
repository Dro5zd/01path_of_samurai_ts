import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/store-redux';
import {Dispatch} from '@reduxjs/toolkit';
import {addPostAC, PostMessageType} from '../../../redux/profile-reducer';


type mapDispatchToPropsPropsType = {
    onClickAddPostButtonHandler: (values: string) => void
}

type mapStateToPropsPropsType = {
    postMessage: Array<PostMessageType>
}

export type MyPostsProps = mapDispatchToPropsPropsType & mapStateToPropsPropsType


let mapStateToProps = (state: RootStateType): mapStateToPropsPropsType => {
    return {
        postMessage: state.profilePage.postMessage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsPropsType => {
    return {
        onClickAddPostButtonHandler: (values: string) => {
            dispatch(addPostAC(values))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer