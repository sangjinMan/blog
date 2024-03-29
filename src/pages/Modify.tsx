import { useForm } from "react-hook-form";
import styled from "styled-components";
import { PostProps, createPostProps } from "../types/postType";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPost, useUpdatePost } from "../api/service";
import { useEffect, useState } from "react";

const Modify = () => {
  const navi = useNavigate();
  const { register, handleSubmit, reset, setValue } = useForm<PostProps>();

  const { id } = useParams();

  const { data } = useGetPost(Number(id));

  const [dataModify, setDataModify] = useState<PostProps>({
    title: "",
    content: "",
    author: "",
  });

  useEffect(() => {
    if (data) {
      setValue("title", data.title);
      setValue("author", data.author);
      setValue("content", data.content);
      setDataModify({
        title: data.title,
        content: data.content,
        author: data.author,
      });
    }
  }, [data, setValue]);

  const { mutate: updateMutation } = useUpdatePost(dataModify, Number(id));

  const onSubmit = async (data: createPostProps) => {
    setDataModify(data);
    await updateMutation();
    reset();
    navi("/");
  };

  return (
    <StyledModify>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("title")} placeholder="제목을 입력하세요" />
        <div>
          <Input
            style={{ fontSize: "18px" }}
            {...register("author")}
            placeholder="작성자를 입력하세요"
          />
        </div>
        <Textarea {...register("content")} placeholder="내용을 작성해 보세요" />
        <SubmitButton type="submit">수정하기</SubmitButton>
      </form>
    </StyledModify>
  );
};

export default Modify;

const StyledModify = styled.div`
  max-width: 1024px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 38px;
  font-weight: 700;
  outline: none;
  padding: 20px;
  margin-bottom: 20px;
`;

const Textarea = styled.textarea`
  outline: none;
  width: 100%;
  font-size: 16px;
  height: 400px;
  resize: none;
  padding: 20px;
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px 15px;
  background-color: #1a6dff;
  cursor: pointer;
  border-radius: 5px;
  justify-content: flex-end;
`;
