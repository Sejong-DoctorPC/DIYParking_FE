import React, { Component, useRef, useState, useEffect, useContext } from 'react';
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

import axios from '../../api/axios';
const LOGIN_URL = '/login';

export function LoginForm() {

  const { switchToSignup } = useContext(AccountContext);
	const [user, setUser] = useState('');
	const [pwd, setPwd] = useState('');
	const [errMsg, setErrMsg] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        const response = await axios.post(
          LOGIN_URL, 
          JSON.stringify({ user,pwd,}),
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
        });
        console.log(JSON.stringify(response?.data));

        alert("로그인 성공!");
        window.localStorage.setItem("token", response?.data);
        //window.location.href = "./userDetails";
        setUser('');
        setPwd('');
        localStorage.setItem("Log", true);
        window.location.replace("/");
    
      } catch(err) {
        if (!err?.response) {
          setErrMsg('No Server Response');
        } else if (err.response?.status === 409) {
          setErrMsg('Username Taken');
        } else {
          setErrMsg('Login Failed');
        }
        console.log(errMsg);
      } finally {
        setErrMsg('');
      }
  };
  
  return (
      <BoxContainer>
        <FormContainer onSubmit={handleSubmit}>
          <Input
            name="user"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            type="text"
          />
          <Input
            name="pwd"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            type="password"
          />
          <SubmitButton type="submit">
            Login
          </SubmitButton>
        </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        아직 계정이 없으신가요?
        <BoldLink href="#" onClick={switchToSignup}>
          회원가입
        </BoldLink>
      </MutedLink>
    </BoxContainer>
    );
  }

