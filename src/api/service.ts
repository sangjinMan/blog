import { PostProps, createPostProps } from "./../types/postType";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import BlogService from "./query";
import { POST } from "../constants/key";

export const useGetPosts = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [POST],
    queryFn: () => BlogService.getPosts(),
    refetchOnWindowFocus: false,
  });

  return { data, ...restQuery };
};

export const useGetPost = (id: number) => {
  const { data, ...restQuery } = useQuery({
    queryKey: [POST],
    queryFn: () => BlogService.getPost(id),
    refetchOnWindowFocus: false,
  });

  return { data, ...restQuery };
};

export const useCreatePost = (args: createPostProps) => {
  const queryClient = useQueryClient();
  const { data, ...restMutate } = useMutation({
    mutationFn: () => BlogService.createPost(args),
    onSuccess: () => {
      alert("추가됨");
      queryClient.invalidateQueries({ queryKey: [POST] });
    },
  });

  return { data, ...restMutate };
};

export const useUpdatePost = (args: PostProps, id: number) => {
  const queryClient = useQueryClient();
  const { data, ...restMutate } = useMutation({
    mutationFn: () => BlogService.updatePost(args, id),
    onSuccess: () => {
      alert("수정됨");
      queryClient.invalidateQueries({ queryKey: [POST] });
    },
  });

  return { data, ...restMutate };
};
