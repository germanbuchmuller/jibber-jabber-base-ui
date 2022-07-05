import { User } from './../users';
import axios from 'axios';
import { FullPost, NewPost, Post, PostData } from './../posts';
import UserService from '../../utils/userService';

const jjAxios = axios.create({
    baseURL: "https://jibberjabber.rellum.com.ar/post",
    headers: {
        "Content-type": "application/json"
    }
})

const mockUser:User = {
    id: "string",
    displayName: "string",
    username: "string",
    avatar: "string",
    bio: "string"
}

const mockPost:Post = {
    id: "",
    text: "",
    user: mockUser
}
export class PostApi implements PostData {
    answerPost(postId: string, answer: NewPost): Promise<FullPost> {
        return jjAxios.post<NewPost, FullPost>(`/${postId}/reply`, { content: answer.text })
    }

    createPost(post: NewPost): Promise<Post> {
        return jjAxios.post<NewPost, Post>("/", { content: post.text })
    }

    getFeedPosts(): Promise<Post[]> {
        return jjAxios.get("/all").then(response => response.data.content);
    }

    getFullPostById(id: string): Promise<FullPost | undefined> {
        return jjAxios.get(`/details/${id}`).then(response => response.data);
    }

    getPostsByUser(userId: string): Promise<Post[]> {
        return jjAxios.get(`/${userId}`).then(response => response.data.content);
    }

}

jjAxios.interceptors.request.use((config) => {
    if (UserService.isLoggedIn()) {
        const cb = () => {
            // @ts-ignore
            config.headers.Authorization = `Bearer ${UserService.getToken()}`;
            return Promise.resolve(config);
        };
        return UserService.updateToken(cb);
    }
});