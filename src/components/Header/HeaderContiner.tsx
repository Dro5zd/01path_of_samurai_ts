import React from 'react';
import Header from './Header';
import {RootStateType} from '../../redux/store-redux';
import {connect} from 'react-redux';
import {setUserData} from '../../redux/auth-reducer';
import {usersAPI} from '../api/api';


class HeaderContainer extends React.Component<AuthPropsType> {
    componentDidMount() {
        usersAPI.getAuth()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

type mapStateToPropsPropsType = {
    login: string | null
    isAuth: boolean
}
type mapDispatchToPropsPropsType = {
    setUserData: (id: number, email: string, login: string) => void
}

export type AuthPropsType = mapStateToPropsPropsType & mapDispatchToPropsPropsType

let mapStateToProps = (state: RootStateType): mapStateToPropsPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setUserData})(HeaderContainer)


