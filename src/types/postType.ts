export type PostProps = {
  id?: number;
  title?: string;
  content?: string;
  author?: string;
};

export type createPostProps = Omit<PostProps, "id">;
