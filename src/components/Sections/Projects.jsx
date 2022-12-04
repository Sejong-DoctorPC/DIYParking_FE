import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/2.png";
import ProjectImg3 from "../../assets/img/projects/3.png";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">USPACE의 요모조모</h1>
            <p className="font13">
              USPACE에 대해 궁금하시다고요?
              <br />
              다채로운 USPACE의 매력을 알려줄게요
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="로고1"
                text="주차 구역을 본따 만든 ✨세련 그 자체✨디자인의 로고입니다."
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="로고2"
                text="주차장하면 생각나는 표지판? 그거 맞아요!"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="로고3"
                text="다소 🌟네온사인🌟 같은 심플 디자인의 로고입니다."
              />
            </div>
          </div>
          <div className="row textCenter">


          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="USPACE 로고" action={() => alert("clicked")} />
            </div>
          </div>

          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="차박 모드"
                text="오늘은 집에 있기 싫어! 차에서 별을 보다가 잠드는 굿나잇😴"
                tag="모드1"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="영화관 모드"
                text="영화관 갈 필요 있어? 지금 너와 내가 있는 여기가 극장이야✨"
                tag="모드2"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="재난 대피 모드"
                text="재난 시 대피를 위한 용도, 또는 헬기 비상 착률을 위한 용도입니다."
                tag="모드3"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="다양한 주차 모드" action={() => alert("clicked")} />
            </div>
          </div>

        </div>
      </div>

    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
