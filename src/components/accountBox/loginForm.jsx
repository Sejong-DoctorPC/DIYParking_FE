import React, { Component } from "react";
import axios from "axios";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "", // 이벤트로 전달될 username
      pwd: "", // 이벤트로 전달될 password
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.loginRequestHandler = this.loginRequestHandler.bind(this);
  }

  inputHandler(e) {
    // username과 password 입력을 위한 이벤트 핸들러
    this.setState({ [e.target.name]: e.target.value });
  }

  loginRequestHandler() {
    axios
      .post(
        // 로그인을 위한 포스트 요청
        "https://sejong-uspace.herokuapp.com/login",
        {
          // 서버의 login 컨트롤러의 객체 key의 명칭으로 인해 여기서도 'userId' 사용
          // 여기서 key 명칭을 userId가 아닌 username으로 하면 에러 발생
          user: this.state.user,
          pwd: this.state.pwd,
        },
        { "Content-Type": "application/json" }
      )
      .then((res) => {
        this.props.loginHandler(true);
        // 유저 정보를 받기 위한 get 요청을 순서대로 진행
        //return axios.get("https://localhost:4000/users/userinfo", {
        //  withCredentials: true,
        //});
      })
      .then((res) => {
        let { userId, email } = res.data.data;
        this.props.setUserInfo({
          // user data 상태 변경
          userId,
          email,
        });
      })
      .catch((err) => alert(err));
  }

  render() {
    return (
      <div className="loginContainer">
        <div className="inputField">
          <div>Username</div>
          <input
            name="user"
            onChange={(e) => this.inputHandler(e)}
            value={this.state.user}
            type="text"
          />
        </div>
        <div className="inputField">
          <div>Password</div>
          <input
            name="pwd"
            onChange={(e) => this.inputHandler(e)}
            value={this.state.pwd}
            type="password"
          />
        </div>
        <div className="passwordField">
          <button onClick={this.loginRequestHandler} className="loginBtn">
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
