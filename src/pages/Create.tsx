import { useForm } from "react-hook-form";
import styled from "styled-components";
import { createPostProps } from "../types/postType";
import { useNavigate } from "react-router-dom";
import { useCreatePost } from "../api/service";
import { useState } from "react";

const Create = () => {
  const { register, handleSubmit, reset } = useForm<createPostProps>();
  const navi = useNavigate();
  const [data, setData] = useState<createPostProps>({
    title: "",
    content: "",
    author: "",
  });

  const { mutate: createMutation } = useCreatePost(data);

  const onSubmit = async (data: createPostProps) => {
    setData(data);
    await createMutation();
    reset();
    navi("/");
  };

  return (
    <StyledCreate>
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
        <SubmitButton type="submit">출간하기</SubmitButton>
      </form>
    </StyledCreate>
  );
};

export default Create;

const StyledCreate = styled.div`
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
