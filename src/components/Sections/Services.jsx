import React from "react";
import styled from "styled-components";
// Components
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">오직 USPACE에서 제공하는 서비스</h1>
            <p className="font16">
              여러분은 주차장하면 어떤 생각이 떠오르나요?
              <br />
              무엇을 상상하든, USPACE에서는 그 이상의 가치를 만나게 될 거예요.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="Objective1. 사고 예방"
                subtitle="지정된 장소에 주차를 유도하여 군집화 해소 및 주차장에서 발생하는 사고를 예방합니다."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Objective2. 새로운 공간"
                subtitle="주차공간을 시민을 위한 새로운 문화 공간으로 탈바꿈하여 가치를 창출합니다."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Objective3. 다양한 사용자"
                subtitle="장애인 주차공간을 유동적으로 보존하여, 사회적 약자의 편의에 기여합니다."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="whiteBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">USPACE의 기능을 알아볼까요?</h4>
                <h2 className="font40 extraBold">Creative Space for U</h2>
                <p className="font12">
                  USPACE의 관리자 회원은 주차장의 모드를 다양하게 즐길 수 있답니다.
                  <br></br>
                  주차장은... 어쩌면 하나의 체험의 공간이 아닐까요?
                  <br></br>
                  ex. 일반 모드 차박 모드, 영화관 모드
                </p>
                <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0"}}>
                  <div style={{ width: "190px" }}>
                    <FullButton title="주차장 만들기" action={() => alert("관리자 회원가입을 진행해주세요!")} />
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton title="모드 구경하기" action={() => alert("어떤 모드를 원하세요?")} border />
                  </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office" />
                    </AddImgWrapp3>

                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;

