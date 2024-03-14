import { PostProps, createPostProps } from "../types/postType";
import { instance } from "./instance";

class BlogService {
  static async getPosts() {
    return await instance.get("/get").then((res) => res.data);
  }

  static async getPost(id: number) {
    return await instance.get(`/get/${id}`).then((res) => res.data);
  }

  static async createPost({ title, content, author }: createPostProps) {
    return await instance
      .post("/create", { title, content, author })
      .then((res) => res.data);
  }

  static async updatePost(args: PostProps, id: number) {
    return await instance.put(`/update/${id}`, args).then((res) => res.data);
  }

  static async deletePost(id: number) {
    return await instance.delete(`/delete/${id}`).then((res) => res.data);
  }
}

export default BlogService;
