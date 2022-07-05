import { User, UserData } from './../users';
import axios from 'axios';
import UserService from '../../utils/userService';

const mockUser:User = {
    id: "string",
    displayName: "string",
    username: "string",
    avatar: "string",
    bio: "string"
}

const jjAxiosFollow = axios.create({
    baseURL: "https://jibberjabber.rellum.com.ar/follow",
    headers: {
        "Content-type": "application/json"
    }
})

const jjAxiosUser = axios.create({
    baseURL: "https://jibberjabber.rellum.com.ar/user",
    headers: {
        "Content-type": "application/json"
    }
})

export class UserApi implements UserData {
    getCurrentUser(): Promise<User | undefined> {
        return jjAxiosUser.get("/")
    }

    getUserById(userId: string): Promise<User | undefined> {
        return jjAxiosUser.get(`/${userId}`)
    }

    isFollowed(userId: string): Promise<boolean | undefined> {
        return jjAxiosFollow.get(`/${userId}`)
    }

    toggleFollow(userId: string): Promise<void> {
        return this.isFollowed(userId).then(followed => {
            if (followed) {
                return jjAxiosFollow.delete(`/${userId}`)
            } else {
                return jjAxiosFollow.post(`/${userId}`)
            }
        })
    }
}

jjAxiosUser.interceptors.request.use((config) => {
    if (UserService.isLoggedIn()) {
        const cb = () => {
            // @ts-ignore
            config.headers.Authorization = `Bearer ${UserService.getToken()}`;
            return Promise.resolve(config);
        };
        return UserService.updateToken(cb);
    }
});

jjAxiosFollow.interceptors.request.use((config) => {
    if (UserService.isLoggedIn()) {
        const cb = () => {
            // @ts-ignore
            config.headers.Authorization = `Bearer ${UserService.getToken()}`;
            return Promise.resolve(config);
        };
        return UserService.updateToken(cb);
    }
});
