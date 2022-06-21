import { FullPost, NewPost, Post, PostData } from './../posts';
import { axios } from 'axios';
const jjAxios = axios.create({
    baseURL: "http://localhost:8081",
    headers: {
        "Content-type": "application/json"
    }
})

export class PostApi implements PostData {
    answerPost(postId: string, answer: NewPost): Promise<FullPost> {
        return jjAxios.post<NewPost, FullPost>(`${postId}/reply`, ({content: answer.text, username: answer.user}))
    }

    createPost(post: NewPost): Promise<Post> {
        
    }

    getFeedPosts(): Promise<Post[]> {
        
    }

    getFullPostById(id: string): Promise<FullPost | undefined> {
        
    }

    getPostsByUser(userId: string): Promise<Post[]> {
        
    }

}