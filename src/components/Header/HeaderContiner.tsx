import React from 'react';
import Header from './Header';
import {RootStateType} from '../../redux/store-redux';
import {connect} from 'react-redux';
import {getAuth, logOutTC} from '../../redux/auth-reducer';


class HeaderContainer extends React.Component<AuthPropsType> {
    componentDidMount() {
        this.props.getAuth()
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
    getAuth: () => void
    logOutTC: () => void
}

export type AuthPropsType = mapStateToPropsPropsType & mapDispatchToPropsPropsType

let mapStateToProps = (state: RootStateType): mapStateToPropsPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getAuth, logOutTC})(HeaderContainer)


