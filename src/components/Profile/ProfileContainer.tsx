import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/store-redux';
import {ProfileUsersType, setUserProfile} from '../../redux/profile-reducer';
import {withRouter} from 'react-router';
import {RouteComponentProps} from 'react-router-dom';
import {usersAPI} from '../api/api';

type PathParamsType = {
    userId: string
}

type mapStateToPropsPropsType = {
    profile: null | ProfileUsersType
}

type mapDispatchToPropsPropsType = {
    setUserProfile: (profile: ProfileUsersType) => void
}

export type ProfilePropsType = mapStateToPropsPropsType & mapDispatchToPropsPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        usersAPI.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: RootStateType): mapStateToPropsPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)