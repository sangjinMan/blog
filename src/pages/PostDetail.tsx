import { useNavigate, useParams } from "react-router-dom";
import { useGetPost } from "../api/service";
import { styled } from "styled-components";

const PostDetail = () => {
  const { id } = useParams();
  const { data } = useGetPost(Number(id));
  const navi = useNavigate();

  const gotoMainPage = () => {
    navi("/");
  };

  const gotoModifyPage = (id: number) => {
    navi(`/update/${id}`);
  };

  return (
    <StyledCreate>
      <Input>{data?.title}</Input>
      <div>
        <Input style={{ fontSize: "18px" }}>{data?.content}</Input>
      </div>
      <Textarea>{data?.author}</Textarea>
      <div style={{ display: "flex", gap: "20px" }}>
        <SubmitButton onClick={gotoMainPage}>뒤로가기</SubmitButton>
        <SubmitButton onClick={() => gotoModifyPage(data?.id)}>
          수정하기
        </SubmitButton>
      </div>
    </StyledCreate>
  );
};

export default PostDetail;

const StyledCreate = styled.div`
  max-width: 1024px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.div`
  font-size: 38px;
  font-weight: 700;
  outline: none;
  padding: 20px;
  margin-bottom: 20px;
`;

const Textarea = styled.div`
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
