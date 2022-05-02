import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/store-redux';
import {setUserProfile} from '../../redux/profile-reducer';

type mapStateToPropsPropsType = {
    profile: null
}

type mapDispatchToPropsPropsType = {
    setUserProfile: (profile: null) => void

}

export type ProfilePropsType = mapStateToPropsPropsType & mapDispatchToPropsPropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {

                this.props.setUserProfile(response.data)

            })

    }

    render(){
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: RootStateType): mapStateToPropsPropsType =>{
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer)