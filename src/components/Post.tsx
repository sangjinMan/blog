import { styled } from "styled-components";
import { PostProps } from "../types/postType";
import { useNavigate } from "react-router-dom";
import { useDeletePost } from "../api/service";

const Post = ({ id, title, content, author }: PostProps) => {
  const navi = useNavigate();

  const gotoCreate = () => {
    navi(`posts/${id}`);
  };

  const { mutate: deleteMutation } = useDeletePost(Number(id));

  const onClickdeletePost = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    deleteMutation();
  };

  return (
    <StyledPost onClick={gotoCreate}>
      <BlogImg>블로그 이미지 준비중...</BlogImg>
      <Title>
        <div>{title}</div>
        <div style={{ color: "#d9d9d9", fontSize: "14px", marginTop: "3px" }}>
          {content}
        </div>
      </Title>
      <Writer>
        <div>{author}</div>
        <div onClick={onClickdeletePost}>(삭제)</div>
      </Writer>
    </StyledPost>
  );
};

export default Post;

const StyledPost = styled.div`
  width: 320px;
  height: 360px;
  background-color: #212121;
  margin: 10px;
  border-radius: 0 0px 8px 8px;
  border: 1px solid #d9d9d9;
  cursor: pointer;
`;

const BlogImg = styled.div`
  width: 100%;
  height: 200px;
  background-color: #817c7c;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  width: 100%;
  height: 120px;
  padding: 20px;
`;

const Writer = styled.div`
  width: 100%;
  height: 38px;
  border-radius: 0 0px 8px 8px;
  border-top: 0.5px solid #d9d9d9;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
`;
