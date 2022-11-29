import React, { useRef, useState, useEffect, useContext } from 'react';
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
import AuthContext from '../../context/AuthProvider';

import axios from '../../api/axios';
const LOGIN_URL = '/auth';


export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
	const { setAuth } = useContext(AuthContext);
	const userRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState('');
	const [pwd, setPwd] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		setErrMsg('');
	}, [user, pwd]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				LOGIN_URL,
				JSON.stringify({ user, pwd }),
				{
					headers: { 'Content-Type': 'application/json' },
					withCredentials: true,
				}
			);

			const accessToken = response?.data?.accessToken;
			const roles = response?.data?.roles;
			setAuth({ user, pwd, roles, accessToken });
			setUser('');
			setPwd('');
			setSuccess(true);
		} catch (err) {
			if (!err?.response) {
				setErrMsg('No Server Response');
			} else if (err.response?.status === 400) {
				setErrMsg('Missing Username or Password');
			} else if (err.response?.status === 401) {
				setErrMsg('Unauthorized');
			} else {
				setErrMsg('Login Failed');
			}
			errRef.current.focus();
		}
	};

  return (

    <BoxContainer>
					<p
						ref={errRef}
						className={errMsg ? 'errmsg' : 'offscreen'}
						aria-live="assertive"
					>
						{errMsg}
					</p>
      <FormContainer onSubmit={handleSubmit}>
        <Input type="text" 
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                placeholder="차량 번호를 입력하세요" 
                required />
        <Input type="password"
               id="password"
               onChange={(e) => setPwd(e.target.value)}
               value={pwd}
               placeholder="비밀번호를 입력하세요" 
               required                
               />
        <SubmitButton type="submit">로그인</SubmitButton>

      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">비밀번호 찾기</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
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
