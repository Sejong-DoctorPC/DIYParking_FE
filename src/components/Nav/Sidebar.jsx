import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/svg/Logo";

import axios from '../../api/axios';
const LOGOUT_URL = '/users/logout';

export default function Sidebar({ sidebarOpen, toggleSidebar }) {

  const isLoggedIn = localStorage.getItem("Log");

  const handleClick = () => {
    alert('먼저 로그인해주세요!');
  };

  const handleLogout  = async (e) => {
    e.preventDefault();
    try {
    // 로그아웃을 위한 메소드 제작
      axios
      .get(LOGOUT_URL, null, {
        "Content-Type": "application/json",
        //withCredentials: true,
        })
      alert('로그아웃 성공!');
      localStorage.clear();
      window.location.replace('/');
    } catch(err) {
      console.log(err);
    }
  }


  return (
    <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <LogoIcon />
          <h1 className="whiteColor font20" style={{ marginLeft: "15px" }}>
            USPACE
          </h1>
        </div>
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="home"
            spy={true}
            smooth={true}
            offset={-60}
          >
            메인홈
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="services"
            spy={true}
            smooth={true}
            offset={-60}
          >
           서비스 
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="projects"
            spy={true}
            smooth={true}
            offset={-60}
          >
            About
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="blog"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Notion
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Contact
          </Link>
        </li>
      </UlStyle>
      <UlStyle className="flexSpaceCenter">
        <li className="semiBold font15 pointer">
        {isLoggedIn ?  <a href="/"  onClick={handleLogout} style={{ padding: "10px 30px 10px 0" }} className="whiteColor">로그아웃</a> 
                : <a href="/login" style={{ padding: "10px 30px 10px 0"}} className="whiteColor">로그인</a>
        }
        </li>
        <li className="semiBold font15 pointer flexCenter">
        {isLoggedIn ?  <a href="/parking" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
                예약하기</a> 
                : 
                <a href="/login" onClick={handleClick} className="radius8 lightBg" style={{ padding: "10px 15px"}}>
                  시작하기</a>
          }

        </li>
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
