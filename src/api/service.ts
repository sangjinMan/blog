import { useQuery } from "@tanstack/react-query";
import { createPostProps } from "./types";
import BlogService from "./query";

export const useGetPosts = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["usePosts"],
    queryFn: () => BlogService.getPosts(),
    refetchOnWindowFocus: false,
  });

  return { data, ...restQuery };
};

export const useCreatePost = (args: createPostProps) => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["usePosts"],
    queryFn: () => BlogService.createPost(args),
    refetchOnWindowFocus: false,
  });

  return { data, ...restQuery };
};
