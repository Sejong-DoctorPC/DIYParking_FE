import React, { useRef, useState, useEffect, useContext } from "react";
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
import Home from "../../pages/Home";
import axios from '../../api/axios';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/join';
//const REGISTER_URL = '/register';


export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
	const userRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState('');
	const [validName, setValidName] = useState(false);
	const [userFocus, setUserFocus] = useState(false);

	const [pwd, setPwd] = useState('');
	const [validPwd, setValidPwd] = useState(false);
	const [pwdFocus, setPwdFocus] = useState(false);

	const [matchPwd, setMatchPwd] = useState('');
	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);

	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		setValidName(USER_REGEX.test(user));
	}, [user]);

	useEffect(() => {
		setValidPwd(PWD_REGEX.test(pwd));
		setValidMatch(pwd === matchPwd);
	}, [pwd, matchPwd]);

	useEffect(() => {
		setErrMsg('');
	}, [user, pwd, matchPwd]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		// if button enabled with JS hack
		const v1 = USER_REGEX.test(user);
		const v2 = PWD_REGEX.test(pwd);
		if (!v1 || !v2) {
			setErrMsg('Invalid Entry');
			return;
		}
    console.log(JSON.stringify({ user, pwd }));
		try {
			const response = await axios.post(
				REGISTER_URL,
				JSON.stringify({ user, pwd }),
				{
					headers: { 'Content-Type': 'application/json' },
					//withCredentials: true,
          
				}
			);
      			//console.log(JSON.stringify(response?.data));


      /*
      fetch("https://sejong-uspace.herokuapp.com/join", {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
      },
        body: JSON.stringify({ user, pwd })
      }).then(response => response.json())
*/
			// TODO: remove console.logs before deployment
			setSuccess(true);
			//clear state and controlled inputs
			setUser('');
			setPwd('');
			setMatchPwd('');
		} catch (err) {
			if (!err?.response) {
				setErrMsg('No Server Response');
			} else if (err.response?.status === 409) {
				setErrMsg('Username Taken');
			} else {
				setErrMsg('Registration Failed');
			}
			errRef.current.focus();
		}
	};

  return (
      <>
        {success ? (
          <Home />
        ) : (
          <BoxContainer >
            <p
              ref={errRef}
              className={errMsg ? 'errmsg' : 'offscreen'}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <FormContainer onSubmit={handleSubmit}>
 
              <Input
                type="text"
                id="username"
                placeholder="차량 번호를 입력해주세요"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                aria-invalid={validName ? 'false' : 'true'}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              <p
                id="uidnote"
                className={
                  userFocus && user && !validName ? 'instructions' : 'offscreen'
                }
              >
              </p>
  

              <Input
                type="password"
                id="password"
                placeholder="비밀번호를 입력하세요"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-invalid={validPwd ? 'false' : 'true'}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <p
                id="pwdnote"
                className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}
              >
              </p>
  
             
              <Input
                type="password"
                id="confirm_pwd"
                placeholder="비밀번호를 확인하세요"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatch ? 'false' : 'true'}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <p
                id="confirmnote"
                className={
                  matchFocus && !validMatch ? 'instructions' : 'offscreen'
                }
              >
              </p>
  
              <SubmitButton type="submit"
                disabled={!validName || !validPwd || !validMatch ? true : false}
              >SignIn
              </SubmitButton>
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">
              이미 계정이 있으신가요?
              <BoldLink href="#" onClick={switchToSignin}>
                로그인
              </BoldLink>
            </MutedLink>
          </BoxContainer>
        )}
      </>
    );
}
