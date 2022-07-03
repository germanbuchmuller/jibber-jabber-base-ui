import { User } from './../users';
import axios from 'axios';
import { FullPost, NewPost, Post, PostData } from './../posts';
const jjAxios = axios.create({
    baseURL: "http://localhost:8081",
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
        return jjAxios.post<NewPost, FullPost>(`${postId}/reply`, ({content: answer.text}))
    }

    createPost(post: NewPost): Promise<Post> {
        return new Promise(() => mockPost)
    }

    getFeedPosts(): Promise<Post[]> {
        return new Promise(() => mockPost)
    }

    getFullPostById(id: string): Promise<FullPost | undefined> {
        return new Promise(() => mockPost)
    }

    getPostsByUser(userId: string): Promise<Post[]> {
        return new Promise(() => mockPost)
    }

}