import { styled } from "styled-components";
import Header from "../components/Header";
import { useGetPosts } from "../api/service";
import Post from "../components/Post";
import { PostProps } from "../types/postType";

const Home = () => {
  const { data } = useGetPosts();

  console.log("data", data);
  return (
    <StyledHome>
      <Header />
      <HomeBody>
        {data?.map((post: PostProps) => (
          <Post {...post} />
        ))}
      </HomeBody>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  max-width: 1024px;
  min-height: 100vh;
  margin: 0 auto;
`;

const HomeBody = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0 20px 0;
`;
