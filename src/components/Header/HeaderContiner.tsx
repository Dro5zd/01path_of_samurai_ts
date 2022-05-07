import React from 'react';
import Header from './Header';
import {RootStateType} from '../../redux/store-redux';
import {connect} from 'react-redux';
import {getAuth, setUserData} from '../../redux/auth-reducer';


class HeaderContainer extends React.Component<AuthPropsType> {
    componentDidMount() {
        this.props.getAuth()

        // usersAPI.getAuth()
        //     .then(response => {
        //         if (response.data.resultCode === 0) {
        //             let {id, email, login} = response.data.data
        //             this.props.setUserData(id, email, login)
        //         }
        //     })
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
    getAuth: () => void
}

export type AuthPropsType = mapStateToPropsPropsType & mapDispatchToPropsPropsType

let mapStateToProps = (state: RootStateType): mapStateToPropsPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setUserData, getAuth})(HeaderContainer)


