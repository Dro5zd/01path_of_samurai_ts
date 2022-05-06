import axios from 'axios';

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '398fd428-4e41-4ce9-836c-118b8fdb8983'}
})

export const usersAPI = {
    getAuth() {
        return instance.get('auth/me')
    },
    getUsers(currentPage: number, pageSize: number){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
            ).then(response => {return response.data})
    },
    getProfile(userId: string){
        return instance.get(`profile/` + userId)
            .then(response => {return response.data})
    },
    unfollow (userId: number){
        return instance.delete(`${userId}`)
            // .then(response => {
            // if (response.data.resultCode === 0) {
            //     props.unfollow(u.id)
            // }
            // props.toggleFollowingProgress(false, u.id)
        // })
    },
    follow (userId: number){
        return instance.post(`${userId}`)
            // .then(response => {
            //     if (response.data.resultCode === 0) {
            //         props.follow(u.id)
            //     }
            //     props.toggleFollowingProgress(false, u.id)
            // })
    }
}