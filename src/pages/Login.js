import "../App.css";
import styled from "styled-components";
import TopNavbar from "../components/Nav/TopNavbar";
import { AccountBox } from "../components/accountBox";

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
`;

function Login() {
  return (
    <>
      <TopNavbar />
      <LoginContainer>
        <AccountBox />
      </LoginContainer>
    </>
  );
}

export default Login;
