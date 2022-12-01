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


export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pwd: "",
    };
    this.errMessage = '';
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();

    const { user, pwd } = this.state;

    console.log(user, pwd);
    try {
      const response = axios.post(
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

      } catch(err) {
        if (!err?.response) {
          this.errMessage = 'No Server Response';
        } else if (err.response?.status === 409) {
          this.errMessage = 'Username Taken';
        } else {
          this.errMessage = 'Login Failed';
        }
        console.log(this.errMessage);
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>user address</label>
          <input
            type="user"
            className="form-control"
            placeholder="Enter user"
            onChange={(e) => this.setState({ user: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ pwd: e.target.value })}
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="/sign-up">Sign Up</a>
        </p>
      </form>
    );
  }
}

