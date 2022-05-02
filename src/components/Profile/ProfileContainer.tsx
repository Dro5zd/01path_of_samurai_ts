import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/store-redux';
import {ProfileUsersType, setUserProfile} from '../../redux/profile-reducer';
import {withRouter} from 'react-router';
import {RouteComponentProps} from 'react-router-dom';

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
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