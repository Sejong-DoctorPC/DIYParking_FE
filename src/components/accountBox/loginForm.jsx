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
import AuthContext from '../../context/AuthProvider';

import axios from '../../api/axios';
const LOGIN_URL = '/login';


export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
	const [user, setUser] = useState('');
	const [pwd, setPwd] = useState('');
	const [errMsg, setErrMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(JSON.stringify({ user, pwd }));

    try {
      const response = await axios.post(
        LOGIN_URL, 
        JSON.stringify({ user,pwd,}),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        console.log(JSON.stringify(response?.data));

        alert("login successful");
        window.localStorage.setItem("token", response?.data);
        //window.location.href = "./userDetails";
        setUser('');
        setPwd('');
  
      } catch(err) {
        if (!err?.response) {
          errMsg = 'No Server Response';
        } else if (err.response?.status === 409) {
          errMsg = 'Username Taken';
        } else {
          errMsg = 'Login Failed';
        }
        console.log(errMsg);
    } finally {
      setErrMsg('');
    }
  };
  return (
      <BoxContainer>
      <FormContainer onSubmit={handleSubmit}>
        <div className="mb-3">
          <Input
            type="user"
            className="form-control"
            placeholder="Enter user"
            onChange={(e) => setUser(e.target.value)}
            />
        </div>

        <div className="mb-3">
          <Input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPwd(e.target.value)}
            />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <SubmitButton type="submit" className="btn btn-primary">
            로그인
          </SubmitButton>
        </div>
      </FormContainer>
      <MutedLink href="#">
        아직 계정이 없으시다면?
        <BoldLink href="#" onClick={switchToSignup}>
          회원가입
        </BoldLink>
      </MutedLink>
      </BoxContainer>
      
    );
}

