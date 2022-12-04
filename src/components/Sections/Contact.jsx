import React from "react";
import styled from "styled-components";
//Components
import ProjectBox from "../Elements/ProjectBox";

// Assets
import ContactImg1 from "../../assets/img/contact-1.jpg";

import ContactImg2 from "../../assets/img/kjy.jpg";
import ContactImg3 from "../../assets/img/kyh.jpg";
import ContactImg4 from "../../assets/img/psh.jpg";
import ContactImg5 from "../../assets/img/yjw.jpg";
import ContactImg6 from "../../assets/img/lyb.jpg";


export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg" >
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">닥터피시의 팀원을 소개합니다!</h1>
            <p className="font13">
              팀 닥터피시의 사랑스러운 팀원들을 만나보세요!
            </p>
          </HeaderInfo>

          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ContactImg1}
                title="인영-강"
                text="스마트기기공학전공 20학번 / 프론트엔드"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ContactImg2}
                title="진영 코"
                text="무인이동체공학전공 20학번 / 임베디드"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ContactImg3}
                title="용현 킴"
                text="무인이동체공학전공 21학번 / 백엔드"
              />
            </div>  
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ContactImg4}
                title="시현 팍"
                text="지능기전공학부 22학번 / 임베디드"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ContactImg5}
                title="jiya 유"
                text="무인이동체공학전공 21학번 / 인공지능"
              />
            </div>          
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ContactImg6}
                title="용빈리"
                text="무인이동체공학전공 19학번 / 임베디드"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  margin-bottom: 30px;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;









