import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/store-redux';
import {getProfile, getUserStatus, ProfileUsersType, updateUserStatus} from '../../redux/profile-reducer';
import {withRouter} from 'react-router';
import {Redirect, RouteComponentProps} from 'react-router-dom';

type PathParamsType = {
    userId: string
}

type mapStateToPropsPropsType = {
    profile: null | ProfileUsersType
    isAuth: boolean
    status: string
}

type mapDispatchToPropsPropsType = {
    getProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
}

export type ProfilePropsType = mapStateToPropsPropsType & mapDispatchToPropsPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '22957'
        }
        this.props.getProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {

        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <Profile profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
        )
    }
}

let mapStateToProps = (state: RootStateType): mapStateToPropsPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfile, getUserStatus, updateUserStatus })(WithUrlDataContainerComponent)