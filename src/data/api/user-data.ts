import { User, UserData } from './../users';

const mockUser:User = {
    id: "string",
    displayName: "string",
    username: "string",
    avatar: "string",
    bio: "string"
}
export class UserApi implements UserData {
    getCurrentUser(): Promise<User | undefined> {
        return new Promise(() => mockUser);
    }

    getUserById(userId: string): Promise<User | undefined> {
        return new Promise(() => mockUser);
    }

    isFollowed(userId: string): Promise<boolean | undefined> {
        return new Promise(() => mockUser);
    }

    toggleFollow(userId: string): Promise<void> {
        return new Promise(() => mockUser);
    }
}