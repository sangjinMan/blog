import { instance } from "./instance";
import { createPostProps } from "./types";

class BlogService {
  static async getPosts() {
    return await instance.get("/get").then((res) => res.data);
  }

  static async createPost({ title, content, author }: createPostProps) {
    return await instance
      .post("/create", { title, content, author })
      .then((res) => res.data);
  }
}

export default BlogService;
