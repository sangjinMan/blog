import { styled } from "styled-components";
import Header from "../components/Header";
import { useGetPosts } from "../api/service";

const Home = () => {
  const { data } = useGetPosts();

  console.log("data", data);
  return (
    <StyledHome>
      <Header />
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  max-width: 1024px;
  height: 100vh;
  margin: 0 auto;
  background-color: #3f3a2f;
`;
