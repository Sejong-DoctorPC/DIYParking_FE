import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Car Number" />
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">비밀번호 찾기</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">로그인</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        아직 계정이 없으신가요?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          회원가입
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
