import React, { useState, useEffect } from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css'; // only needed for code highlighting
import axios from "axios";
import { NotionRenderer } from "react-notion";

export default function Blog() {
  const [response, setResponse] = useState({});
  useEffect(() => {
    const NOTION_PAGE_ID = 'd78f838cedc24fe290113caa7d1374d2';
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(({ data }) => {
        setResponse(data);
      });
  }, []);

  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">팀 닥터피시의 개발 스토리</h1>
            <p className="font13">
              USPACE의 개발 스토리를 노션에서 확인해보세요!
              <br />
              https://spiced-organ-962.notion.site/USPACE-d78f838cedc24fe290113caa7d1374d2
              
                 <NotionRenderer blockMap={response} fullPage={true} />
              
            </p>
          </HeaderInfo>

        </div>
      </div>

    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;