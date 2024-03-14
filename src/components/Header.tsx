import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Header = () => {
  const navi = useNavigate();

  const gotoHome = () => {
    navi("/");
  };

  const gotoWrite = () => {
    navi("/create");
  };

  return (
    <StyledHeader>
      <ServiceTitle onClick={gotoHome}>SangLog</ServiceTitle>
      <span style={{ cursor: "pointer" }} onClick={gotoWrite}>
        새 글 작성
      </span>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const ServiceTitle = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
`;
