import React from 'react';
import axios, {Axios} from 'axios';
import Header from './Header';
import {RootStateType} from '../../redux/store-redux';
import {connect} from 'react-redux';
import {setUserData} from '../../redux/auth-reducer';

const instance =  axios.create({baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true, headers: {
        'API-KEY': '398fd428-4e41-4ce9-836c-118b8fdb8983'}})

class HeaderContainer extends React.Component<AuthPropsType> {
    componentDidMount() {

        instance.get('/auth/me')

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


