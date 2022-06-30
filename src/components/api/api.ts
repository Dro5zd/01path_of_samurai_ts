import axios from 'axios';

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '398fd428-4e41-4ce9-836c-118b8fdb8983'}
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
        ).then(response => {
            return response.data
        })
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },

    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    }
}

export const authAPI = {
    getAuth() {
        return instance.get('auth/me')
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    },
    getUserStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
            .then(response => {
                return response.data
            })
    },
    updateUserStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    }
}