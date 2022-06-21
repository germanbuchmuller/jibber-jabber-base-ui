import { User, UserData } from './../users';
export class UserApi implements UserData {
    getCurrentUser(): Promise<User | undefined> {
        
    }

    getUserById(userId: string): Promise<User | undefined> {
        
    }

    isFollowed(userId: string): Promise<boolean | undefined> {
        
    }

    toggleFollow(userId: string): Promise<void> {
        
    }
}